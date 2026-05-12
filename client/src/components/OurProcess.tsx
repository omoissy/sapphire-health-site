import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ClipboardCheck,
  FileSearch,
  HeartPulse,
  RefreshCw,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IconBadge from "@/components/ui/icon-badge";
import SectionHeading from "@/components/ui/section-heading";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Site / Organization Assessment",
    short: "Evaluate your site, headcount, risk profile, and healthcare needs.",
    detail:
      "Our team visits your location or conducts a remote assessment to understand your workforce size, site conditions, operational risks, existing healthcare provisions, and specific medical requirements. This forms the foundation of your healthcare plan.",
    tone: "blue" as const,
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Healthcare Plan Design",
    short: "Design a tailored medical support plan for your operations.",
    detail:
      "Based on the assessment, we design a comprehensive healthcare plan covering staffing requirements, equipment needs, emergency protocols, referral pathways, reporting frameworks, and telemedicine integration — all aligned with your budget and timeline.",
    tone: "teal" as const,
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Medical Team Deployment",
    short: "Briefed clinical teams mobilised to your worksite.",
    detail:
      "Qualified medical professionals are selected, briefed on your site-specific risks, and deployed with the right equipment and supplies. Deployment typically takes 48-72 hours for planned engagements, with emergency mobilisation available within hours.",
    tone: "amber" as const,
  },
  {
    icon: Activity,
    step: "04",
    title: "Telemedicine & Escalation Setup",
    short: "Establish remote support and emergency escalation pathways.",
    detail:
      "We set up telemedicine access for remote consultations, establish clear escalation protocols for emergencies, coordinate with nearby hospitals and specialists, and ensure your team knows exactly how to activate emergency response when needed.",
    tone: "maroon" as const,
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Reporting, Review & Improvement",
    short: "Structured reporting and continuous care improvement.",
    detail:
      "Regular health reports, incident documentation, workforce health trends, and programme reviews ensure continuous improvement. We meet with your leadership team to review outcomes, adjust protocols, and plan ahead — keeping your healthcare support responsive and effective.",
    tone: "green" as const,
  },
];

export default function OurProcess() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-[#F7F4F3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-12"
            eyebrow="How Sapphire Works"
            title="From Assessment to Continuous Care"
            description="A clear, structured process that takes you from initial assessment to ongoing health support — designed for corporate, field, and community engagements."
          />
        </ScrollReveal>

        {/* Connected timeline */}
        <div className="relative">
          {/* Timeline line (desktop) */}
          <div className="absolute left-8 right-8 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#4B1E1B]/20 to-transparent lg:block" />

          {/* Steps grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isExpanded = expanded === index;

              return (
                <ScrollReveal key={step.step} delay={index * 0.06}>
                  <div
                    className="group relative cursor-pointer"
                    onClick={() => setExpanded(isExpanded ? null : index)}
                  >
                    <div
                      className={`relative min-h-[280px] overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition-all duration-300 ${
                        isExpanded
                          ? "border-[#9E3C34]/30 shadow-lg shadow-[#4B1E1B]/10"
                          : "border-[#4B1E1B]/10 hover:-translate-y-1 hover:border-[#9E3C34]/25 hover:shadow-lg hover:shadow-[#4B1E1B]/10"
                      }`}
                    >
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <IconBadge icon={Icon} tone={step.tone} />
                        <span className="text-3xl font-black leading-none text-[#4B1E1B]/10">
                          {step.step}
                        </span>
                      </div>

                      <h3 className="font-semibold leading-snug text-[#4B1E1B]">{step.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500">{step.short}</p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 border-t border-[#4B1E1B]/10 pt-4 text-xs leading-relaxed text-gray-600">
                              {step.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <p className="mt-4 text-[10px] font-semibold text-[#9E3C34]">
                        {isExpanded ? "Click to collapse" : "Click to expand"}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
