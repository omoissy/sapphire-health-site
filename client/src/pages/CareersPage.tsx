// CareersPage.tsx
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACT_INFO } from "@/config/contact";
import { Mail, CheckCircle } from "lucide-react";

const roles = [
  { title: "Certified Paramedic (Field)", type: "Contract / Deployment-based", desc: "Experienced paramedics with offshore or onshore oil and gas deployment experience. PHTLS, ACLS, or equivalent certifications required." },
  { title: "Occupational Health Nurse", type: "Full-time / Contract", desc: "Registered nurses with occupational health experience for corporate client programmes and pre-mobilisation screening." },
  { title: "HSE Health Consultant", type: "Contract", desc: "HSSE professionals with experience in MERP development, DPR/NUPRC compliance documentation, and health programme management." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <PublicNav />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#2D1210] to-[#4B1E1B] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4 block">Careers</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join the Sapphire Health Team</h1>
            <p className="text-lg text-white/70">We're building Nigeria's most capable occupational health and emergency medical services team. If you're a certified health professional with field experience, we want to hear from you.</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-[#4B1E1B]">Current Openings</h2>
                <p className="text-gray-500 mt-2">We recruit on a rolling basis based on deployment needs.</p>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {roles.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.1}>
                  <div className="bg-[#FAFBFC] rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-bold text-[#4B1E1B]">{role.title}</h3>
                        <span className="text-xs bg-[#4B1E1B]/10 text-[#4B1E1B] font-medium px-3 py-1 rounded-full mt-2 inline-block">{role.type}</span>
                        <p className="text-sm text-gray-600 mt-3">{role.desc}</p>
                      </div>
                      <a
                        href={`mailto:${CONTACT_INFO.email.general}?subject=Application: ${role.title}`}
                        className="inline-flex items-center gap-2 bg-[#4B1E1B] hover:bg-[#9E3C34] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
                      >
                        <Mail className="w-4 h-4" /> Apply
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 bg-[#4B1E1B] rounded-2xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-3">Don't See Your Role?</h3>
                <p className="text-white/70 mb-5 text-sm">We're always open to hearing from qualified health professionals. Send your CV and credentials to:</p>
                <a href={`mailto:${CONTACT_INFO.email.general}`} className="text-white font-semibold underline underline-offset-2 hover:text-white/80">
                  {CONTACT_INFO.email.general}
                </a>
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/50">
                  {["Paramedics", "Occupational Health Nurses", "Medical Officers", "HSE Consultants"].map((t) => (
                    <span key={t} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" />{t}</span>
                  ))}
                </div>
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
