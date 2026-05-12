import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/ui/cta-button";

export default function LiveHealthTracker() {
  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-[#1A0D0C] py-20">
      {/* Abstract medical overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B1E1B]/30 via-transparent to-[#123B43]/20" />

      {/* Pulse line decoration */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-12 opacity-5"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 L300,20 L320,5 L340,35 L360,12 L380,28 L400,20 L1200,20"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Get Started
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Build a healthier, safer, and more supported workforce with Sapphire Health.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
            Whether you need on-site medical teams, telemedicine support, or a comprehensive workforce health programme — we're ready to help.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/corporate-inquiry" variant="light">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton
              href="/corporate-inquiry"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Partner With Us
            </CTAButton>
            <CTAButton
              href="/#services"
              variant="secondary"
              className="border-white/15 bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
            >
              Explore Services
            </CTAButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
            <Phone className="h-4 w-4" />
            <a href={`tel:${CONTACT_INFO.phone.tel}`} className="transition-colors hover:text-white">
              {CONTACT_INFO.phone.display}
            </a>
            <span>·</span>
            <a href={`mailto:${CONTACT_INFO.email.general}`} className="transition-colors hover:text-white">
              {CONTACT_INFO.email.general}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
