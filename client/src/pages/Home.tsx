import { ArrowRight, Phone } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import HeroSlider from "@/components/HeroSlider";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import IndustriesServed from "@/components/IndustriesServed";
import OurProcess from "@/components/OurProcess";
import CaseStudies from "@/components/CaseStudies";
import LeadershipPreview from "@/components/LeadershipPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTAButton from "@/components/ui/cta-button";
import { CONTACT_INFO } from "@/config/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNav />
      <main>
        <HeroSlider />
        <TrustStrip />
        <Services />
        <IndustriesServed />
        <OurProcess />
        <CaseStudies />
        <LeadershipPreview />
        <Testimonials />

        {/* Contact CTA */}
        <section id="contact" className="relative overflow-hidden bg-[#4B1E1B] py-16">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Ready to Protect Your Workforce?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Get a tailored healthcare proposal for your organization — covering
              on-site care, emergency response, screening, and more.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CTAButton href="/corporate-inquiry" variant="light">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <a
                href={`tel:${CONTACT_INFO.phone.tel}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {CONTACT_INFO.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
