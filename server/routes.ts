import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema, insertContactSubmissionSchema, insertCorporateInquirySchema, insertNewsletterSignupSchema, insertHealthQuizResponseSchema, type InsertHealthQuizResponse } from "@shared/schema";
import { z } from "zod";
import { setupAuth, isAuthenticated, requireStaff } from "./replitAuth";
import { sendBookingConfirmation, sendStaffBookingAlert, sendContactFormAlert, sendCorporateInquiryConfirmation, sendStaffCorporateInquiryAlert } from "./emailService";
import { format } from "date-fns";

export async function registerRoutes(app: Express): Promise<Server> {
  // Note: Health check endpoint is registered in index.ts before this function is called
  // This ensures it's available immediately for Railway health checks

  // Setup authentication
  await setupAuth(app);

  // Auth endpoints - Returns user or null (no 401 to avoid Vite dev server issues)
  app.get('/api/auth/user', async (req: any, res) => {
    try {
      if (!req.isAuthenticated() || !req.user?.claims?.sub) {
        return res.json(null);
      }
      
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user || null);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.json(null);
    }
  });

  // Appointments API
  
  // Get available time slots for a specific date
  app.get("/api/appointments/available-slots/:date", async (req, res) => {
    try {
      const date = new Date(req.params.date);
      
      // Define business hours (9 AM - 5 PM, hourly slots)
      const timeSlots = [
        "09:00", "10:00", "11:00", "12:00", 
        "13:00", "14:00", "15:00", "16:00", "17:00"
      ];
      
      // Check which slots are available
      const availableSlots = await Promise.all(
        timeSlots.map(async (slot) => {
          const isAvailable = await storage.checkTimeSlotAvailability(date, slot);
          return { time: slot, available: isAvailable };
        })
      );
      
      res.json(availableSlots);
    } catch (error) {
      console.error("Error fetching available slots:", error);
      res.status(500).json({ error: "Failed to fetch available slots" });
    }
  });

  // Create new appointment
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      
      // Check if time slot is available
      const isAvailable = await storage.checkTimeSlotAvailability(
        validatedData.appointmentDate,
        validatedData.timeSlot
      );
      
      if (!isAvailable) {
        return res.status(409).json({ error: "Time slot is no longer available" });
      }
      
      const appointment = await storage.createAppointment(validatedData);
      
      // Send emails in parallel (non-blocking)
      const formattedDate = format(new Date(appointment.appointmentDate), 'EEEE, MMMM d, yyyy');
      Promise.all([
        sendBookingConfirmation(appointment.customerEmail, {
          name: appointment.customerName,
          date: formattedDate,
          timeSlot: appointment.timeSlot,
          appointmentType: appointment.appointmentType,
          phone: appointment.customerPhone || undefined,
        }),
        sendStaffBookingAlert({
          name: appointment.customerName,
          email: appointment.customerEmail,
          date: formattedDate,
          timeSlot: appointment.timeSlot,
          appointmentType: appointment.appointmentType,
          phone: appointment.customerPhone || undefined,
          message: appointment.message || undefined,
        })
      ]).catch(err => {
        console.error('❌ Email send error for appointment:', {
          error: err instanceof Error ? err.message : String(err),
          email: appointment.customerEmail,
          stack: err instanceof Error ? err.stack : undefined
        });
      });
      
      res.status(201).json(appointment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Error creating appointment:", error);
      res.status(500).json({ error: "Failed to create appointment" });
    }
  });

  // Get all appointments (for staff dashboard)
  app.get("/api/appointments", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const appointments = await storage.getAllAppointments();
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });

  // Get appointments by date range
  app.get("/api/appointments/range", async (req, res) => {
    try {
      const { startDate, endDate } = req.query;
      
      if (!startDate || !endDate) {
        return res.status(400).json({ error: "startDate and endDate are required" });
      }
      
      const appointments = await storage.getAppointmentsByDateRange(
        new Date(startDate as string),
        new Date(endDate as string)
      );
      
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });

  // Update appointment status
  app.patch("/api/appointments/:id/status", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const { status } = req.body;
      
      if (!status || !['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      
      const appointment = await storage.updateAppointmentStatus(req.params.id, status);
      
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      
      res.json(appointment);
    } catch (error) {
      console.error("Error updating appointment:", error);
      res.status(500).json({ error: "Failed to update appointment" });
    }
  });

  // Contact submissions API
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send alert email to staff (non-blocking)
      sendContactFormAlert({
        name: submission.name,
        email: submission.email,
        company: submission.company || undefined,
        message: submission.message,
      }).catch(err => {
        console.error('❌ Email send error for contact form:', {
          error: err instanceof Error ? err.message : String(err),
          email: submission.email,
          stack: err instanceof Error ? err.stack : undefined
        });
      });
      
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Error creating contact submission:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Get all contact submissions (for staff dashboard)
  app.get("/api/contact", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  // Mark contact as read
  app.patch("/api/contact/:id/read", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const submission = await storage.markContactAsRead(req.params.id);
      
      if (!submission) {
        return res.status(404).json({ error: "Contact submission not found" });
      }
      
      res.json(submission);
    } catch (error) {
      console.error("Error marking contact as read:", error);
      res.status(500).json({ error: "Failed to mark as read" });
    }
  });

  // Corporate inquiry API
  
  app.post("/api/corporate-inquiry", async (req, res) => {
    try {
      const validatedData = insertCorporateInquirySchema.parse(req.body);
      const inquiry = await storage.createCorporateInquiry(validatedData);
      
      // Send emails in parallel (non-blocking)
      Promise.all([
        sendCorporateInquiryConfirmation({
          companyName: inquiry.companyName,
          contactPerson: inquiry.contactPerson,
          email: inquiry.email,
        }),
        sendStaffCorporateInquiryAlert({
          companyName: inquiry.companyName,
          contactPerson: inquiry.contactPerson,
          email: inquiry.email,
          phone: inquiry.phone,
          employeeCount: inquiry.employeeCount,
          servicesInterested: inquiry.servicesInterested,
          message: inquiry.message,
        })
      ]).catch(err => {
        console.error('❌ Email send error for corporate inquiry:', {
          error: err instanceof Error ? err.message : String(err),
          email: inquiry.email,
          company: inquiry.companyName,
          stack: err instanceof Error ? err.stack : undefined
        });
      });
      
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Error creating corporate inquiry:", error);
      res.status(500).json({ error: "Failed to submit corporate inquiry" });
    }
  });

  // Get all corporate inquiries (for staff dashboard)
  app.get("/api/corporate-inquiry", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const inquiries = await storage.getAllCorporateInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching corporate inquiries:", error);
      res.status(500).json({ error: "Failed to fetch corporate inquiries" });
    }
  });

  // Mark corporate inquiry as contacted
  app.patch("/api/corporate-inquiry/:id/contacted", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const inquiry = await storage.markCorporateInquiryAsContacted(req.params.id);
      
      if (!inquiry) {
        return res.status(404).json({ error: "Corporate inquiry not found" });
      }
      
      res.json(inquiry);
    } catch (error) {
      console.error("Error marking corporate inquiry as contacted:", error);
      res.status(500).json({ error: "Failed to mark as contacted" });
    }
  });

  // Newsletter API
  
  // Create newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      res.status(201).json(signup);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      // Check for duplicate email
      if (error instanceof Error && error.message.includes('unique')) {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      console.error("Error creating newsletter signup:", error);
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  // Get all newsletter signups (for staff dashboard) - PROTECTED
  app.get("/api/newsletter", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const signups = await storage.getAllNewsletterSignups();
      res.json(signups);
    } catch (error) {
      console.error("Error fetching newsletter signups:", error);
      res.status(500).json({ error: "Failed to fetch newsletter signups" });
    }
  });

  // Health Quiz API
  
  // Submit health quiz response
  app.post("/api/health-quiz", async (req, res) => {
    try {
      const validatedData = insertHealthQuizResponseSchema.parse(req.body);
      
      // Calculate score and recommended service based on responses
      const score = calculateQuizScore(validatedData);
      const recommendedService = getRecommendedService(validatedData);
      
      const response = await storage.createHealthQuizResponse({
        ...validatedData,
        score,
        recommendedService,
      });
      
      res.status(201).json({ ...response, score, recommendedService });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Error creating health quiz response:", error);
      res.status(500).json({ error: "Failed to submit quiz" });
    }
  });

  // Get all health quiz responses (for staff dashboard) - PROTECTED
  app.get("/api/health-quiz", isAuthenticated, requireStaff, async (req, res) => {
    try {
      const responses = await storage.getAllHealthQuizResponses();
      res.json(responses);
    } catch (error) {
      console.error("Error fetching health quiz responses:", error);
      res.status(500).json({ error: "Failed to fetch quiz responses" });
    }
  });

  // Live Health Tracker API
  app.get("/api/health-tracker/alerts", async (req, res) => {
    try {
      const alerts = await storage.getActiveHealthAlerts();
      res.json(alerts);
    } catch (error) {
      console.error("Error fetching health alerts:", error);
      res.status(500).json({ error: "Failed to fetch health alerts" });
    }
  });

  app.get("/api/health-tracker/environmental/:city", async (req, res) => {
    try {
      const { city } = req.params;
      const data = await storage.getLatestEnvironmentalData(city);
      if (!data) {
        return res.status(404).json({ error: "No data found for this city" });
      }
      res.json(data);
    } catch (error) {
      console.error("Error fetching environmental data:", error);
      res.status(500).json({ error: "Failed to fetch environmental data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Helper functions for health quiz scoring
function calculateQuizScore(data: InsertHealthQuizResponse): string {
  let score = 0;
  
  // High priority for immediate urgency
  if (data.urgency === 'immediate') score += 50;
  else if (data.urgency === 'within-month') score += 30;
  else if (data.urgency === 'planning') score += 15;
  else if (data.urgency === 'just-exploring') score += 5;
  
  // High priority for larger companies
  if (data.employeeCount === '200+') score += 30;
  else if (data.employeeCount === '51-200') score += 20;
  else if (data.employeeCount === '11-50') score += 10;
  else if (data.employeeCount === '1-10') score += 5;
  
  // High priority for those looking to switch or without provider
  if (data.currentProvider === 'looking-to-switch') score += 20;
  else if (data.currentProvider === 'no') score += 15;
  else if (data.currentProvider === 'yes') score += 5;
  
  if (score >= 70) return 'high-priority';
  if (score >= 40) return 'medium-priority';
  return 'low-priority';
}

function getRecommendedService(data: InsertHealthQuizResponse): string {
  const primaryNeed = data.primaryNeed;
  const industry = data.industry;
  
  if (primaryNeed === 'onsite-medical') {
    if (industry === 'oil-gas' || industry === 'construction') {
      return 'Industrial On-Site Medical Coverage with 24/7 Emergency Response';
    }
    return 'On-Site Medical Coverage Package';
  }
  
  if (primaryNeed === 'event-coverage') {
    return 'Event Medical Teams Package (Festivals, Concerts, Film Productions)';
  }
  
  if (primaryNeed === 'emergency-response') {
    return 'Emergency Response & Safety Planning Package';
  }
  
  if (primaryNeed === 'wellness-programs') {
    return 'Corporate Wellness & Preventive Health Package';
  }
  
  return 'Custom Healthcare Solution';
}
