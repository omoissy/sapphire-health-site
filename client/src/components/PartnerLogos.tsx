import { Building2, Factory, Fuel, HardHat, Landmark, Network, RadioTower, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const sectors = [
  { icon: Fuel, label: "Oil & Gas" },
  { icon: HardHat, label: "Construction & Engineering" },
  { icon: Factory, label: "Mining & Exploration" },
  { icon: Truck, label: "Logistics & Transport" },
  { icon: RadioTower, label: "Telecommunications & Infrastructure" },
  { icon: Building2, label: "Corporate Organizations" },
  { icon: Landmark, label: "Institutions & Communities" },
  { icon: Network, label: "Remote / Offsite Workforces" },
];

export default function PartnerLogos() {
  return (
    <section id="who-we-serve" className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
              Who We Serve
            </p>
            <h2 className="text-3xl font-bold text-[#4B1E1B] sm:text-4xl">
              Healthcare Support for Workforces That Cannot Afford Gaps
            </h2>
          </div>

          <figure className="mb-8 overflow-hidden rounded-lg border border-gray-100 bg-[#FAFBFC]">
            <img
              src="/images/sapphire/sapphire-team-ppe-field-banner.jpg"
              alt="Sapphire Health field healthcare support for industrial workforces"
              className="h-64 w-full object-cover sm:h-80 lg:h-[360px]"
              loading="lazy"
            />
          </figure>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.label}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 bg-[#FAFBFC] px-4 py-4 text-sm font-semibold text-[#4B1E1B]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#4B1E1B]/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  {sector.label}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
