import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table (required for Replit Auth)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table (updated for Replit Auth)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: text("role").notNull().default('patient'), // 'staff', 'client', 'patient'
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const appointments = pgTable("appointments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone").notNull(),
  companyName: text("company_name"),
  appointmentType: text("appointment_type").notNull(), // 'consultation', 'site-visit', 'event-coverage'
  appointmentDate: timestamp("appointment_date", { mode: 'date' }).notNull(),
  timeSlot: text("time_slot").notNull(), // '09:00', '10:00', '11:00', etc.
  message: text("message"),
  status: text("status").notNull().default('pending'), // 'pending', 'confirmed', 'cancelled', 'completed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerEmail: z.string().email("Invalid email address"),
  customerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  appointmentType: z.enum(['consultation', 'site-visit', 'event-coverage']),
  appointmentDate: z.coerce.date(),
  timeSlot: z.string(),
  status: z.enum(['pending', 'confirmed', 'cancelled', 'completed']).optional(),
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  isRead: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters").optional().or(z.literal('')),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const corporateInquiries = pgTable("corporate_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  employeeCount: text("employee_count").notNull(), // '1-10', '11-50', '51-200', '200+'
  servicesInterested: text("services_interested").array().notNull(), // ['onsite-coverage', 'event-medical', 'retainers', 'emergency-response', 'wellness-programs']
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  isContacted: boolean("is_contacted").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCorporateInquirySchema = createInsertSchema(corporateInquiries).omit({
  id: true,
  isRead: true,
  isContacted: true,
  createdAt: true,
}).extend({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  employeeCount: z.enum(['1-10', '11-50', '51-200', '200+']),
  servicesInterested: z.array(z.enum(['onsite-coverage', 'event-medical', 'retainers', 'emergency-response', 'wellness-programs'])).min(1, "Please select at least one service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertCorporateInquiry = z.infer<typeof insertCorporateInquirySchema>;
export type CorporateInquiry = typeof corporateInquiries.$inferSelect;

export const newsletterSignups = pgTable("newsletter_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  name: text("name"),
  source: text("source"), // 'homepage', 'quiz', 'footer', etc.
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSignupSchema = createInsertSchema(newsletterSignups).omit({
  id: true,
  isActive: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
  source: z.string().optional(),
});

export type InsertNewsletterSignup = z.infer<typeof insertNewsletterSignupSchema>;
export type NewsletterSignup = typeof newsletterSignups.$inferSelect;

export const healthQuizResponses = pgTable("health_quiz_responses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  name: text("name").notNull(),
  phone: text("phone"),
  companyName: text("company_name"),
  industry: text("industry"), // 'oil-gas', 'construction', 'events', 'manufacturing', 'other'
  employeeCount: text("employee_count"), // '1-10', '11-50', '51-200', '200+'
  primaryNeed: text("primary_need"), // 'onsite-medical', 'emergency-response', 'event-coverage', 'wellness-programs'
  currentProvider: text("current_provider"), // 'yes', 'no', 'looking-to-switch'
  urgency: text("urgency"), // 'immediate', 'within-month', 'planning', 'just-exploring'
  recommendedService: text("recommended_service"),
  score: text("score"), // 'high-priority', 'medium-priority', 'low-priority'
  isContacted: boolean("is_contacted").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertHealthQuizResponseSchema = createInsertSchema(healthQuizResponses).omit({
  id: true,
  isContacted: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  industry: z.enum(['oil-gas', 'construction', 'events', 'manufacturing', 'other']).optional(),
  employeeCount: z.enum(['1-10', '11-50', '51-200', '200+']).optional(),
  primaryNeed: z.enum(['onsite-medical', 'emergency-response', 'event-coverage', 'wellness-programs']),
  currentProvider: z.enum(['yes', 'no', 'looking-to-switch']),
  urgency: z.enum(['immediate', 'within-month', 'planning', 'just-exploring']),
  recommendedService: z.string().optional(),
  score: z.string().optional(),
});

export type InsertHealthQuizResponse = z.infer<typeof insertHealthQuizResponseSchema>;
export type HealthQuizResponse = typeof healthQuizResponses.$inferSelect;

// Live Health Alerts (NCDC, disease outbreaks, etc.)
export const healthAlerts = pgTable("health_alerts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  alertType: text("alert_type").notNull(), // 'disease', 'heat', 'air-quality', 'environmental'
  location: text("location").notNull(), // 'Lagos', 'Abuja', 'Port Harcourt', 'Nigeria-wide'
  riskLevel: text("risk_level").notNull(), // 'low', 'moderate', 'high', 'critical'
  title: text("title").notNull(),
  message: text("message").notNull(),
  source: text("source").notNull(), // 'NCDC', 'NIMET', 'LASEPA', etc.
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertHealthAlertSchema = createInsertSchema(healthAlerts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertHealthAlert = z.infer<typeof insertHealthAlertSchema>;
export type HealthAlert = typeof healthAlerts.$inferSelect;

// Environmental Data (temperature, AQI, etc.)
export const environmentalData = pgTable("environmental_data", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  city: text("city").notNull(), // 'Lagos', 'Abuja', 'Port Harcourt'
  temperature: text("temperature"), // e.g., "34"
  humidity: text("humidity"), // e.g., "75"
  airQualityIndex: text("air_quality_index"), // e.g., "82"
  uvIndex: text("uv_index"), // e.g., "8"
  heatIndex: text("heat_index"), // e.g., "40" (feels like)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertEnvironmentalDataSchema = createInsertSchema(environmentalData).omit({
  id: true,
  createdAt: true,
});

export type InsertEnvironmentalData = z.infer<typeof insertEnvironmentalDataSchema>;
export type EnvironmentalData = typeof environmentalData.$inferSelect;
