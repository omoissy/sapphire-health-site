import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Users, BarChart3, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Enquiry",
    description:
      "We confirm your site, headcount, duration, risk profile, and timeline.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Assess & Scope",
    description:
      "Our clinical team maps the required service scope, staffing plan, equipment, and documentation.",
  },
  {
    icon: Users,
    step: "03",
    title: "Mobilise Team",
    description:
      "Approved teams are briefed, equipped, and deployed for on-site coverage or mobile clinic delivery.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Report & Improve",
    description:
      "You receive structured records, incident notes, outcomes, and recommendations after delivery.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B1E1B] mb-4">
              From Enquiry to Deployment in Days, Not Weeks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A compact process keeps decisions moving without burying visitors in operational detail.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4B1E1B]/20 to-transparent" />

          <div className="scrollbar-hide -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="relative min-h-[240px] min-w-[78vw] snap-start rounded-lg border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#4B1E1B]/20 hover:shadow-md sm:min-w-[330px] lg:min-w-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-[#4B1E1B]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-4xl font-black text-[#4B1E1B]/10 leading-none mt-1">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#4B1E1B] mt-4 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-[#9E3C34] font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Step {step.step}
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
