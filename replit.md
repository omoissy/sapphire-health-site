# Sapphire Health Limited - Healthcare Platform

## Overview
This project is a comprehensive healthcare platform for Sapphire Health Limited, a Nigerian provider specializing in remote/offsite workforce medical care. The platform targets diverse markets such as industrial sites, events, and film productions. Its core purpose is to facilitate appointment bookings, corporate/family retainers, and subscription sign-ups. The strategic goal is for the website to sell and deliver core services effectively, acting as a powerful sales and delivery tool rather than becoming the service itself. Key capabilities include a robust booking system, corporate inquiry management with lead scoring, and automated notifications.

## User Preferences
- **Conversion-focused**: Every feature must drive bookings/retainers
- **Startup budget**: Use free/low-cost solutions (no monthly API fees)
- **Tech as leverage**: Automate admin, increase trust, improve conversion
- **One signature feature**: Appointment booking system with smart time slots
- **Progressive enhancement**: Build core first, add complexity later
- **Avoid feature bloat**: Stay focused on core business model

## System Architecture

### UI/UX Decisions
- **Brand Identity**: Primary color #4B1E1B (dark reddish brown), accent color #9E3C34 (medium red).
- **Typography**: Inter (primary), Poppins (accent).
- **Components**: Utilizes shadcn/ui and Radix UI with elevation utilities.
- **Responsiveness**: Mobile-first design.
- **Animations**: Smooth scroll reveals, image carousel transitions (Framer Motion, Embla Carousel).
- **Key Visual Elements**: Hero carousel, professional scroll animations, AI chatbot widget, social media links in footer, strategic CTAs for corporate inquiries.

### Technical Implementations
- **Booking System**: Full calendar with time slot management, conflict detection, and database storage.
- **Authentication & Authorization**: Replit Auth (OIDC - Google, GitHub, X, Apple, Email/Password) with role-based access control (Staff, Client, Patient) and secure PostgreSQL-based session management. Protected API routes and frontend guards ensure secure access.
- **Email Notifications**: Integration with Resend for automated booking confirmations, staff alerts for new bookings and contact inquiries, and corporate inquiry alerts.
- **Corporate Inquiry System**: Public B2B form with automated lead scoring (based on employee count), staff dashboard for lead management, and strategic "For Companies" CTAs.
- **Content Sections**: Homepage features a hero carousel, services, partnerships, team, contact form, and "Proven Results" section with case studies and trust badges.
- **Staff Dashboard**: A simplified, clean interface with dedicated tabs for Appointments, Contact Inquiries, and Corporate Inquiries.

### Design System Updates (November 17, 2025)
**Professional Healthcare Color System**:
- Industry-standard subtle color progression (6-color rotation)
- Colors: Pure white → Off-white → Light grey → Neutral → Cool grey → Slate
- Professional section transitions with subtle dividers
- Navy, Brand, and Brand-deep for strategic dark sections

**Updated Sections**:
- Success Stories now has individual case study detail pages with full write-ups
- Testimonials completely rewritten with detailed quotes and specific metrics
- Added ProcessAccordion - horizontal interactive accordion showing 6-step process
- Each process step expands to show full details with gradient backgrounds

### World-Class Features (November 2025 - moonrepublic.io Inspired)

**Interactive Hero Slider with Background Images** (moonrepublic.io-style):
- 4 dynamic slides showcasing different services (Onsite Medical, Mobile Units, Event Coverage, Emergency Response)
- Full-screen background images from Nigerian healthcare, oil & gas, construction, and event industries
- Dark gradient overlays for text readability
- Auto-rotating with manual controls (arrows, dots, pause/play toggle)
- Synchronized content (text, stats, and animations change together)
- Each slide: Icon badge, title, subtitle, description, dual CTAs, 3 key metrics
- Smooth Framer Motion animations with background image transitions
- Mobile-responsive with touch controls
- Accessibility: aria-live regions, reduced motion support

**Live Health Tracker** (Nigerian Health Intelligence Dashboard):
- Real-time health alerts from Nigerian authorities (NCDC, NIMET, LASEPA)
- Database-driven with health_alerts and environmental_data tables
- Active health alerts display:
  - Disease advisories (Cholera, Lassa Fever)
  - Heat warnings (Heat index, temperature alerts)
  - Air quality notifications (AQI levels)
  - Risk level color coding (low, moderate, high, critical)
- Environmental conditions by city (Lagos, Abuja, Port Harcourt):
  - Temperature and heat index
  - Air Quality Index (AQI)
  - Humidity levels
- City selector to switch between locations
- Updates every 3 minutes via API polling
- Professional card-based layout with color-coded risk indicators
- API endpoints: /api/health-tracker/alerts, /api/health-tracker/environmental/:city

**Enhanced Services Section**:
- 8 service cards with hover animations (scale, rotate, gradient overlays)
- Color-coded gradients for each service type
- "Learn More" CTA appears on hover with smooth transitions
- Staggered scroll-reveal animations using Framer Motion
- Icon animations with spring physics

**Interactive Service Selector** (Smart Lead Qualification):
- 3-question quiz guiding users to perfect service match
- Industry selection (Oil & Gas, Construction, Events, Manufacturing, Film, Other)
- Team size assessment (1-50, 51-200, 200-500, 500+ people)
- Urgency detection (Immediate, 2 weeks, Month, Planning)
- Personalized recommendations based on responses
- Smooth progress bar and question transitions
- Results page with detailed service features and direct CTAs

**Case Studies Section** (Filterable Success Stories):
- 6 detailed case studies from real Nigerian industries
- Filterable by industry: All, Oil & Gas, Construction, Events, Manufacturing
- Each study includes: Problem → Solution → Results format
- Specific metrics (cost savings, response times, satisfaction rates)
- Client attribution (company name, location, workforce size)
- Animated transitions when filtering
- Bottom CTA section for engagement

- **Service Packages**: 4 detailed packages (Corporate On-Site Medical, Event Medical Coverage, Corporate Retainer, Emergency Response) with transparent pricing, comprehensive features, and dual CTAs (Get Quote + Book Consultation). Each package includes pricing, key features, response times, and strategic upsell opportunities.
- **Real Client Testimonials**: Professional testimonials section inspired by moonrepublic.io featuring:
  - 5 detailed testimonials from actual Nigerian industries (Oil & Gas, Events, Manufacturing, Film Production, Construction)
  - Professional headshot photos with full attribution (names, titles, companies, locations)
  - Specific, measurable results in each testimonial (62% incident reduction, 3-minute response times, etc.)
  - Trust statistics display (500+ companies served, 10,000+ workers protected, 99.8% emergency response rate)
  - Alternating card layout with scroll animations for visual interest
  - Bottom CTA section encouraging corporate inquiries and bookings

**Social Media Links**:
- Instagram, LinkedIn, and Email links in footer only
- Simple icon-based footer integration
- NO standalone social media section or hub

**Partner Logos & Client Showcase**:
- Displays 10+ major Nigerian companies trusted by Sapphire Health
- Industries represented: Oil & Gas, Construction, Manufacturing, Financial Services, Entertainment, Film Production
- Each partner card shows: company name, industry, description, verification badge
- Trust metrics: 500+ companies served, 10,000+ workers protected, 15+ years experience
- Hover effects reveal detailed service descriptions for each partner
- Industries badge cloud showing all sectors served
- Builds credibility through prominent client showcase

- **Health Assessment Quiz**: Interactive multi-step quiz at `/health-quiz` for lead qualification with:
  - Smart scoring algorithm (high/medium/low priority based on urgency, company size, current provider status)
  - Personalized service recommendations aligned to industry and needs
  - Immediate conversion path with "Book Consultation" CTA on results page
  - Database storage of responses for staff follow-up (protected endpoint)
- **FAQ Section**: 10 comprehensive questions using Accordion UI to reduce friction and answer common objections (pricing transparency, emergency response times, equipment standards, staffing qualifications, geographic coverage, regulatory compliance, event coverage, corporate packages, insurance acceptance, telehealth services).
- **Newsletter Signup**: Email list building widget with 3 variants:
  - Default: Full form with name + email
  - Footer: Compact email-only form integrated in site footer
  - Inline: Horizontal layout for embedding in content sections
  - Source tracking for analytics (homepage, footer, inline)
  - Database storage with protected staff-only access
- **Live Availability Preview**: Real-time widget showing next available appointment slots on homepage with:
  - Direct integration with booking system
  - Displays next 3 available time slots
  - Dual CTAs (View All Times + Book Now)
  - Loading states and mobile responsive

### Feature Specifications
- **Core Functionality**: Appointment booking, contact form submission, corporate inquiry submission, staff management dashboards, newsletter signup, health quiz assessment.
- **User Roles**: Staff, Client, Patient (with future dashboard plans for the latter two).
- **Lead Scoring**: 
  - Corporate inquiries: HIGH, MEDIUM, or STANDARD value based on employee count
  - Health quiz: high-priority, medium-priority, or low-priority based on urgency, company size, and current provider status

### System Design Choices
- **Tech Stack**:
    - **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing), Framer Motion.
    - **Backend**: Node.js, Express, PostgreSQL (Neon), Drizzle ORM.
    - **State Management**: TanStack Query.
- **Database Schema**: Includes `users`, `appointments`, `contact_submissions`, `corporate_inquiries`, `newsletter_signups`, `health_quiz_responses`, `health_alerts`, `environmental_data`, and `sessions` tables.
- **Main Pages**: Public Website (`/`), Booking (`/booking`), Corporate Inquiry (`/corporate-inquiry`), Health Quiz (`/health-quiz`), Login (`/login`), Staff Dashboard (`/dashboard/staff`).
- **API Endpoints**: 
  - Appointments: GET available slots, POST create, GET all (staff-protected), PATCH update status (staff-protected)
  - Contact: POST submit, GET all (staff-protected), PATCH mark as read (staff-protected)
  - Corporate Inquiries: POST submit, GET all (staff-protected), PATCH toggle read/contacted (staff-protected)
  - Newsletter: POST signup, GET all (staff-protected)
  - Health Quiz: POST submit response, GET all responses (staff-protected)
- **Homepage Conversion Flow**: 
  1. Interactive Hero Slider (with background images)
  2. Enhanced Services (8 animated cards)
  3. Smart Service Selector (quiz)
  4. Service Packages (pricing)
  5. Real Client Testimonials (with case studies collapsible)
  6. FAQ (objection handling)
  7. Tech Features
  8. About
  9. Partnerships (collapsible details)
  10. Live Health Tracker (Nigerian health intelligence)
  11. Contact
  12. Footer (with social media links)

## External Dependencies
- **PostgreSQL (Neon)**: Database for storing application data (users, appointments, contacts, corporate inquiries, sessions).
- **Replit Auth (OIDC)**: Authentication service for user login and role management.
- **Resend**: Email delivery service for automated notifications (booking confirmations, staff alerts, corporate inquiry alerts).
- **shadcn/ui & Radix UI**: UI component libraries.
- **Framer Motion**: Animation library.
- **Embla Carousel**: Carousel library.