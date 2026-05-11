// OurApproachPage.tsx
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function OurApproachPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <PublicNav />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#2D1210] to-[#4B1E1B] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4 block">Our Approach</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">How We Deliver Medical Coverage That Works</h1>
            <p className="text-lg text-white/70">Built around your operation — not a generic template.</p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <h2 className="text-2xl font-bold text-[#4B1E1B]">Assess First, Deploy Second</h2>
                <p>Every engagement begins with a thorough needs assessment. We evaluate your site environment, operational hazards, crew size, deployment duration, and regulatory requirements before recommending a service scope. This ensures our teams are equipped for the specific risks your operation presents — not a generic checklist.</p>
                <h2 className="text-2xl font-bold text-[#4B1E1B] mt-8">Complementary, Not Competitive</h2>
                <p>We work alongside your existing HSE and safety infrastructure. Your safety officer manages hazard control, permits, and compliance systems. Our medics handle clinical assessment, emergency response, and health documentation. These are distinct, non-overlapping functions — and together, they give your operation a complete health and safety capability.</p>
                <h2 className="text-2xl font-bold text-[#4B1E1B] mt-8">Documentation That Holds Up</h2>
                <p>Every certificate, report, and MERP we produce is structured around DPR/NUPRC standards and the requirements of major IOCs. Our paperwork has never been sent back for revision by a regulatory authority. We build it right the first time.</p>
              </div>
              <div className="mt-10">
                <Link href="/corporate-inquiry">
                  <button className="inline-flex items-center gap-2 bg-[#4B1E1B] hover:bg-[#9E3C34] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                    Get a Proposal <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
