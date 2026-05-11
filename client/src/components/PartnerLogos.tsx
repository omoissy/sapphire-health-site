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
    <section id="who-we-serve" className="scroll-mt-24 border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
                Who We Serve
              </p>
              <h2 className="text-3xl font-bold text-[#4B1E1B] sm:text-4xl">
                Healthcare Support for Workforces That Cannot Afford Gaps
              </h2>
            </div>
            <a
              href="/corporate-inquiry"
              className="inline-flex w-fit rounded-md border border-[#4B1E1B]/20 px-5 py-2.5 text-sm font-semibold text-[#4B1E1B] transition-colors hover:bg-[#4B1E1B]/5"
            >
              Plan Coverage
            </a>
          </div>

          <div className="scrollbar-hide -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.label}
                  className="flex min-h-[88px] min-w-[230px] snap-start items-center gap-3 rounded-lg border border-gray-100 bg-[#FAFBFC] px-4 py-4 text-sm font-semibold text-[#4B1E1B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4B1E1B]/20 hover:bg-white hover:shadow-sm lg:min-w-0"
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
