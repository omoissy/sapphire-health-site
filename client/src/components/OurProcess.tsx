import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Users, MapPin, BarChart3, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Enquiry",
    description:
      "You reach out via phone, email, or our inquiry form. We respond within 24 hours to understand your site, headcount, duration, and regulatory requirements.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Needs Assessment",
    description:
      "Our clinical team conducts a structured assessment of your operational environment — identifying hazards, compliance gaps, and medical coverage requirements.",
  },
  {
    icon: FileSearch,
    step: "03",
    title: "Proposal & MERP",
    description:
      "We deliver a formal proposal with service scope, staffing plan, MERP outline, and pricing — tailored to your specific operation and DPR/NUPRC requirements.",
  },
  {
    icon: Users,
    step: "04",
    title: "Team Mobilisation",
    description:
      "Once approved, our certified paramedics and health professionals are briefed, equipped, and deployed to your site — ready before your crew arrives.",
  },
  {
    icon: MapPin,
    step: "05",
    title: "On-Site Delivery",
    description:
      "We provide continuous medical coverage: fitness-for-work checks, daily health monitoring, incident management, and immediate emergency response as required.",
  },
  {
    icon: BarChart3,
    step: "06",
    title: "Reporting & Review",
    description:
      "On completion, you receive a comprehensive health report covering incidents, screening outcomes, compliance status, and recommendations for future deployments.",
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
              We move fast because your operations can't wait. Here's how we take you from first contact to a fully compliant medical team on the ground.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4B1E1B]/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4B1E1B]/20 hover:shadow-md transition-all duration-300 relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4B1E1B] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
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
