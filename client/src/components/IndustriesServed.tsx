import {
  Building2,
  Factory,
  Fuel,
  HardHat,
  Landmark,
  Network,
  RadioTower,
  Truck,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/ui/cta-button";
import IconBadge from "@/components/ui/icon-badge";
import SectionHeading from "@/components/ui/section-heading";

const industries = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description: "Offshore, onshore, and field-service medical teams with 24/7 emergency response capability.",
    tone: "blue" as const,
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Active site medical coverage, safety training, and fitness-for-work screening for project teams.",
    tone: "amber" as const,
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Driver health programmes, route medical support, and warehouse wellness initiatives.",
    tone: "green" as const,
  },
  {
    icon: RadioTower,
    title: "Telecoms",
    description: "Field engineer health support, tower site medical standby, and infrastructure crew coverage.",
    tone: "teal" as const,
  },
  {
    icon: Factory,
    title: "Mining",
    description: "Remote operations medical teams, exploration crew health screening, and evacuation planning.",
    tone: "blue" as const,
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Employee wellness days, executive health screening, and ongoing workplace health programmes.",
    tone: "maroon" as const,
  },
  {
    icon: Landmark,
    title: "Churches & Communities",
    description: "Community health outreaches, event medical coverage, and group wellness programmes.",
    tone: "amber" as const,
  },
  {
    icon: Network,
    title: "Families / Diaspora",
    description: "Healthcare coordination for loved ones in Nigeria — screenings, check-ups, and care management.",
    tone: "teal" as const,
  },
];

export default function IndustriesServed() {
  return (
    <section id="who-we-serve" className="scroll-mt-24 border-y border-[#4B1E1B]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Industries"
              title="Healthcare for Every Operating Environment"
              description="From remote oil fields to corporate offices, Sapphire Health adapts clinical support to fit the unique demands of each industry."
            />
            <CTAButton href="/corporate-inquiry" variant="secondary" className="w-fit shrink-0">
              Plan Coverage
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal key={industry.title} delay={index * 0.04}>
                <div className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-xl border border-[#4B1E1B]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3C34]/25 hover:shadow-xl hover:shadow-[#4B1E1B]/8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4B1E1B]/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <IconBadge icon={Icon} tone={industry.tone} className="mb-4" />
                    <h3 className="text-base font-bold text-[#4B1E1B]">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {industry.description}
                    </p>
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
