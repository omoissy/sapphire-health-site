import { Building2, Factory, Fuel, HardHat, Landmark, Network, RadioTower, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/ui/cta-button";
import IconBadge from "@/components/ui/icon-badge";
import PremiumCard from "@/components/ui/premium-card";
import SectionHeading from "@/components/ui/section-heading";

const sectors = [
  { icon: Fuel, label: "Oil & Gas", note: "Offshore, onshore, and field-service teams", tone: "blue" as const },
  { icon: HardHat, label: "Construction & Engineering", note: "Active sites, project teams, and contractors", tone: "amber" as const },
  { icon: Factory, label: "Mining & Exploration", note: "Remote operations and exploration crews", tone: "teal" as const },
  { icon: Truck, label: "Logistics & Transport", note: "Drivers, route teams, and warehouses", tone: "green" as const },
  { icon: RadioTower, label: "Telecommunications & Infrastructure", note: "Field engineers and infrastructure crews", tone: "blue" as const },
  { icon: Building2, label: "Corporate Organizations", note: "Wellness, screening, and staff health days", tone: "maroon" as const },
  { icon: Landmark, label: "Institutions & Communities", note: "Organised groups and community programmes", tone: "amber" as const },
  { icon: Network, label: "Remote / Offsite Workforces", note: "Teams working away from routine clinical access", tone: "teal" as const },
];

export default function PartnerLogos() {
  return (
    <section id="who-we-serve" className="scroll-mt-24 border-y border-[#4B1E1B]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Who We Serve"
              title="Healthcare Support for Workforces That Cannot Afford Gaps"
              description="Industrial, corporate, community, and remote teams need clinical support that understands both people and operations."
            />
            <CTAButton href="/corporate-inquiry" variant="secondary" className="w-fit">
              Plan Coverage
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <ScrollReveal key={sector.label} delay={index * 0.04}>
                <PremiumCard className="group flex min-h-[154px] min-w-[250px] snap-start flex-col p-5 lg:min-w-0">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <IconBadge icon={Icon} tone={sector.tone} />
                    <span className="rounded-full bg-[#4B1E1B]/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B1E1B]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-[#4B1E1B]">{sector.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{sector.note}</p>
                </PremiumCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
