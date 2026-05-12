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
import IconBadge from "@/components/ui/icon-badge";

const industries = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Offshore, onshore, and field-service medical teams with 24/7 emergency response capability.",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description:
      "Active site medical coverage, safety training, and fitness-for-work screening for project teams.",
  },
  {
    icon: Factory,
    title: "Mining & Exploration",
    description:
      "Remote operations medical teams, exploration crew health screening, and evacuation planning.",
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "Driver health programmes, route medical support, and warehouse wellness initiatives.",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    description:
      "Field engineer health support, tower site medical standby, and infrastructure crew coverage.",
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description:
      "Employee wellness days, executive health screening, and ongoing workplace health programmes.",
  },
  {
    icon: Landmark,
    title: "Churches & Communities",
    description:
      "Community health outreaches, event medical coverage, and group wellness programmes.",
  },
  {
    icon: Users2,
    title: "Families & Diaspora",
    description:
      "Healthcare coordination for loved ones in Nigeria — screenings, check-ups, and care management.",
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <div className="group flex h-full flex-col rounded-xl border border-[#1E3A5F]/8 border-t-[3px] border-t-[#1E3A5F]/40 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#1E3A5F]/8">
                  <IconBadge
                    icon={industry.icon}
                    tone="slate"
                    className="mb-4"
                  />

                  <h3 className="text-[15px] font-bold text-[#4B1E1B] transition-colors group-hover:text-[#9E3C34]">
                    {industry.title}
                  </h3>

                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
