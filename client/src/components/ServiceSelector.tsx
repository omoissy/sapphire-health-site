import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Factory, Fuel, HardHat, Landmark, Network, RadioTower, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IconBadge from "@/components/ui/icon-badge";
import SectionHeading from "@/components/ui/section-heading";

const sectors = [
  {
    icon: Fuel,
    label: "Oil & Gas",
    description: "Offshore, onshore, drilling, production, and field service teams.",
    services: ["On-site medics", "Fitness-for-work screening", "Emergency response planning", "Incident documentation"],
  },
  {
    icon: HardHat,
    label: "Construction & Engineering",
    description: "Project sites with active labour, equipment movement, and injury risk.",
    services: ["Site clinic setup", "First aid teams", "Worker health screening", "Injury escalation support"],
  },
  {
    icon: Factory,
    label: "Mining & Exploration",
    description: "Remote exploration teams and physically demanding operations.",
    services: ["Remote care planning", "Mobile clinics", "Emergency stabilisation", "Periodic medical checks"],
  },
  {
    icon: Truck,
    label: "Logistics & Transport",
    description: "Drivers, route teams, warehouse staff, and distributed operations.",
    services: ["Driver medicals", "Wellness checks", "Telemedicine support", "Health education"],
  },
  {
    icon: RadioTower,
    label: "Telecommunications & Infrastructure",
    description: "Field engineers, tower teams, and infrastructure deployment crews.",
    services: ["Field medic coverage", "Pre-mobilisation screening", "Emergency readiness", "Project reporting"],
  },
  {
    icon: Building2,
    label: "Corporate Organizations",
    description: "Office-based and industrial workforces requiring preventive health support.",
    services: ["Wellness programmes", "Occupational health screening", "Health talks", "Staff health reports"],
  },
  {
    icon: Landmark,
    label: "Institutions & Communities",
    description: "Organised groups needing accessible care, education, and screening.",
    services: ["Community outreach", "Health education", "Screening days", "Medical coverage"],
  },
  {
    icon: Network,
    label: "Remote / Offsite Workforces",
    description: "Teams working away from routine clinical access.",
    services: ["Telemedicine", "Mobile clinics", "Emergency referral pathways", "Health documentation"],
  },
];

export default function ServiceSelector() {
  const [active, setActive] = useState(0);
  const activeSector = sectors[active];
  const ActiveIcon = activeSector.icon;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="Coverage Planner"
              title="Match Medical Coverage to Your Operating Environment"
              description="Different workforces need different clinical coverage. Sapphire scopes the service around your risk profile, location, duration, and workforce size."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const selected = active === index;

              return (
                <button
                  key={sector.label}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex min-h-[112px] w-full items-start gap-4 rounded-lg border p-4 text-left transition-all duration-200 ${
                    selected
                      ? "border-[#4B1E1B] bg-[#4B1E1B] text-white shadow-lg"
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#4B1E1B]/30"
                  }`}
                >
                  <IconBadge icon={Icon} tone={selected ? "light" : "maroon"} size="sm" />
                  <span>
                    <span className="block text-sm font-semibold">{sector.label}</span>
                    <span className={`mt-1 block text-xs leading-relaxed ${selected ? "text-white/70" : "text-gray-500"}`}>
                      {sector.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <ScrollReveal direction="right">
            <motion.div
              key={activeSector.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg border border-gray-100 bg-[#FAFBFC] p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#4B1E1B]">
                  <ActiveIcon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#4B1E1B]">
                    {activeSector.label} Health Support
                  </h3>
                  <p className="text-sm text-gray-500">{activeSector.description}</p>
                </div>
              </div>

              <ul className="mb-7 space-y-2">
                {activeSector.services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9E3C34]" />
                    {service}
                  </li>
                ))}
              </ul>

              <Link href="/corporate-inquiry">
                <button className="inline-flex items-center gap-2 rounded-md bg-[#4B1E1B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9E3C34]">
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
