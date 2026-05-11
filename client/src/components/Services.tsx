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

const services = [
  {
    icon: Stethoscope,
    title: "On-Site Medical Support & Mobile Clinics",
    description:
      "Qualified clinical teams and mobile clinic setups for workplaces, project sites, communities, and remote operations.",
    tags: ["Field medics", "Mobile clinics", "Worksite care"],
  },
  {
    icon: Activity,
    title: "Emergency Medical Response",
    description:
      "Rapid assessment, stabilisation, escalation, referral coordination, and emergency readiness for higher-risk environments.",
    tags: ["24/7 response", "Stabilisation", "Referral"],
  },
  {
    icon: ClipboardCheck,
    title: "Occupational Health Screening",
    description:
      "Pre-employment, pre-mobilisation, fitness-for-work, periodic medicals, and role-specific workforce screening.",
    tags: ["FFW", "Screening", "Medical reports"],
  },
  {
    icon: HeartPulse,
    title: "Preventive Health & Wellness Programmes",
    description:
      "Health talks, screenings, wellness days, chronic disease risk checks, and staff education programmes.",
    tags: ["Wellness", "Prevention", "Education"],
  },
  {
    icon: Video,
    title: "Telemedicine Support",
    description:
      "Remote clinical guidance and follow-up support for workforces that need faster access to medical advice.",
    tags: ["Remote support", "Triage", "Follow-up"],
  },
  {
    icon: GraduationCap,
    title: "Health & Safety Training",
    description:
      "Practical first aid, emergency readiness, site health awareness, and workforce health and safety sessions.",
    tags: ["First aid", "Training", "Readiness"],
  },
  {
    icon: ClipboardList,
    title: "Incident Documentation & Reporting",
    description:
      "Clear medical incident records, handover notes, service reports, and operational health documentation.",
    tags: ["Reports", "Records", "Audit support"],
  },
  {
    icon: ShieldCheck,
    title: "Event / Project Medical Coverage",
    description:
      "Medical planning and standby clinical teams for corporate events, community programmes, competitions, and projects.",
    tags: ["Events", "Projects", "Coverage"],
  },
];

const serviceMedia = [
  {
    src: "/images/sapphire/sapphire-onsite-healthcare-card.jpg",
    alt: "On-site occupational health screening by Sapphire Health",
    label: "Workforce Screening",
    objectPosition: "center center",
  },
  {
    src: "/images/sapphire/sapphire-industrial-response-card.jpg",
    alt: "Sapphire Health emergency readiness support at an industrial site",
    label: "Emergency Readiness",
    objectPosition: "center 45%",
  },
  {
    src: "/images/sapphire/sapphire-team-ppe-field-card.jpg",
    alt: "Sapphire Health professional in PPE at a field operation",
    label: "Field Deployment",
    objectPosition: "center center",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
              Services
            </span>
            <h2 className="mb-4 text-3xl font-bold text-[#4B1E1B] sm:text-4xl">
              Medical Support Built Around Your Workforce
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
              Sapphire Health combines clinical care, field readiness, prevention, documentation, and emergency response into service scopes that fit real operating environments.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {serviceMedia.map((item) => (
              <figure
                key={item.label}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100 bg-[#4B1E1B]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: item.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D0C]/78 via-[#1A0D0C]/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 text-sm font-semibold text-white">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  className="group flex h-full flex-col rounded-lg border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#4B1E1B]/20 hover:shadow-lg"
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#4B1E1B]/10 transition-colors duration-300 group-hover:bg-[#4B1E1B]">
                    <Icon className="h-6 w-6 text-[#4B1E1B] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold leading-snug text-[#4B1E1B]">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
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
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/corporate-inquiry">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md bg-[#4B1E1B] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9E3C34]"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-md border border-[#4B1E1B]/20 px-8 py-3.5 text-sm font-semibold text-[#4B1E1B] transition-colors hover:bg-[#4B1E1B]/5"
            >
              Talk to the Team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
