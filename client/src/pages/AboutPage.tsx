import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight, User } from "lucide-react";

const team = [
  { name: "Dr. Oluwasanmi Oluwatobi Mercy", role: "Chief Executive Officer", initials: "OM" },
  { name: "Dr. Daramola Somoto", role: "Chief Operating Officer", initials: "DS" },
  { name: "Engr. Israel Omoniyi", role: "Head of Strategy, Finance & Technology", initials: "IO" },
  { name: "Dr. Oluwasanmi Ademola Samuel", role: "Medical Director", initials: "AS" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#2D1210] to-[#4B1E1B] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The Clinical Layer That Keeps Your Operations Safe
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Sapphire Health Services Limited is a Lagos-based occupational health and emergency medical services company, purpose-built for Nigeria's oil and gas sector and high-risk work environments.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
                <h2 className="text-2xl font-bold text-[#4B1E1B] not-prose">Why Sapphire Health Exists</h2>
                <p>
                  Nigeria's oil and gas sector operates in some of the most demanding and hazardous environments on the continent. Offshore platforms in the Niger Delta, onshore drilling operations in the deep south, construction projects across Lagos and Abuja — these environments carry real medical risk, and that risk is not always matched by adequate clinical response capability.
                </p>
                <p>
                  Safety officers manage hazard identification, compliance systems, and permit-to-work processes. They are not trained medics. When a crew member collapses, sustains a serious laceration, or deteriorates rapidly in an environment hours from a hospital — the safety officer cannot administer clinical care. That gap is why Sapphire Health exists.
                </p>
                <p>
                  We provide the clinical response layer that complements your existing safety infrastructure — deploying certified paramedics and occupational health professionals directly to your site, handling everything from pre-mobilisation screening and fitness-for-work assessments to MERP coordination, emergency response, and medevac logistics.
                </p>

                <h2 className="text-2xl font-bold text-[#4B1E1B] not-prose mt-10">Our Approach</h2>
                <p>
                  We don't believe in generic healthcare packages. Every operation is different — a 3-month offshore drilling campaign requires a fundamentally different medical programme than a 2-week construction site mobilisation or a large public event. We start every engagement with a thorough needs assessment, then design a scope of service that fits your environment, your headcount, your duration, and your regulatory requirements.
                </p>
                <p>
                  Our documentation — MERPs, fitness-for-work certificates, screening reports, and compliance records — is structured to satisfy DPR/NUPRC requirements and the standards of major international operators without revision.
                </p>

                <div className="bg-[#4B1E1B] rounded-2xl p-8 not-prose mt-8">
                  <p className="text-white/90 text-lg font-medium italic leading-relaxed">
                    "Our job is not to replace your safety officer. Our job is to give you what a safety officer cannot — a certified medical professional who can keep your crew healthy, keep your operation compliant, and respond clinically if something goes wrong."
                  </p>
                  <p className="text-white/50 text-sm mt-4">— Sapphire Health Leadership</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#FAFBFC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">Our Team</span>
                <h2 className="text-3xl font-bold text-[#4B1E1B]">Leadership</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-full bg-[#4B1E1B] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{member.initials}</span>
                    </div>
                    <h3 className="font-semibold text-[#4B1E1B] text-sm leading-snug mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#4B1E1B]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Work With Us</h2>
            <p className="text-white/70 mb-8">Tell us about your operation. We'll put together a tailored proposal within 48 hours.</p>
            <Link href="/corporate-inquiry">
              <button className="inline-flex items-center gap-2 bg-white text-[#4B1E1B] hover:bg-white/90 font-semibold px-8 py-3.5 rounded-xl transition-colors">
                Get a Proposal <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
