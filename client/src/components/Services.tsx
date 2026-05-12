import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Activity,
  ClipboardCheck,
  HeartPulse,
  Video,
  GraduationCap,
  FileText,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import AnimatedServiceIcon, {
  type AnimationVariant,
  type AccentTone,
} from "@/components/ui/AnimatedServiceIcon";

/* ─── Category visual system ─── */

type Category = "clinical" | "emergency";

const categoryMeta: Record<
  Category,
  {
    label: string;
    labelClass: string;
  }
> = {
  clinical: {
    label: "Clinical Care",
    labelClass: "text-[#7B2D26] bg-[#7B2D26]/8",
  },
  emergency: {
    label: "Emergency & Compliance",
    labelClass: "text-[#6B4B0B] bg-[#D9A441]/12",
  },
};

/* ─── Service data ─── */

const services: {
  icon: any;
  category: Category;
  title: string;
  description: string;
  tags: string[];
  animation: AnimationVariant;
  tone: AccentTone;
  ambient?: boolean;
  accentBorder: string;
}[] = [
  {
    icon: Stethoscope,
    category: "clinical",
    title: "On-Site Medical Support & Mobile Clinics",
    description:
      "Qualified clinical teams and mobile clinic setups for workplaces, project sites, communities, and remote operations.",
    tags: ["Field medics", "Mobile clinics", "Worksite care"],
    animation: "float",
    tone: "maroon",
    ambient: true,
    accentBorder: "border-l-[#7B2D26]",
  },
  {
    icon: Activity,
    category: "emergency",
    title: "Emergency Medical Response",
    description:
      "Rapid assessment, stabilisation, escalation, referral coordination, and emergency readiness for higher-risk environments.",
    tags: ["24/7 response", "Stabilisation", "Referral"],
    animation: "shieldGlow",
    tone: "amber",
    accentBorder: "border-l-[#92400E]",
  },
  {
    icon: ClipboardCheck,
    category: "clinical",
    title: "Occupational Health Screening",
    description:
      "Pre-employment, pre-mobilisation, fitness-for-work, periodic medicals, and role-specific workforce screening.",
    tags: ["FFW", "Screening", "Medical reports"],
    animation: "drawCheck",
    tone: "maroon",
    accentBorder: "border-l-[#7B2D26]",
  },
  {
    icon: HeartPulse,
    category: "clinical",
    title: "Preventive Health & Wellness Programmes",
    description:
      "Health talks, screenings, wellness days, chronic disease risk checks, and staff education programmes.",
    tags: ["Wellness", "Prevention", "Education"],
    animation: "heartbeat",
    tone: "maroon",
    ambient: true,
    accentBorder: "border-l-[#7B2D26]",
  },
  {
    icon: Video,
    category: "clinical",
    title: "Telemedicine Support",
    description:
      "Remote clinical guidance and follow-up support for workforces that need faster access to medical advice.",
    tags: ["Remote support", "Triage", "Follow-up"],
    animation: "signal",
    tone: "teal",
    accentBorder: "border-l-[#0F766E]",
  },
  {
    icon: GraduationCap,
    category: "emergency",
    title: "Health & Safety Training",
    description:
      "Practical first aid, emergency readiness, site health awareness, and workforce health and safety sessions.",
    tags: ["First aid", "Training", "Readiness"],
    animation: "shieldGlow",
    tone: "amber",
    accentBorder: "border-l-[#92400E]",
  },
  {
    icon: FileText,
    category: "emergency",
    title: "Incident Documentation & Reporting",
    description:
      "Clear medical incident records, handover notes, service reports, and operational health documentation.",
    tags: ["Reports", "Records", "Audit support"],
    animation: "chartRise",
    tone: "charcoal",
    accentBorder: "border-l-[#374151]",
  },
  {
    icon: ShieldCheck,
    category: "emergency",
    title: "Event / Project Medical Coverage",
    description:
      "Medical planning and standby clinical teams for corporate events, community programmes, competitions, and projects.",
    tags: ["Events", "Projects", "Coverage"],
    animation: "crossPulse",
    tone: "amber",
    accentBorder: "border-l-[#92400E]",
  },
];

/* ─── Component ─── */

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-gradient-to-b from-[#FAFBFC] to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-16"
            eyebrow="Services"
            title="Medical Support Built Around Your Workforce"
            description="Sapphire Health combines clinical care, field readiness, prevention, documentation, and emergency response into service scopes that fit real operating environments."
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const cat = categoryMeta[service.category];

            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/80 border-l-[3px] ${service.accentBorder} bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/8`}
                  >
                    {/* Shimmer overlay on hover */}
                    <span className="card-shimmer pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl" />

                    {/* Icon + category */}
                    <div className="relative z-10 mb-4 flex items-start justify-between gap-2">
                      <AnimatedServiceIcon
                        icon={service.icon}
                        animation={service.animation}
                        tone={service.tone}
                        ambient={service.ambient}
                        size={24}
                        strokeWidth={1.8}
                      />
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${cat.labelClass}`}
                      >
                        {cat.label}
                      </span>
                    </div>

                    <h3 className="relative z-10 text-[15px] font-bold leading-snug text-[#4B1E1B]">
                      {service.title}
                    </h3>

                    <p className="relative z-10 mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#4B1E1B]/5 px-2.5 py-1 text-[10px] font-medium text-[#4B1E1B]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="/corporate-inquiry">
                      <span className="relative z-10 mt-4 inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                        Explore Service
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/corporate-inquiry">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/#contact" variant="secondary">
              Talk to the Team
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
