import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/ui/cta-button";
import SectionHeading from "@/components/ui/section-heading";

/* ─── Abstract SVG illustration per industry ─── */
function IndustryVisual({ type }: { type: string }) {
  const c = "absolute inset-0 h-full w-full";

  switch (type) {
    case "oil-gas":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="250" cy="40" r="55" fill="white" opacity="0.05" />
          <circle cx="40" cy="160" r="45" fill="white" opacity="0.04" />
          {/* Oil derrick */}
          <polygon points="150,18 128,125 172,125" fill="none" stroke="white" strokeWidth="2" opacity="0.15" />
          <rect x="133" y="14" width="34" height="8" rx="2" fill="white" opacity="0.18" />
          <line x1="133" y1="50" x2="167" y2="80" stroke="white" strokeWidth="1" opacity="0.1" />
          <line x1="167" y1="50" x2="133" y2="80" stroke="white" strokeWidth="1" opacity="0.1" />
          {/* Platform */}
          <rect x="55" y="125" width="190" height="14" rx="4" fill="white" opacity="0.08" />
          <rect x="75" y="139" width="8" height="28" rx="2" fill="white" opacity="0.06" />
          <rect x="217" y="139" width="8" height="28" rx="2" fill="white" opacity="0.06" />
          {/* Medical cross */}
          <rect x="225" y="60" width="28" height="8" rx="2" fill="white" opacity="0.16" />
          <rect x="233" y="52" width="12" height="24" rx="2" fill="white" opacity="0.16" />
          {/* Waves */}
          <path d="M0,175 Q40,165 80,175 Q120,185 160,175 Q200,165 240,175 Q280,185 300,175" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="55" cy="40" r="50" fill="white" opacity="0.05" />
          <circle cx="260" cy="160" r="40" fill="white" opacity="0.04" />
          {/* Hard hat */}
          <ellipse cx="150" cy="68" rx="52" ry="28" fill="white" opacity="0.12" />
          <rect x="98" y="62" width="104" height="16" rx="5" fill="white" opacity="0.16" />
          <path d="M102,78 C102,78 98,94 96,100 L204,100 C202,94 198,78 198,78" fill="white" opacity="0.08" />
          {/* Crane */}
          <line x1="250" y1="15" x2="250" y2="160" stroke="white" strokeWidth="3" opacity="0.1" />
          <line x1="250" y1="25" x2="175" y2="25" stroke="white" strokeWidth="2.5" opacity="0.1" />
          <line x1="198" y1="25" x2="198" y2="58" stroke="white" strokeWidth="1.2" opacity="0.08" />
          {/* Safety barriers */}
          <rect x="20" y="140" width="60" height="8" rx="2" fill="white" opacity="0.08" />
          <rect x="30" y="130" width="5" height="18" rx="1" fill="white" opacity="0.06" />
          <rect x="65" y="130" width="5" height="18" rx="1" fill="white" opacity="0.06" />
        </svg>
      );
    case "logistics":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="260" cy="45" r="50" fill="white" opacity="0.05" />
          <circle cx="40" cy="155" r="40" fill="white" opacity="0.04" />
          {/* Truck body */}
          <rect x="45" y="70" width="120" height="60" rx="6" fill="white" opacity="0.12" />
          {/* Cab */}
          <rect x="155" y="80" width="50" height="50" rx="5" fill="white" opacity="0.1" />
          <rect x="170" y="88" width="28" height="22" rx="3" fill="white" opacity="0.06" />
          {/* Wheels */}
          <circle cx="85" cy="136" r="12" fill="white" opacity="0.18" />
          <circle cx="85" cy="136" r="6" fill="white" opacity="0.08" />
          <circle cx="180" cy="136" r="12" fill="white" opacity="0.18" />
          <circle cx="180" cy="136" r="6" fill="white" opacity="0.08" />
          {/* Road line */}
          <line x1="0" y1="152" x2="300" y2="152" stroke="white" strokeWidth="2" opacity="0.08" />
          <line x1="20" y1="162" x2="50" y2="162" stroke="white" strokeWidth="2" opacity="0.06" />
          <line x1="80" y1="162" x2="110" y2="162" stroke="white" strokeWidth="2" opacity="0.06" />
          <line x1="140" y1="162" x2="170" y2="162" stroke="white" strokeWidth="2" opacity="0.06" />
          <line x1="200" y1="162" x2="230" y2="162" stroke="white" strokeWidth="2" opacity="0.06" />
          {/* Health shield */}
          <path d="M245,58 L245,82 Q245,95 232,100 Q219,95 219,82 L219,58 Q232,52 245,58 Z" fill="white" opacity="0.12" />
          <rect x="226" y="72" width="18" height="5" rx="1" fill="white" opacity="0.18" />
          <rect x="232" y="66" width="6" height="17" rx="1" fill="white" opacity="0.18" />
        </svg>
      );
    case "telecoms":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="250" cy="155" r="50" fill="white" opacity="0.05" />
          <circle cx="50" cy="45" r="40" fill="white" opacity="0.04" />
          {/* Tower */}
          <rect x="143" y="25" width="14" height="145" rx="2" fill="white" opacity="0.12" />
          <line x1="130" y1="50" x2="170" y2="50" stroke="white" strokeWidth="2" opacity="0.1" />
          <line x1="134" y1="80" x2="166" y2="80" stroke="white" strokeWidth="2" opacity="0.1" />
          <line x1="137" y1="110" x2="163" y2="110" stroke="white" strokeWidth="2" opacity="0.1" />
          {/* Antenna */}
          <polygon points="150,10 143,25 157,25" fill="white" opacity="0.15" />
          {/* Signal waves */}
          <path d="M170,35 A28,28 0 0,1 198,35" fill="none" stroke="white" strokeWidth="2" opacity="0.18" />
          <path d="M175,25 A40,40 0 0,1 215,25" fill="none" stroke="white" strokeWidth="1.8" opacity="0.12" />
          <path d="M180,15 A52,52 0 0,1 232,15" fill="none" stroke="white" strokeWidth="1.5" opacity="0.08" />
          <path d="M102,35 A28,28 0 0,0 130,35" fill="none" stroke="white" strokeWidth="2" opacity="0.18" />
          <path d="M85,25 A40,40 0 0,0 125,25" fill="none" stroke="white" strokeWidth="1.8" opacity="0.12" />
          {/* Pulse */}
          <path d="M0,145 L80,145 L95,120 L110,160 L125,135 L140,145 L300,145" fill="none" stroke="white" strokeWidth="1.5" opacity="0.15" className="pulse-line-path" />
        </svg>
      );
    case "mining":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="50" r="50" fill="white" opacity="0.05" />
          <circle cx="260" cy="140" r="45" fill="white" opacity="0.04" />
          {/* Mountains */}
          <polygon points="0,160 80,50 160,160" fill="white" opacity="0.08" />
          <polygon points="100,160 200,35 300,160" fill="white" opacity="0.1" />
          <polygon points="50,160 130,75 210,160" fill="white" opacity="0.06" />
          {/* Mine entrance */}
          <path d="M120,160 Q150,130 180,160" fill="white" opacity="0.12" />
          <rect x="130" y="145" width="40" height="15" rx="2" fill="white" opacity="0.08" />
          {/* Medic cross */}
          <rect x="215" y="55" width="28" height="8" rx="2" fill="white" opacity="0.16" />
          <rect x="223" y="47" width="12" height="24" rx="2" fill="white" opacity="0.16" />
          {/* Pickaxe */}
          <line x1="55" y1="110" x2="85" y2="140" stroke="white" strokeWidth="2" opacity="0.1" />
          <path d="M50,105 L60,115 L48,118" fill="white" opacity="0.12" />
        </svg>
      );
    case "corporate":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="250" cy="50" r="50" fill="white" opacity="0.05" />
          <circle cx="45" cy="155" r="40" fill="white" opacity="0.04" />
          {/* Building */}
          <rect x="100" y="35" width="70" height="125" rx="4" fill="white" opacity="0.1" />
          <rect x="170" y="55" width="50" height="105" rx="4" fill="white" opacity="0.08" />
          {/* Windows */}
          <rect x="110" y="48" width="14" height="10" rx="1.5" fill="white" opacity="0.12" />
          <rect x="130" y="48" width="14" height="10" rx="1.5" fill="white" opacity="0.12" />
          <rect x="150" y="48" width="14" height="10" rx="1.5" fill="white" opacity="0.12" />
          <rect x="110" y="68" width="14" height="10" rx="1.5" fill="white" opacity="0.1" />
          <rect x="130" y="68" width="14" height="10" rx="1.5" fill="white" opacity="0.1" />
          <rect x="150" y="68" width="14" height="10" rx="1.5" fill="white" opacity="0.1" />
          <rect x="110" y="88" width="14" height="10" rx="1.5" fill="white" opacity="0.08" />
          <rect x="130" y="88" width="14" height="10" rx="1.5" fill="white" opacity="0.08" />
          <rect x="180" y="68" width="12" height="8" rx="1.5" fill="white" opacity="0.1" />
          <rect x="198" y="68" width="12" height="8" rx="1.5" fill="white" opacity="0.1" />
          <rect x="180" y="85" width="12" height="8" rx="1.5" fill="white" opacity="0.08" />
          <rect x="198" y="85" width="12" height="8" rx="1.5" fill="white" opacity="0.08" />
          {/* Heart wellness */}
          <path d="M48,70 C48,60 40,55 35,60 C30,65 35,74 48,86 C61,74 66,65 61,60 C56,55 48,60 48,70 Z" fill="white" opacity="0.15" />
          {/* Pulse */}
          <path d="M25,100 L38,100 L44,88 L50,108 L56,95 L62,100 L80,100" fill="none" stroke="white" strokeWidth="1.5" opacity="0.18" />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="255" cy="50" r="50" fill="white" opacity="0.05" />
          <circle cx="50" cy="150" r="45" fill="white" opacity="0.04" />
          {/* Church steeple */}
          <polygon points="150,15 135,55 165,55" fill="white" opacity="0.12" />
          <rect x="130" y="55" width="40" height="60" rx="3" fill="white" opacity="0.1" />
          <path d="M130,75 A20,20 0 0,1 170,75" fill="white" opacity="0.06" />
          {/* Cross */}
          <rect x="145" y="18" width="10" height="28" rx="2" fill="white" opacity="0.18" />
          <rect x="140" y="26" width="20" height="8" rx="2" fill="white" opacity="0.18" />
          {/* Community circles (people) */}
          <circle cx="60" cy="95" r="10" fill="white" opacity="0.12" />
          <circle cx="85" cy="88" r="10" fill="white" opacity="0.1" />
          <circle cx="215" cy="95" r="10" fill="white" opacity="0.12" />
          <circle cx="240" cy="88" r="10" fill="white" opacity="0.1" />
          {/* Body shapes */}
          <ellipse cx="60" cy="120" rx="12" ry="18" fill="white" opacity="0.06" />
          <ellipse cx="85" cy="118" rx="12" ry="18" fill="white" opacity="0.05" />
          <ellipse cx="215" cy="120" rx="12" ry="18" fill="white" opacity="0.06" />
          <ellipse cx="240" cy="118" rx="12" ry="18" fill="white" opacity="0.05" />
          {/* Connecting lines */}
          <path d="M95,100 Q150,85 205,100" fill="none" stroke="white" strokeWidth="1.2" opacity="0.1" strokeDasharray="4 3" />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 300 200" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="250" cy="150" r="50" fill="white" opacity="0.05" />
          <circle cx="50" cy="45" r="42" fill="white" opacity="0.04" />
          {/* House */}
          <polygon points="150,30 100,65 200,65" fill="white" opacity="0.1" />
          <rect x="110" y="65" width="80" height="60" rx="3" fill="white" opacity="0.08" />
          <rect x="135" y="90" width="30" height="35" rx="2" fill="white" opacity="0.06" />
          <rect x="120" y="75" width="12" height="10" rx="1" fill="white" opacity="0.1" />
          <rect x="168" y="75" width="12" height="10" rx="1" fill="white" opacity="0.1" />
          {/* Family figures */}
          <circle cx="55" cy="100" r="10" fill="white" opacity="0.14" />
          <ellipse cx="55" cy="128" rx="12" ry="20" fill="white" opacity="0.08" />
          <circle cx="80" cy="105" r="8" fill="white" opacity="0.12" />
          <ellipse cx="80" cy="130" rx="10" ry="18" fill="white" opacity="0.06" />
          <circle cx="68" cy="118" r="5" fill="white" opacity="0.1" />
          <ellipse cx="68" cy="138" rx="7" ry="12" fill="white" opacity="0.05" />
          {/* Heart */}
          <path d="M245,55 C245,45 237,40 232,45 C227,50 232,58 245,68 C258,58 263,50 258,45 C253,40 245,45 245,55 Z" fill="white" opacity="0.16" />
          {/* Globe/connection */}
          <circle cx="245" cy="110" r="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.12" />
          <ellipse cx="245" cy="110" rx="10" ry="20" fill="none" stroke="white" strokeWidth="1" opacity="0.08" />
          <line x1="225" y1="110" x2="265" y2="110" stroke="white" strokeWidth="1" opacity="0.08" />
        </svg>
      );
    default:
      return null;
  }
}

const industries = [
  {
    visual: "oil-gas",
    gradient: "from-[#1E3A5F] via-[#2C5282] to-[#4A90D9]",
    title: "Oil & Gas",
    description:
      "Offshore, onshore, and field-service medical teams with 24/7 emergency response capability.",
    stat: "24/7 Cover",
  },
  {
    visual: "construction",
    gradient: "from-[#92400E] via-[#D97706] to-[#FBBF24]",
    title: "Construction",
    description:
      "Active site medical coverage, safety training, and fitness-for-work screening for project teams.",
    stat: "Multi-site",
  },
  {
    visual: "logistics",
    gradient: "from-[#065F46] via-[#059669] to-[#6EE7B7]",
    title: "Logistics",
    description:
      "Driver health programmes, route medical support, and warehouse wellness initiatives.",
    stat: "Route-ready",
  },
  {
    visual: "telecoms",
    gradient: "from-[#0E7490] via-[#06B6D4] to-[#67E8F9]",
    title: "Telecoms",
    description:
      "Field engineer health support, tower site medical standby, and infrastructure crew coverage.",
    stat: "Field crews",
  },
  {
    visual: "mining",
    gradient: "from-[#78350F] via-[#A16207] to-[#D4A055]",
    title: "Mining",
    description:
      "Remote operations medical teams, exploration crew health screening, and evacuation planning.",
    stat: "Remote ops",
  },
  {
    visual: "corporate",
    gradient: "from-[#312E81] via-[#4338CA] to-[#818CF8]",
    title: "Corporate Organizations",
    description:
      "Employee wellness days, executive health screening, and ongoing workplace health programmes.",
    stat: "Enterprise",
  },
  {
    visual: "community",
    gradient: "from-[#831843] via-[#BE185D] to-[#F9A8D4]",
    title: "Churches & Communities",
    description:
      "Community health outreaches, event medical coverage, and group wellness programmes.",
    stat: "Outreach",
  },
  {
    visual: "family",
    gradient: "from-[#134E4A] via-[#0F766E] to-[#5EEAD4]",
    title: "Families / Diaspora",
    description:
      "Healthcare coordination for loved ones in Nigeria — screenings, check-ups, and care management.",
    stat: "Care bridge",
  },
];

export default function IndustriesServed() {
  return (
    <section
      id="who-we-serve"
      className="scroll-mt-24 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Industries"
              title="Healthcare for Every Operating Environment"
              description="From remote oil fields to corporate offices, Sapphire Health adapts clinical support to fit the unique demands of each industry."
            />
            <CTAButton
              href="/corporate-inquiry"
              variant="secondary"
              className="w-fit shrink-0"
            >
              Plan Coverage
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-black/12 hover:ring-black/10">
                  {/* ── Visual panel with industry illustration ── */}
                  <div
                    className={`relative h-[180px] overflow-hidden bg-gradient-to-br ${industry.gradient}`}
                  >
                    <IndustryVisual type={industry.visual} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Shimmer on hover */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {/* Industry label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        {industry.stat}
                      </span>
                    </div>
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-1 flex-col bg-white p-5">
                    <h3 className="text-base font-bold text-[#4B1E1B] transition-colors group-hover:text-[#9E3C34]">
                      {industry.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                      {industry.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                      <span>Learn more</span>
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
