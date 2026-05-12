import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Corporate-Ready Healthcare",
    desc: "Structured health programmes designed for organizations that need reliable, professional medical support.",
    accent: "from-[#4B1E1B] to-[#9E3C34]",
  },
  {
    title: "Flexible Deployment Models",
    desc: "On-site teams, mobile clinics, retainers, or project-based coverage — scaled to your operations.",
    accent: "from-[#1E3A5F] to-[#3B82F6]",
  },
  {
    title: "Telemedicine-Enabled",
    desc: "24/7 remote clinical access for workforces in hard-to-reach locations or during off-hours.",
    accent: "from-[#134E4A] to-[#2DD4BF]",
  },
  {
    title: "Preventive Health Focus",
    desc: "Proactive screening, wellness programmes, and chronic disease management that reduce long-term costs.",
    accent: "from-[#065F46] to-[#34D399]",
  },
  {
    title: "Emergency Response Readiness",
    desc: "Rapid stabilisation, evacuation coordination, and referral pathways when every minute matters.",
    accent: "from-[#991B1B] to-[#F97316]",
  },
  {
    title: "Clear Reporting & Analytics",
    desc: "Structured incident documentation, health data trends, and workforce health insights for leadership.",
    accent: "from-[#312E81] to-[#818CF8]",
  },
  {
    title: "Human-Centered Support",
    desc: "Clinical teams who treat every person with dignity, professionalism, and genuine care.",
    accent: "from-[#831843] to-[#F9A8D4]",
  },
];

function TrustPanel() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-2xl shadow-[#4B1E1B]/15 ring-1 ring-black/5">
        {/* Header with illustration */}
        <div className="relative bg-gradient-to-br from-[#4B1E1B] via-[#6B2D28] to-[#2D1210] p-8">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="350" cy="40" r="80" fill="white" opacity="0.04" />
            <circle cx="50" cy="160" r="60" fill="white" opacity="0.03" />
            {/* Shield */}
            <path
              d="M320,60 L320,100 Q320,130 290,145 Q260,130 260,100 L260,60 Q290,48 320,60 Z"
              fill="white"
              opacity="0.08"
            />
            <rect x="282" y="82" width="20" height="6" rx="1" fill="white" opacity="0.12" />
            <rect x="287" y="75" width="10" height="20" rx="1" fill="white" opacity="0.12" />
            {/* Pulse line */}
            <path
              d="M0,130 L80,130 L100,100 L120,150 L140,115 L160,130 L400,130"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.12"
              className="pulse-line-path"
            />
          </svg>

          <div className="relative">
            <div className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
              Trusted Partner
            </div>
            <h3 className="text-2xl font-bold text-white">
              Built for Enterprise
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
              From oil fields to corporate offices, organizations trust Sapphire
              Health to keep their people safe, supported, and productive.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="divide-y divide-[#4B1E1B]/8 bg-white p-2">
          {[
            { stat: "24/7", label: "Emergency response availability", gradient: "from-[#991B1B] to-[#F97316]" },
            { stat: "98%", label: "Client satisfaction rate", gradient: "from-[#065F46] to-[#34D399]" },
            { stat: "48-72h", label: "Average deployment time", gradient: "from-[#1E3A5F] to-[#3B82F6]" },
          ].map((item) => (
            <div
              key={item.label}
              className="group/stat flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-[#4B1E1B]/3"
            >
              <span
                className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-lg font-black text-white shadow-lg`}
              >
                {item.stat}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#4B1E1B]/8 blur-3xl" />
      <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#9E3C34]/6 blur-3xl" />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F4F3] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Why Sapphire"
              title="Healthcare That Understands How You Operate"
              description="Sapphire Health combines clinical excellence with operational flexibility — giving organizations healthcare support that actually fits."
            />

            <div className="mt-10 space-y-2">
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="group flex gap-4 rounded-xl border border-transparent p-3.5 transition-all duration-300 hover:border-[#4B1E1B]/10 hover:bg-white hover:shadow-md hover:shadow-[#4B1E1B]/5">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${reason.accent} text-white shadow-md transition-transform group-hover:scale-110`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#4B1E1B]">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative hidden lg:block">
              <TrustPanel />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
