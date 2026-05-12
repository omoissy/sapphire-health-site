import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IconBadge from "@/components/ui/icon-badge";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

const services = [
  {
    icon: Stethoscope,
    tone: "maroon" as const,
    title: "On-Site Medical Support & Mobile Clinics",
    description:
      "Qualified clinical teams and mobile clinic setups for workplaces, project sites, communities, and remote operations.",
    tags: ["Field medics", "Mobile clinics", "Worksite care"],
    useCases: ["Oil & Gas", "Construction"],
  },
  {
    icon: Activity,
    tone: "green" as const,
    title: "Emergency Medical Response",
    description:
      "Rapid assessment, stabilisation, escalation, referral coordination, and emergency readiness for higher-risk environments.",
    tags: ["24/7 response", "Stabilisation", "Referral"],
    useCases: ["All Industries"],
  },
  {
    icon: ClipboardCheck,
    tone: "blue" as const,
    title: "Occupational Health Screening",
    description:
      "Pre-employment, pre-mobilisation, fitness-for-work, periodic medicals, and role-specific workforce screening.",
    tags: ["FFW", "Screening", "Medical reports"],
    useCases: ["Corporate", "Industrial"],
  },
  {
    icon: HeartPulse,
    tone: "amber" as const,
    title: "Preventive Health & Wellness Programmes",
    description:
      "Health talks, screenings, wellness days, chronic disease risk checks, and staff education programmes.",
    tags: ["Wellness", "Prevention", "Education"],
    useCases: ["Corporate", "Community"],
  },
  {
    icon: Video,
    tone: "teal" as const,
    title: "Telemedicine Support",
    description:
      "Remote clinical guidance and follow-up support for workforces that need faster access to medical advice.",
    tags: ["Remote support", "Triage", "Follow-up"],
    useCases: ["Remote Sites", "Diaspora"],
  },
  {
    icon: GraduationCap,
    tone: "blue" as const,
    title: "Health & Safety Training",
    description:
      "Practical first aid, emergency readiness, site health awareness, and workforce health and safety sessions.",
    tags: ["First aid", "Training", "Readiness"],
    useCases: ["All Industries"],
  },
  {
    icon: ClipboardList,
    tone: "maroon" as const,
    title: "Incident Documentation & Reporting",
    description:
      "Clear medical incident records, handover notes, service reports, and operational health documentation.",
    tags: ["Reports", "Records", "Audit support"],
    useCases: ["Corporate", "Industrial"],
  },
  {
    icon: ShieldCheck,
    tone: "green" as const,
    title: "Event / Project Medical Coverage",
    description:
      "Medical planning and standby clinical teams for corporate events, community programmes, competitions, and projects.",
    tags: ["Events", "Projects", "Coverage"],
    useCases: ["Events", "Community"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[linear-gradient(180deg,#FAFBFC_0%,#FFFFFF_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-14"
            eyebrow="Services"
            title="Medical Support Built Around Your Workforce"
            description="Sapphire Health combines clinical care, field readiness, prevention, documentation, and emergency response into service scopes that fit real operating environments."
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div whileHover={{ y: -6 }} className="h-full">
                  <div className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border border-[#4B1E1B]/10 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:border-[#9E3C34]/25 hover:shadow-xl hover:shadow-[#4B1E1B]/10">
                    {/* Gradient accent bar — slides in on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#4B1E1B] via-[#9E3C34] to-[#D9A441] transition-transform duration-300 group-hover:scale-x-100" />

                    {/* Icon with hover animation */}
                    <div className="service-icon-glow mb-5">
                      <IconBadge icon={Icon} tone={service.tone} size="lg" />
                    </div>

                    <h3 className="mb-2 font-semibold leading-snug text-[#4B1E1B]">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#4B1E1B]/5 px-2 py-0.5 text-[10px] font-medium text-[#4B1E1B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Industry use cases */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="rounded-full border border-[#9E3C34]/15 px-2 py-0.5 text-[10px] font-medium text-[#9E3C34]/70"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>

                    <Link href="/corporate-inquiry">
                      <span className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#9E3C34] transition-colors hover:text-[#4B1E1B]">
                        Explore Service <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
