import { type User, type UpsertUser, type Appointment, type InsertAppointment, type ContactSubmission, type InsertContactSubmission, type CorporateInquiry, type InsertCorporateInquiry, type NewsletterSignup, type InsertNewsletterSignup, type HealthQuizResponse, type InsertHealthQuizResponse, type HealthAlert, type EnvironmentalData, appointments, contactSubmissions, corporateInquiries, newsletterSignups, healthQuizResponses, users, healthAlerts, environmentalData } from "@shared/schema";
import { db } from "./db";
import { eq, and, gte, lte, sql, desc } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  getAppointmentsByDate(date: Date): Promise<Appointment[]>;
  getAppointmentsByDateRange(startDate: Date, endDate: Date): Promise<Appointment[]>;
  getAllAppointments(): Promise<Appointment[]>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined>;
  checkTimeSlotAvailability(date: Date, timeSlot: string): Promise<boolean>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  markContactAsRead(id: string): Promise<ContactSubmission | undefined>;
  
  // Corporate inquiry methods
  createCorporateInquiry(inquiry: InsertCorporateInquiry): Promise<CorporateInquiry>;
  getAllCorporateInquiries(): Promise<CorporateInquiry[]>;
  markCorporateInquiryAsContacted(id: string): Promise<CorporateInquiry | undefined>;
  
  // Newsletter methods
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  getAllNewsletterSignups(): Promise<NewsletterSignup[]>;
  
  // Health quiz methods
  createHealthQuizResponse(response: InsertHealthQuizResponse): Promise<HealthQuizResponse>;
  getAllHealthQuizResponses(): Promise<HealthQuizResponse[]>;
  
  // Live health tracker methods
  getActiveHealthAlerts(): Promise<HealthAlert[]>;
  getLatestEnvironmentalData(city: string): Promise<EnvironmentalData | undefined>;
}

export class DbStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Appointment methods
  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const result = await db.insert(appointments).values(appointment).returning();
    return result[0];
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    const result = await db.select().from(appointments).where(eq(appointments.id, id)).limit(1);
    return result[0];
  }

  async getAppointmentsByDate(date: Date): Promise<Appointment[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await db.select().from(appointments)
      .where(
        and(
          gte(appointments.appointmentDate, startOfDay),
          lte(appointments.appointmentDate, endOfDay)
        )
      );
  }

  async getAppointmentsByDateRange(startDate: Date, endDate: Date): Promise<Appointment[]> {
    return await db.select().from(appointments)
      .where(
        and(
          gte(appointments.appointmentDate, startDate),
          lte(appointments.appointmentDate, endDate)
        )
      );
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments);
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined> {
    const result = await db.update(appointments)
      .set({ status, updatedAt: new Date() })
      .where(eq(appointments.id, id))
      .returning();
    return result[0];
  }

  async checkTimeSlotAvailability(date: Date, timeSlot: string): Promise<boolean> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Check for both pending and confirmed appointments to prevent double booking
    const existing = await db.select().from(appointments)
      .where(
        and(
          gte(appointments.appointmentDate, startOfDay),
          lte(appointments.appointmentDate, endOfDay),
          eq(appointments.timeSlot, timeSlot),
          sql`${appointments.status} IN ('pending', 'confirmed')`
        )
      )
      .limit(1);

    return existing.length === 0; // true if available
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async markContactAsRead(id: string): Promise<ContactSubmission | undefined> {
    const result = await db.update(contactSubmissions)
      .set({ isRead: true })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return result[0];
  }

  // Corporate inquiry methods
  async createCorporateInquiry(inquiry: InsertCorporateInquiry): Promise<CorporateInquiry> {
    const result = await db.insert(corporateInquiries).values(inquiry).returning();
    return result[0];
  }

  async getAllCorporateInquiries(): Promise<CorporateInquiry[]> {
    return await db.select().from(corporateInquiries);
  }

  async markCorporateInquiryAsContacted(id: string): Promise<CorporateInquiry | undefined> {
    const result = await db.update(corporateInquiries)
      .set({ isContacted: true, isRead: true })
      .where(eq(corporateInquiries.id, id))
      .returning();
    return result[0];
  }

  // Newsletter methods
  async createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const result = await db.insert(newsletterSignups).values(signup).returning();
    return result[0];
  }

  async getAllNewsletterSignups(): Promise<NewsletterSignup[]> {
    return await db.select().from(newsletterSignups);
  }

  // Health quiz methods
  async createHealthQuizResponse(response: InsertHealthQuizResponse): Promise<HealthQuizResponse> {
    const result = await db.insert(healthQuizResponses).values(response).returning();
    return result[0];
  }

  async getAllHealthQuizResponses(): Promise<HealthQuizResponse[]> {
    return await db.select().from(healthQuizResponses);
  }

  // Live health tracker methods
  async getActiveHealthAlerts(): Promise<HealthAlert[]> {
    return await db.select()
      .from(healthAlerts)
      .where(eq(healthAlerts.isActive, true))
      .orderBy(desc(healthAlerts.createdAt));
  }

  async getLatestEnvironmentalData(city: string): Promise<EnvironmentalData | undefined> {
    const result = await db.select()
      .from(environmentalData)
      .where(eq(environmentalData.city, city))
      .orderBy(desc(environmentalData.createdAt))
      .limit(1);
    return result[0];
  }
}

export const storage = new DbStorage();
