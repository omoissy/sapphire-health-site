import { CheckCircle2, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Corporate-Ready Healthcare",
    desc: "Structured health programmes designed for organizations that need reliable, professional medical support.",
  },
  {
    title: "Flexible Deployment Models",
    desc: "On-site teams, mobile clinics, retainers, or project-based coverage — scaled to your operations.",
  },
  {
    title: "Telemedicine-Enabled",
    desc: "24/7 remote clinical access for workforces in hard-to-reach locations or during off-hours.",
  },
  {
    title: "Preventive Health Focus",
    desc: "Proactive screening, wellness programmes, and chronic disease management that reduce long-term costs.",
  },
  {
    title: "Emergency Response Readiness",
    desc: "Rapid stabilisation, evacuation coordination, and referral pathways when every minute matters.",
  },
  {
    title: "Clear Reporting & Analytics",
    desc: "Structured incident documentation, health data trends, and workforce health insights for leadership.",
  },
  {
    title: "Human-Centered Support",
    desc: "Clinical teams who treat every person with dignity, professionalism, and genuine care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F4F3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Why Sapphire"
              title="Healthcare That Understands How You Operate"
              description="Sapphire Health combines clinical excellence with operational flexibility — giving organizations healthcare support that actually fits."
            />

            <div className="mt-10 space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="group flex gap-4 rounded-lg border border-transparent p-3 transition-all hover:border-[#4B1E1B]/10 hover:bg-white hover:shadow-sm"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4B1E1B]/10 text-[#4B1E1B] transition-colors group-hover:bg-[#4B1E1B] group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#4B1E1B]">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-[#4B1E1B]/10 bg-white shadow-2xl shadow-[#4B1E1B]/10">
                <div className="bg-gradient-to-br from-[#4B1E1B] to-[#2D1210] p-8">
                  <Shield className="h-12 w-12 text-white/80" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Trusted Partner</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    From oil fields to corporate offices, organizations trust Sapphire Health to keep their people safe, supported, and productive.
                  </p>
                </div>
                <div className="space-y-4 p-8">
                  {[
                    { stat: "24/7", label: "Emergency response availability" },
                    { stat: "98%", label: "Client satisfaction rate" },
                    { stat: "48-72h", label: "Average deployment time" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="text-2xl font-black text-[#4B1E1B]">{item.stat}</span>
                      <span className="text-sm text-gray-500">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative gradient blob */}
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#4B1E1B]/10 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
