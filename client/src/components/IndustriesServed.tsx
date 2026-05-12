import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Fuel,
  HardHat,
  Landmark,
  RadioTower,
  Truck,
  Users2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/ui/cta-button";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedServiceIcon, {
  type AnimationVariant,
  type AccentTone,
} from "@/components/ui/AnimatedServiceIcon";

const industries: {
  icon: any;
  title: string;
  description: string;
  animation: AnimationVariant;
  tone: AccentTone;
  accentBorder: string;
}[] = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Offshore, onshore, and field-service medical teams with 24/7 emergency response capability.",
    animation: "gaugeTick",
    tone: "charcoal",
    accentBorder: "border-l-[#374151]",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description:
      "Active site medical coverage, safety training, and fitness-for-work screening for project teams.",
    animation: "float",
    tone: "amber",
    accentBorder: "border-l-[#92400E]",
  },
  {
    icon: Factory,
    title: "Mining & Exploration",
    description:
      "Remote operations medical teams, exploration crew health screening, and evacuation planning.",
    animation: "pulse",
    tone: "charcoal",
    accentBorder: "border-l-[#374151]",
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "Driver health programmes, route medical support, and warehouse wellness initiatives.",
    animation: "routeMove",
    tone: "slate",
    accentBorder: "border-l-[#1E3A5F]",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    description:
      "Field engineer health support, tower site medical standby, and infrastructure crew coverage.",
    animation: "signal",
    tone: "teal",
    accentBorder: "border-l-[#0F766E]",
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description:
      "Employee wellness days, executive health screening, and ongoing workplace health programmes.",
    animation: "drawCheck",
    tone: "slate",
    accentBorder: "border-l-[#1E3A5F]",
  },
  {
    icon: Landmark,
    title: "Churches & Communities",
    description:
      "Community health outreaches, event medical coverage, and group wellness programmes.",
    animation: "heartbeat",
    tone: "maroon",
    accentBorder: "border-l-[#7B2D26]",
  },
  {
    icon: Users2,
    title: "Families & Diaspora",
    description:
      "Healthcare coordination for loved ones in Nigeria — screenings, check-ups, and care management.",
    animation: "pulse",
    tone: "maroon",
    accentBorder: "border-l-[#7B2D26]",
  },
];

export default function IndustriesServed() {
  return (
    <section id="who-we-serve" className="scroll-mt-24 bg-white py-24">
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
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/80 border-l-[3px] ${industry.accentBorder} bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/8`}
                >
                  {/* Shimmer overlay */}
                  <span className="card-shimmer pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl" />

                  <div className="relative z-10 mb-4">
                    <AnimatedServiceIcon
                      icon={industry.icon}
                      animation={industry.animation}
                      tone={industry.tone}
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="relative z-10 text-[15px] font-bold text-[#4B1E1B] transition-colors group-hover:text-[#9E3C34]">
                    {industry.title}
                  </h3>

                  <p className="relative z-10 mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                    {industry.description}
                  </p>

                  <div className="relative z-10 mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
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
