import { Activity, ClipboardCheck, FileSearch, HeartPulse, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IconBadge from "@/components/ui/icon-badge";
import PremiumCard from "@/components/ui/premium-card";
import SectionHeading from "@/components/ui/section-heading";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Assessment",
    description: "Confirm site, headcount, risk profile, location, and urgency.",
    tone: "blue" as const,
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Planning",
    description: "Scope staffing, equipment, reports, referral routes, and readiness needs.",
    tone: "teal" as const,
  },
  {
    icon: MapPin,
    step: "03",
    title: "Deployment",
    description: "Briefed medical teams and supplies are mobilised to the worksite.",
    tone: "amber" as const,
  },
  {
    icon: HeartPulse,
    step: "04",
    title: "Medical Support",
    description: "On-site care, screening, monitoring, education, and documentation.",
    tone: "maroon" as const,
  },
  {
    icon: Activity,
    step: "05",
    title: "Escalation",
    description: "Emergency response, stabilisation, referral, and coordination when needed.",
    tone: "green" as const,
  },
  {
    icon: MessageSquare,
    step: "06",
    title: "Reporting",
    description: "Structured incident notes, service summaries, and workforce health records.",
    tone: "blue" as const,
  },
  {
    icon: ShieldCheck,
    step: "07",
    title: "Review",
    description: "Recommendations that improve future readiness and workforce health planning.",
    tone: "teal" as const,
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[#F7F4F3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-12"
            eyebrow="How Sapphire Works"
            title="A Clear Clinical Flow from Assessment to Review"
            description="The process is compact on the page but structured enough for corporate, field, and community medical engagements."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#4B1E1B]/20 to-transparent lg:block" />
          <div className="scrollbar-hide -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-7 lg:overflow-visible lg:px-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.step} delay={index * 0.05}>
                  <PremiumCard className="relative min-h-[246px] min-w-[238px] snap-start p-5 lg:min-w-0">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <IconBadge icon={Icon} tone={step.tone} />
                      <span className="text-3xl font-black leading-none text-[#4B1E1B]/10">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#4B1E1B]">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{step.description}</p>
                  </PremiumCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
