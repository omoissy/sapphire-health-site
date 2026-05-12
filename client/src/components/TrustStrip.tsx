import {
  Building2,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users2,
  Video,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const trustItems = [
  { icon: Building2, label: "Corporate Health Support" },
  { icon: Video, label: "Telemedicine Access" },
  { icon: HeartPulse, label: "Preventive Care" },
  { icon: Users2, label: "Workforce Wellness" },
  { icon: ShieldCheck, label: "Emergency Response" },
  { icon: Stethoscope, label: "Diaspora Healthcare" },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 border-b border-[#4B1E1B]/8 bg-[#FAFBFC]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-[#4B1E1B]/10">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-white lg:justify-center lg:rounded-none"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#4B1E1B]/5 text-[#9E3C34] trust-icon-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#4B1E1B] lg:text-[11px]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
