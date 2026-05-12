import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

/* ─── Abstract SVG illustration per service visual header ─── */
function ServiceVisual({ type }: { type: string }) {
  const c = "absolute inset-0 h-full w-full";

  switch (type) {
    case "mobile-clinic":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="260" cy="35" r="70" fill="white" opacity="0.06" />
          <circle cx="50" cy="130" r="50" fill="white" opacity="0.04" />
          <path d="M0,125 L70,125 L90,85 L110,145 L130,105 L150,125 L320,125" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" className="pulse-line-path" />
          <rect x="40" y="55" width="80" height="48" rx="8" fill="white" opacity="0.14" />
          <rect x="108" y="63" width="32" height="40" rx="6" fill="white" opacity="0.1" />
          <circle cx="62" cy="108" r="7" fill="white" opacity="0.2" />
          <circle cx="118" cy="108" r="7" fill="white" opacity="0.2" />
          <rect x="220" y="48" width="36" height="10" rx="3" fill="white" opacity="0.18" />
          <rect x="231" y="37" width="14" height="32" rx="3" fill="white" opacity="0.18" />
        </svg>
      );
    case "emergency":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="280" cy="30" r="60" fill="white" opacity="0.05" />
          <circle cx="40" cy="130" r="45" fill="white" opacity="0.04" />
          <path d="M0,90 L50,90 L70,50 L88,130 L105,65 L120,110 L140,90 L320,90" fill="none" stroke="white" strokeWidth="2.5" opacity="0.25" className="pulse-line-path" />
          <ellipse cx="160" cy="40" rx="22" ry="14" fill="white" opacity="0.15" />
          <rect x="155" y="50" width="10" height="18" rx="3" fill="white" opacity="0.12" />
          <line x1="160" y1="20" x2="160" y2="10" stroke="white" strokeWidth="2.5" opacity="0.18" />
          <line x1="140" y1="26" x2="132" y2="18" stroke="white" strokeWidth="2" opacity="0.12" />
          <line x1="180" y1="26" x2="188" y2="18" stroke="white" strokeWidth="2" opacity="0.12" />
          <line x1="35" y1="55" x2="85" y2="55" stroke="white" strokeWidth="1.2" opacity="0.1" />
          <line x1="45" y1="65" x2="95" y2="65" stroke="white" strokeWidth="1.2" opacity="0.08" />
        </svg>
      );
    case "screening":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="250" cy="45" r="65" fill="white" opacity="0.05" />
          <circle cx="65" cy="135" r="40" fill="white" opacity="0.04" />
          <rect x="50" y="28" width="62" height="82" rx="7" fill="white" opacity="0.12" />
          <rect x="65" y="22" width="32" height="12" rx="4" fill="white" opacity="0.18" />
          <line x1="60" y1="52" x2="100" y2="52" stroke="white" strokeWidth="1.5" opacity="0.14" />
          <line x1="60" y1="64" x2="100" y2="64" stroke="white" strokeWidth="1.5" opacity="0.11" />
          <line x1="60" y1="76" x2="88" y2="76" stroke="white" strokeWidth="1.5" opacity="0.09" />
          <path d="M225,52 L234,61 L250,44" fill="none" stroke="white" strokeWidth="3" opacity="0.28" strokeLinecap="round" />
          <path d="M225,78 L234,87 L250,70" fill="none" stroke="white" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
          <circle cx="170" cy="42" r="14" fill="white" opacity="0.1" />
          <path d="M152,62 Q170,55 188,62 L188,100 Q170,106 152,100 Z" fill="white" opacity="0.07" />
        </svg>
      );
    case "wellness":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="270" cy="30" r="55" fill="white" opacity="0.05" />
          <circle cx="45" cy="125" r="50" fill="white" opacity="0.04" />
          <path d="M160,52 C160,36 144,26 133,37 C122,48 133,64 160,86 C187,64 198,48 187,37 C176,26 160,36 160,52 Z" fill="white" opacity="0.16" />
          <path d="M40,125 C75,118 115,100 160,82 C205,65 245,48 285,30" fill="none" stroke="white" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
          <circle cx="80" cy="116" r="3.5" fill="white" opacity="0.28" />
          <circle cx="160" cy="82" r="3.5" fill="white" opacity="0.28" />
          <circle cx="245" cy="48" r="3.5" fill="white" opacity="0.28" />
          <path d="M242,88 C264,72 275,92 258,108 C242,92 234,76 242,88 Z" fill="white" opacity="0.12" />
        </svg>
      );
    case "telemedicine":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="45" cy="135" r="55" fill="white" opacity="0.05" />
          <circle cx="280" cy="35" r="50" fill="white" opacity="0.04" />
          <rect x="75" y="28" width="105" height="72" rx="8" fill="white" opacity="0.12" />
          <rect x="112" y="100" width="32" height="8" rx="2" fill="white" opacity="0.1" />
          <rect x="100" y="108" width="56" height="5" rx="2" fill="white" opacity="0.07" />
          <circle cx="127" cy="48" r="11" fill="white" opacity="0.16" />
          <path d="M112,66 Q127,58 142,66 L142,84 L112,84 Z" fill="white" opacity="0.1" />
          <path d="M228,60 A28,28 0 0,1 256,60" fill="none" stroke="white" strokeWidth="2.2" opacity="0.22" />
          <path d="M222,48 A38,38 0 0,1 262,48" fill="none" stroke="white" strokeWidth="1.8" opacity="0.16" />
          <path d="M216,36 A48,48 0 0,1 268,36" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" />
          <circle cx="242" cy="68" r="4" fill="white" opacity="0.28" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="265" cy="40" r="60" fill="white" opacity="0.05" />
          <circle cx="35" cy="125" r="45" fill="white" opacity="0.04" />
          <path d="M95,48 L95,112 C95,112 127,102 160,107 C193,102 225,112 225,112 L225,48 C225,48 193,38 160,43 C127,38 95,48 95,48 Z" fill="white" opacity="0.1" />
          <line x1="160" y1="43" x2="160" y2="107" stroke="white" strokeWidth="1.2" opacity="0.15" />
          <line x1="108" y1="62" x2="148" y2="59" stroke="white" strokeWidth="1" opacity="0.1" />
          <line x1="108" y1="74" x2="148" y2="71" stroke="white" strokeWidth="1" opacity="0.08" />
          <line x1="172" y1="59" x2="212" y2="62" stroke="white" strokeWidth="1" opacity="0.1" />
          <line x1="172" y1="71" x2="212" y2="74" stroke="white" strokeWidth="1" opacity="0.08" />
          <polygon points="160,16 126,33 160,42 194,33" fill="white" opacity="0.18" />
          <rect x="245" y="78" width="26" height="8" rx="2" fill="white" opacity="0.16" />
          <rect x="252" y="70" width="10" height="24" rx="2" fill="white" opacity="0.16" />
        </svg>
      );
    case "documentation":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="48" cy="35" r="55" fill="white" opacity="0.05" />
          <circle cx="280" cy="135" r="50" fill="white" opacity="0.04" />
          <rect x="55" y="28" width="58" height="72" rx="5" fill="white" opacity="0.12" />
          <path d="M93,28 L113,48 L113,100 L93,100" fill="white" opacity="0.07" />
          <line x1="65" y1="48" x2="98" y2="48" stroke="white" strokeWidth="1.5" opacity="0.13" />
          <line x1="65" y1="58" x2="98" y2="58" stroke="white" strokeWidth="1.5" opacity="0.1" />
          <line x1="65" y1="68" x2="86" y2="68" stroke="white" strokeWidth="1.5" opacity="0.08" />
          <rect x="178" y="72" width="20" height="42" rx="4" fill="white" opacity="0.16" />
          <rect x="205" y="52" width="20" height="62" rx="4" fill="white" opacity="0.12" />
          <rect x="232" y="62" width="20" height="52" rx="4" fill="white" opacity="0.18" />
          <rect x="259" y="42" width="20" height="72" rx="4" fill="white" opacity="0.1" />
          <path d="M135,58 L168,58" stroke="white" strokeWidth="1.2" opacity="0.15" strokeDasharray="4 3" />
        </svg>
      );
    case "event":
      return (
        <svg viewBox="0 0 320 160" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="265" cy="28" r="55" fill="white" opacity="0.05" />
          <circle cx="55" cy="135" r="45" fill="white" opacity="0.04" />
          <polygon points="75,38 160,22 245,38" fill="white" opacity="0.12" />
          <rect x="75" y="38" width="170" height="62" fill="white" opacity="0.07" />
          <line x1="160" y1="22" x2="160" y2="100" stroke="white" strokeWidth="1.5" opacity="0.12" />
          <rect x="143" y="45" width="34" height="9" rx="2" fill="white" opacity="0.18" />
          <rect x="154" y="38" width="12" height="24" rx="2" fill="white" opacity="0.18" />
          <circle cx="95" cy="118" r="5" fill="white" opacity="0.16" />
          <circle cx="120" cy="122" r="5" fill="white" opacity="0.12" />
          <circle cx="148" cy="118" r="5" fill="white" opacity="0.18" />
          <circle cx="175" cy="122" r="5" fill="white" opacity="0.12" />
          <circle cx="200" cy="118" r="5" fill="white" opacity="0.16" />
          <circle cx="225" cy="122" r="5" fill="white" opacity="0.1" />
          <line x1="268" y1="28" x2="268" y2="68" stroke="white" strokeWidth="1.8" opacity="0.15" />
          <path d="M268,30 L290,37 L268,44" fill="white" opacity="0.16" />
        </svg>
      );
    default:
      return null;
  }
}

const services = [
  {
    visual: "mobile-clinic",
    gradient: "from-[#4B1E1B] via-[#6B2D28] to-[#9E3C34]",
    ringColor: "ring-[#9E3C34]/20 hover:ring-[#9E3C34]/40",
    title: "On-Site Medical Support & Mobile Clinics",
    description:
      "Qualified clinical teams and mobile clinic setups for workplaces, project sites, communities, and remote operations.",
    tags: ["Field medics", "Mobile clinics", "Worksite care"],
    useCases: ["Oil & Gas", "Construction"],
  },
  {
    visual: "emergency",
    gradient: "from-[#991B1B] via-[#DC2626] to-[#F97316]",
    ringColor: "ring-[#DC2626]/20 hover:ring-[#DC2626]/40",
    title: "Emergency Medical Response",
    description:
      "Rapid assessment, stabilisation, escalation, referral coordination, and emergency readiness for higher-risk environments.",
    tags: ["24/7 response", "Stabilisation", "Referral"],
    useCases: ["All Industries"],
  },
  {
    visual: "screening",
    gradient: "from-[#1E3A5F] via-[#1D4ED8] to-[#3B82F6]",
    ringColor: "ring-[#3B82F6]/20 hover:ring-[#3B82F6]/40",
    title: "Occupational Health Screening",
    description:
      "Pre-employment, pre-mobilisation, fitness-for-work, periodic medicals, and role-specific workforce screening.",
    tags: ["FFW", "Screening", "Medical reports"],
    useCases: ["Corporate", "Industrial"],
  },
  {
    visual: "wellness",
    gradient: "from-[#065F46] via-[#059669] to-[#34D399]",
    ringColor: "ring-[#059669]/20 hover:ring-[#059669]/40",
    title: "Preventive Health & Wellness Programmes",
    description:
      "Health talks, screenings, wellness days, chronic disease risk checks, and staff education programmes.",
    tags: ["Wellness", "Prevention", "Education"],
    useCases: ["Corporate", "Community"],
  },
  {
    visual: "telemedicine",
    gradient: "from-[#134E4A] via-[#0F766E] to-[#2DD4BF]",
    ringColor: "ring-[#0F766E]/20 hover:ring-[#0F766E]/40",
    title: "Telemedicine Support",
    description:
      "Remote clinical guidance and follow-up support for workforces that need faster access to medical advice.",
    tags: ["Remote support", "Triage", "Follow-up"],
    useCases: ["Remote Sites", "Diaspora"],
  },
  {
    visual: "training",
    gradient: "from-[#312E81] via-[#4F46E5] to-[#818CF8]",
    ringColor: "ring-[#4F46E5]/20 hover:ring-[#4F46E5]/40",
    title: "Health & Safety Training",
    description:
      "Practical first aid, emergency readiness, site health awareness, and workforce health and safety sessions.",
    tags: ["First aid", "Training", "Readiness"],
    useCases: ["All Industries"],
  },
  {
    visual: "documentation",
    gradient: "from-[#1E293B] via-[#475569] to-[#94A3B8]",
    ringColor: "ring-[#475569]/20 hover:ring-[#475569]/40",
    title: "Incident Documentation & Reporting",
    description:
      "Clear medical incident records, handover notes, service reports, and operational health documentation.",
    tags: ["Reports", "Records", "Audit support"],
    useCases: ["Corporate", "Industrial"],
  },
  {
    visual: "event",
    gradient: "from-[#166534] via-[#16A34A] to-[#86EFAC]",
    ringColor: "ring-[#16A34A]/20 hover:ring-[#16A34A]/40",
    title: "Event / Project Medical Coverage",
    description:
      "Medical planning and standby clinical teams for corporate events, community programmes, competitions, and projects.",
    tags: ["Events", "Projects", "Coverage"],
    useCases: ["Events", "Community"],
  },
];

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ${service.ringColor} transition-all duration-500 hover:shadow-2xl hover:shadow-black/12`}
                >
                  {/* ── Visual header with abstract illustration ── */}
                  <div
                    className={`relative h-[140px] overflow-hidden bg-gradient-to-br ${service.gradient}`}
                  >
                    <ServiceVisual type={service.visual} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    {/* Shimmer on hover */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <h3 className="text-[15px] font-bold leading-snug text-[#4B1E1B] transition-colors group-hover:text-[#9E3C34]">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gradient-to-r from-[#4B1E1B]/8 to-[#9E3C34]/8 px-2.5 py-1 text-[10px] font-semibold text-[#4B1E1B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Industry badges */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="rounded-full border border-[#9E3C34]/15 px-2.5 py-0.5 text-[10px] font-medium text-[#9E3C34]/80"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>

                    <Link href="/corporate-inquiry">
                      <span className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#4B1E1B]/5 px-3.5 py-2 text-[13px] font-bold text-[#9E3C34] transition-all duration-300 group-hover:bg-[#4B1E1B] group-hover:text-white">
                        Explore Service{" "}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
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
