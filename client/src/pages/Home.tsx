import EmergencyBanner from "@/components/EmergencyBanner";
import PublicNav from "@/components/PublicNav";
import HeroSlider from "@/components/HeroSlider";
import QuickActionStrip from "@/components/QuickActionStrip";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import CaseStudies from "@/components/CaseStudies";
import LeadershipPreview from "@/components/LeadershipPreview";
import Testimonials from "@/components/Testimonials";
import LiveHealthTracker from "@/components/LiveHealthTracker";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <PublicNav />
      <main>
        <HeroSlider />
        <QuickActionStrip />
        <Services />
        <PartnerLogos />
        <OurProcess />
        <CaseStudies />
        <LeadershipPreview />
        <Testimonials />
        <LiveHealthTracker />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
