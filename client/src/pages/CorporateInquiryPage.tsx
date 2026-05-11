import EmergencyBanner from "@/components/EmergencyBanner";
import PublicNav from "@/components/PublicNav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CorporateInquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <PublicNav />
      <main>
        <section className="bg-[#2D1210] px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
              Request a Consultation
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
              Tell Us About Your Workforce Health Need
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              Share your site, headcount, location, and coverage requirements. Sapphire Health will respond with the right clinical next step.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
