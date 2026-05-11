import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Check, Anchor, ShieldCheck, FileCheck, Plane, ClipboardList, Activity } from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Pre-Mobilisation Screening", desc: "Full medical screening of all personnel before deployment — physical examination, medical history, and laboratory tests as required by your client or regulator." },
  { icon: FileCheck, title: "Fitness-for-Work Certificates", desc: "Medically certified FFW documents for each crew member, valid and accepted by major IOCs and upstream operators." },
  { icon: ShieldCheck, title: "MERP Development & Review", desc: "Comprehensive Medical Emergency Response Plans developed from scratch or reviewed against DPR/NUPRC and client-specific requirements." },
  { icon: Anchor, title: "Offshore Standby Medic", desc: "Certified paramedics embedded on your platform or vessel for the duration of your campaign — 24/7 clinical coverage." },
  { icon: Activity, title: "Onshore Field Medical Support", desc: "Dedicated medical teams for onshore drilling, production, and pipeline operations — from swamp access to inland locations." },
  { icon: Plane, title: "Medevac Coordination", desc: "Planning, logistics, and real-time coordination of medical evacuations — receiving hospital liaison, in-transit supervision, and documentation." },
];

const compliance = [
  "DPR/NUPRC medical staffing requirements",
  "International SOS and similar standards alignment",
  "IOC contractor medical requirements (Shell, Chevron, TotalEnergies, etc.)",
  "OPITO and BOSIET pre-medical standards",
  "IMCA and offshore diving medical requirements",
  "HSE / HSSE documentation and audit readiness",
];

export default function OilGasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0D1F35] via-[#1E3A5F] to-[#4B1E1B] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/50 uppercase mb-5">
              <Anchor className="w-3.5 h-3.5" /> Industry: Oil & Gas
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Medical Support for Offshore & Onshore Oil and Gas Operations
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
              DPR/NUPRC compliant. IOC-ready. Experienced in the Niger Delta and beyond. Sapphire Health provides the full clinical coverage layer your operations require — from pre-mobilisation through campaign end.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/corporate-inquiry">
                <button className="inline-flex items-center gap-2 bg-white text-[#4B1E1B] hover:bg-white/90 font-semibold px-7 py-3.5 rounded-xl transition-colors">
                  Request a Proposal <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#4B1E1B] mb-3">Services for Oil & Gas Operations</h2>
                <p className="text-gray-600 max-w-xl mx-auto">Covering every medical requirement from crew mobilisation to offshore emergency response.</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={s.title} delay={i * 0.08}>
                    <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100 hover:border-[#4B1E1B]/20 hover:shadow-md transition-all">
                      <div className="w-11 h-11 rounded-xl bg-[#4B1E1B] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#4B1E1B] mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-[#4B1E1B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Regulatory & Compliance Alignment</h2>
                <p className="text-white/60">Our services are structured around the requirements your clients and regulators will ask about.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {compliance.map((c) => (
                  <div key={c} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3.5 border border-white/10">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-white/80">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4B1E1B] mb-4">Ready to Discuss Your Campaign?</h2>
              <p className="text-gray-600 mb-8">Whether it's a 2-week workover or a 6-month offshore campaign — we'll put together a proposal that fits your scope, budget, and timeline.</p>
              <Link href="/corporate-inquiry">
                <button className="inline-flex items-center gap-2 bg-[#4B1E1B] hover:bg-[#9E3C34] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
                  Get a Proposal <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
