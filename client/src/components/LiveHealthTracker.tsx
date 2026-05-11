// LiveHealthTracker.tsx — CTA banner replacing the health tracker
import { ArrowRight, Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import ScrollReveal from "@/components/ScrollReveal";
import SapphireLogo from "@/components/SapphireLogo";
import CTAButton from "@/components/ui/cta-button";

export default function LiveHealthTracker() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#1A0D0C] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#4B1E1B_0%,#2D1210_48%,#123B43_100%)] shadow-2xl shadow-[#4B1E1B]/20">
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <SapphireLogo
                  tone="light"
                  variant="lockup"
                  imageBoxClassName="h-20 w-40 border-white/10 p-3"
                  showText={false}
                />
                <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Ready to deploy medical support where your people work?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Tell us about your site, workforce size, and timeline. Sapphire Health will shape a practical medical support plan around your operating reality.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <CTAButton href="/corporate-inquiry" variant="light">
                    Get a Proposal <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                  <CTAButton href={`tel:${CONTACT_INFO.phone.tel}`} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                    <Phone className="h-4 w-4" />
                    {CONTACT_INFO.phone.display}
                  </CTAButton>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Direct Contact
                </p>
                <div className="mt-5 space-y-4">
                  <a href={`tel:${CONTACT_INFO.phone.tel}`} className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#F0B8B0]">
                    <Phone className="h-4 w-4 text-[#F0B8B0]" />
                    {CONTACT_INFO.phone.display}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email.general}`} className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#F0B8B0]">
                    <Mail className="h-4 w-4 text-[#F0B8B0]" />
                    {CONTACT_INFO.email.general}
                  </a>
                  <div className="rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-white/70">
                    {CONTACT_INFO.addresses.lagos.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
