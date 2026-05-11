# Sapphire Health Platform Design Guidelines

## Design Approach
**Selected Approach:** Design System (Material Design) with healthcare-specific adaptations
**Rationale:** Multi-portal healthcare platform requires consistency, accessibility, and information hierarchy across complex data interfaces. Material Design provides proven patterns for dashboards, forms, and data visualization while maintaining professional trust essential for healthcare.

## Brand Colors

**Primary Color (Dark Reddish Brown):**
- HEX: #4B1E1B
- RGB: (75, 30, 27)
- HSL: 4° 47% 20%
- Represents: trust, care, stability, and grounded professionalism

**Accent Color (Medium Red):**
- HEX: #9E3C34
- RGB: (158, 60, 52)
- HSL: 5° 50% 41%
- Represents: energy, compassion, vitality, life, and health

**Neutral Background:**
- HEX: #FFFFFF (White)
- For clean, professional presentation

## Typography System

**Font Family:** 
- Primary: Inter (via Google Fonts) - clean, highly legible for data-heavy interfaces
- Accent: Poppins (via Google Fonts) - for marketing pages and headings

**Hierarchy:**
- H1: text-4xl md:text-5xl, font-bold (page titles, hero headlines)
- H2: text-3xl md:text-4xl, font-semibold (section headers)
- H3: text-2xl, font-semibold (card headers, subsections)
- H4: text-xl, font-medium (dashboard widgets, form sections)
- Body: text-base, font-normal (standard content)
- Small: text-sm (metadata, captions, helper text)
- Tiny: text-xs (labels, timestamps)

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2 (tight components)
- Standard spacing: p-4, p-6, gap-4 (cards, forms)
- Section spacing: p-8, py-12, py-16 (dashboard sections)
- Page spacing: py-20, py-24 (marketing pages)

**Grid System:**
- Marketing pages: max-w-7xl container
- Dashboard content: max-w-[1400px] for data tables
- Form content: max-w-2xl for optimal readability
- Sidebar: w-64 fixed on desktop, full-width drawer on mobile

## Component Library

### Navigation
**Public Site Navigation:**
- Fixed header with logo (Sapphire Health medical symbol), nav links, "Login" + "Get Started" CTA
- Sticky on scroll with backdrop blur
- Mobile: Sheet/drawer menu

**Dashboard Navigation:**
- Persistent left sidebar (64px collapsed, 256px expanded)
- Top bar: breadcrumbs, user profile, notifications, quick actions
- Role badge indicator (Staff/Client/Patient) in top bar

### Cards & Containers
- Elevated cards: rounded-lg, shadow-md, p-6, bg-white
- Dashboard widgets: rounded-xl, shadow-sm, p-6, border
- Stat cards: grid layout with icon, value, label, trend indicator
- Hover: subtle shadow-lg transition with elevation utilities

### Forms
- Input fields: rounded-md, border, p-3, focus:ring-2
- Labels: text-sm font-medium mb-2
- Helper text: text-xs text-gray-500
- Validation: Green check for valid, red border + message for errors
- Group related fields with subtle background panels

### Buttons
- Primary: bg-primary (dark reddish brown) text-white
- Secondary: bg-secondary, muted styling
- Accent: bg-accent (medium red) for energy/action
- Icon buttons: rounded-full, p-2, hover-elevate
- All buttons use built-in hover-elevate and active-elevate-2 utilities

### Icons
**Library:** Lucide React
- Navigation: 24px outline icons
- Dashboard metrics: 32px outline icons
- Buttons: 20px icons
- Table actions: 16px icons

### Dashboard Widgets
- Metrics overview: 4-column grid (1-col mobile, 2-col tablet)
- Activity feed: Timeline layout with avatar + timestamp
- Quick actions: Grid of icon + label cards

### Telemedicine Components
- Appointment cards: Doctor photo, time, status badge, join button
- Video consultation: Full-screen overlay with controls
- Chat interface: Fixed bottom input, scrollable message history
- AI Chatbot: Sticky bottom-right with knowledge base

## Portal-Specific Layouts

### Public Website
- Hero: Full-width with background gradient overlay, h-[600px], centered content
- Services: 8 service cards including event coverage, mobile units
- Tech Features: 4 cards (AI assistant, telemedicine, mobile, security)
- Partnerships: 4 partnership types with benefits
- Team: 4-column grid with professional photos
- Contact: Form with company information
- Sticky AI Chatbot: Bottom-right corner

### Staff Dashboard
- Sidebar navigation: Clients, Deployments, Appointments, Analytics, Settings
- Overview page: Metric cards + recent activity + deployment map
- Client list: Filterable table with search
- Deployment calendar: Full calendar view

### Corporate Client Portal
- Dashboard: Contract summary, employee health metrics, upcoming services
- Employee roster: Table view with health status indicators
- Reports: Downloadable PDFs, chart visualizations
- Service requests: Form to schedule new deployments

### Patient Portal
- Dashboard: Upcoming appointments, health records summary, wellness tips
- QR Check-In: Smart check-in system for work sites/events
- Appointments: Calendar view + booking interface
- Health records: Timeline view of visits, test results, prescriptions
- Telemedicine: Quick access to video consultations

## Accessibility
- All interactive elements: focus:ring-2 focus:ring-offset-2
- Form labels: Always visible, properly associated
- Sufficient contrast ratios: WCAG AA minimum
- Keyboard navigation: Full support across all portals
- Screen reader: Proper ARIA labels on icons and interactive elements

## Images
**Logo:**
- Sapphire Health medical symbol (Star of Life with person)
- Dark reddish brown primary color

**Hero Section:**
- Mobile medical clinic/professional healthcare team
- Dark gradient overlay for text legibility

**Team Photos:**
- Dr. Oluwasanmi Oluwatobi Mercy (CEO)
- Dr. Daramola Somoto (COO)
- Engr. Israel Omoniyi (Strategy, Finance & Technology)
- Dr. Oluwasanmi Ademola Samuel (Medical Director)

## Animations
**Minimal Use Only:**
- Elevation utilities: hover-elevate, active-elevate-2
- Page transitions: Fade in content (300ms)
- Card hover: Subtle elevation increase
- Button clicks: Built-in active state
- Loading states: Spinner or skeleton screens

## Key Features
- Mobile Medical Units for diverse venues (work sites, concerts, festivals, movie sets)
- AI-Powered Health Assistant (sticky chatbot with knowledge base)
- Telemedicine with video consultations
- QR Code Check-In system
- Partnership opportunities (corporate, events, tech, insurance)
- Secure health records
