import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

/* ─── Step illustration SVGs ─── */
function StepVisual({ type }: { type: string }) {
  const c = "absolute inset-0 h-full w-full";
  switch (type) {
    case "assess":
      return (
        <svg viewBox="0 0 280 120" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="230" cy="30" r="45" fill="white" opacity="0.06" />
          <circle cx="40" cy="100" r="35" fill="white" opacity="0.04" />
          {/* Magnifying glass */}
          <circle cx="120" cy="50" r="25" fill="none" stroke="white" strokeWidth="2.5" opacity="0.2" />
          <line x1="140" y1="68" x2="158" y2="86" stroke="white" strokeWidth="3" opacity="0.18" strokeLinecap="round" />
          {/* Checkmarks inside */}
          <path d="M108,48 L115,55 L132,40" fill="none" stroke="white" strokeWidth="2" opacity="0.25" strokeLinecap="round" />
          {/* Building outline */}
          <rect x="190" y="40" width="40" height="50" rx="4" fill="white" opacity="0.08" />
          <rect x="197" y="50" width="8" height="6" rx="1" fill="white" opacity="0.12" />
          <rect x="215" y="50" width="8" height="6" rx="1" fill="white" opacity="0.12" />
          <rect x="197" y="62" width="8" height="6" rx="1" fill="white" opacity="0.1" />
          <rect x="215" y="62" width="8" height="6" rx="1" fill="white" opacity="0.1" />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 280 120" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="240" cy="90" r="45" fill="white" opacity="0.06" />
          <circle cx="35" cy="30" r="35" fill="white" opacity="0.04" />
          {/* Clipboard */}
          <rect x="90" y="20" width="55" height="72" rx="6" fill="white" opacity="0.1" />
          <rect x="102" y="14" width="30" height="12" rx="4" fill="white" opacity="0.16" />
          <line x1="100" y1="42" x2="134" y2="42" stroke="white" strokeWidth="1.5" opacity="0.14" />
          <line x1="100" y1="52" x2="134" y2="52" stroke="white" strokeWidth="1.5" opacity="0.12" />
          <line x1="100" y1="62" x2="120" y2="62" stroke="white" strokeWidth="1.5" opacity="0.1" />
          {/* Gear */}
          <circle cx="200" cy="55" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.15" />
          <circle cx="200" cy="55" r="8" fill="white" opacity="0.1" />
          <line x1="200" y1="33" x2="200" y2="40" stroke="white" strokeWidth="2" opacity="0.12" />
          <line x1="200" y1="70" x2="200" y2="77" stroke="white" strokeWidth="2" opacity="0.12" />
          <line x1="178" y1="55" x2="185" y2="55" stroke="white" strokeWidth="2" opacity="0.12" />
          <line x1="215" y1="55" x2="222" y2="55" stroke="white" strokeWidth="2" opacity="0.12" />
        </svg>
      );
    case "deploy":
      return (
        <svg viewBox="0 0 280 120" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="90" r="45" fill="white" opacity="0.06" />
          <circle cx="240" cy="35" r="35" fill="white" opacity="0.04" />
          {/* People/team */}
          <circle cx="100" cy="40" r="12" fill="white" opacity="0.14" />
          <ellipse cx="100" cy="68" rx="15" ry="22" fill="white" opacity="0.08" />
          <circle cx="140" cy="38" r="12" fill="white" opacity="0.12" />
          <ellipse cx="140" cy="66" rx="15" ry="22" fill="white" opacity="0.07" />
          <circle cx="180" cy="40" r="12" fill="white" opacity="0.14" />
          <ellipse cx="180" cy="68" rx="15" ry="22" fill="white" opacity="0.08" />
          {/* Arrow */}
          <path d="M210,55 L245,55 M238,48 L248,55 L238,62" fill="none" stroke="white" strokeWidth="2.5" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Medical cross badge */}
          <rect x="78" y="18" width="12" height="4" rx="1" fill="white" opacity="0.18" />
          <rect x="82" y="14" width="4" height="12" rx="1" fill="white" opacity="0.18" />
        </svg>
      );
    case "tele":
      return (
        <svg viewBox="0 0 280 120" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="240" cy="30" r="40" fill="white" opacity="0.06" />
          <circle cx="40" cy="95" r="35" fill="white" opacity="0.04" />
          {/* Screen */}
          <rect x="80" y="25" width="70" height="48" rx="5" fill="white" opacity="0.1" />
          <rect x="105" y="73" width="20" height="5" rx="1" fill="white" opacity="0.08" />
          <rect x="95" y="78" width="40" height="4" rx="1" fill="white" opacity="0.06" />
          {/* Video play */}
          <polygon points="108,43 108,57 120,50" fill="white" opacity="0.18" />
          {/* Escalation arrows */}
          <path d="M175,60 L175,40 M168,47 L175,38 L182,47" fill="none" stroke="white" strokeWidth="2" opacity="0.18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M200,65 L200,45 M193,52 L200,43 L207,52" fill="none" stroke="white" strokeWidth="2" opacity="0.14" strokeLinecap="round" strokeLinejoin="round" />
          {/* Connection dots */}
          <circle cx="210" cy="80" r="4" fill="white" opacity="0.15" />
          <circle cx="225" cy="85" r="3" fill="white" opacity="0.12" />
          <circle cx="240" cy="80" r="4" fill="white" opacity="0.15" />
          <line x1="214" y1="80" x2="221" y2="84" stroke="white" strokeWidth="1" opacity="0.1" />
          <line x1="228" y1="84" x2="236" y2="80" stroke="white" strokeWidth="1" opacity="0.1" />
        </svg>
      );
    case "report":
      return (
        <svg viewBox="0 0 280 120" className={c} preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="30" r="40" fill="white" opacity="0.06" />
          <circle cx="240" cy="95" r="38" fill="white" opacity="0.04" />
          {/* Chart */}
          <rect x="70" y="65" width="16" height="30" rx="3" fill="white" opacity="0.15" />
          <rect x="95" y="45" width="16" height="50" rx="3" fill="white" opacity="0.12" />
          <rect x="120" y="55" width="16" height="40" rx="3" fill="white" opacity="0.18" />
          <rect x="145" y="35" width="16" height="60" rx="3" fill="white" opacity="0.1" />
          {/* Trend line */}
          <path d="M78,62 L103,42 L128,52 L153,32" fill="none" stroke="white" strokeWidth="2" opacity="0.22" strokeLinecap="round" />
          <circle cx="78" cy="62" r="3" fill="white" opacity="0.25" />
          <circle cx="103" cy="42" r="3" fill="white" opacity="0.25" />
          <circle cx="128" cy="52" r="3" fill="white" opacity="0.25" />
          <circle cx="153" cy="32" r="3" fill="white" opacity="0.25" />
          {/* Refresh/cycle */}
          <path d="M210,45 A18,18 0 1,1 215,75" fill="none" stroke="white" strokeWidth="2" opacity="0.18" />
          <path d="M215,75 L220,68 L208,70" fill="white" opacity="0.18" />
        </svg>
      );
    default:
      return null;
  }
}

const steps = [
  {
    visual: "assess",
    gradient: "from-[#4B1E1B] via-[#5C2622] to-[#7B2D26]",
    step: "01",
    title: "Site / Organization Assessment",
    short:
      "Evaluate your site, headcount, risk profile, and healthcare needs.",
    detail:
      "Our team visits your location or conducts a remote assessment to understand your workforce size, site conditions, operational risks, existing healthcare provisions, and specific medical requirements. This forms the foundation of your healthcare plan.",
  },
  {
    visual: "plan",
    gradient: "from-[#4B1E1B] via-[#5C2622] to-[#7B2D26]",
    step: "02",
    title: "Healthcare Plan Design",
    short: "Design a tailored medical support plan for your operations.",
    detail:
      "Based on the assessment, we design a comprehensive healthcare plan covering staffing requirements, equipment needs, emergency protocols, referral pathways, reporting frameworks, and telemedicine integration — all aligned with your budget and timeline.",
  },
  {
    visual: "deploy",
    gradient: "from-[#4B1E1B] via-[#5C2622] to-[#7B2D26]",
    step: "03",
    title: "Medical Team Deployment",
    short: "Briefed clinical teams mobilised to your worksite.",
    detail:
      "Qualified medical professionals are selected, briefed on your site-specific risks, and deployed with the right equipment and supplies. Deployment typically takes 48-72 hours for planned engagements, with emergency mobilisation available within hours.",
  },
  {
    visual: "tele",
    gradient: "from-[#4B1E1B] via-[#5C2622] to-[#7B2D26]",
    step: "04",
    title: "Telemedicine & Escalation Setup",
    short:
      "Establish remote support and emergency escalation pathways.",
    detail:
      "We set up telemedicine access for remote consultations, establish clear escalation protocols for emergencies, coordinate with nearby hospitals and specialists, and ensure your team knows exactly how to activate emergency response when needed.",
  },
  {
    visual: "report",
    gradient: "from-[#4B1E1B] via-[#5C2622] to-[#7B2D26]",
    step: "05",
    title: "Reporting, Review & Improvement",
    short: "Structured reporting and continuous care improvement.",
    detail:
      "Regular health reports, incident documentation, workforce health trends, and programme reviews ensure continuous improvement. We meet with your leadership team to review outcomes, adjust protocols, and plan ahead — keeping your healthcare support responsive and effective.",
  },
];

export default function OurProcess() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="bg-[#F7F4F3] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-16"
            eyebrow="How Sapphire Works"
            title="From Assessment to Continuous Care"
            description="A clear, structured process that takes you from initial assessment to ongoing health support — designed for corporate, field, and community engagements."
          />
        </ScrollReveal>

        {/* ── Horizontal timeline rail (desktop) ── */}
        <ScrollReveal>
          <div className="hidden lg:block">
            {/* Timeline connector */}
            <div className="relative mx-auto mb-10 max-w-4xl">
              {/* Background rail */}
              <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#4B1E1B]/10" />
              {/* Active progress */}
              <motion.div
                className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#4B1E1B] via-[#9E3C34] to-[#D9A441]"
                initial={false}
                animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Step dots */}
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const isActive = index === active;
                  const isPast = index < active;

                  return (
                    <button
                      key={step.step}
                      onClick={() => setActive(index)}
                      className="group relative flex flex-col items-center"
                    >
                      {/* Dot */}
                      <motion.div
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] font-bold text-sm transition-colors duration-300 ${
                          isActive
                            ? "border-[#9E3C34] bg-[#4B1E1B] text-white shadow-lg shadow-[#4B1E1B]/30"
                            : isPast
                              ? "border-[#9E3C34]/50 bg-[#9E3C34] text-white"
                              : "border-[#4B1E1B]/20 bg-white text-[#4B1E1B]/50 hover:border-[#9E3C34]/40 hover:text-[#4B1E1B]"
                        }`}
                        animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {step.step}
                      </motion.div>

                      {/* Label */}
                      <span
                        className={`mt-3 max-w-[140px] text-center text-[11px] font-semibold leading-snug transition-colors ${
                          isActive
                            ? "text-[#4B1E1B]"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active step expanded card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col lg:flex-row">
                    {/* Visual panel */}
                    <div
                      className={`relative h-48 w-full overflow-hidden bg-gradient-to-br lg:h-auto lg:w-[40%] ${steps[active].gradient}`}
                    >
                      <StepVisual type={steps[active].visual} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="text-6xl font-black text-white/20">
                          {steps[active].step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 lg:p-10">
                      <div className="mb-2 inline-block rounded-full bg-[#9E3C34]/10 px-3 py-1 text-[11px] font-bold text-[#9E3C34]">
                        Step {steps[active].step}
                      </div>
                      <h3 className="text-2xl font-bold text-[#4B1E1B]">
                        {steps[active].title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">
                        {steps[active].short}
                      </p>
                      <div className="mt-4 border-t border-[#4B1E1B]/10 pt-4">
                        <p className="text-sm leading-relaxed text-gray-600">
                          {steps[active].detail}
                        </p>
                      </div>

                      {/* Navigation buttons */}
                      <div className="mt-6 flex items-center gap-3">
                        <button
                          onClick={() => setActive(Math.max(0, active - 1))}
                          disabled={active === 0}
                          className="rounded-lg border border-[#4B1E1B]/15 px-4 py-2 text-xs font-semibold text-[#4B1E1B] transition-all hover:bg-[#4B1E1B]/5 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() =>
                            setActive(Math.min(steps.length - 1, active + 1))
                          }
                          disabled={active === steps.length - 1}
                          className="rounded-lg bg-[#4B1E1B] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#9E3C34] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          Next Step
                        </button>
                        <span className="ml-auto text-xs text-gray-400">
                          {active + 1} of {steps.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* ── Mobile: stacked cards ── */}
        <div className="space-y-4 lg:hidden">
          {steps.map((step, index) => {
            const isExpanded = active === index;

            return (
              <ScrollReveal key={step.step} delay={index * 0.06}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setActive(isExpanded ? -1 : index)}
                >
                  <div
                    className={`overflow-hidden rounded-xl transition-all duration-300 ${
                      isExpanded
                        ? "bg-white shadow-xl ring-2 ring-[#9E3C34]/20"
                        : "bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 p-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                          isExpanded
                            ? "bg-[#4B1E1B] text-white"
                            : "bg-[#4B1E1B]/10 text-[#4B1E1B]"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[#4B1E1B]">
                          {step.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {step.short}
                        </p>
                      </div>
                      <svg
                        className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Visual bar */}
                          <div
                            className={`relative h-28 overflow-hidden bg-gradient-to-br ${step.gradient}`}
                          >
                            <StepVisual type={step.visual} />
                            <div className="absolute bottom-3 left-4">
                              <span className="text-4xl font-black text-white/20">
                                {step.step}
                              </span>
                            </div>
                          </div>
                          <div className="border-t border-[#4B1E1B]/10 px-4 py-4">
                            <p className="text-sm leading-relaxed text-gray-600">
                              {step.detail}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
