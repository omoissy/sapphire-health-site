import EmergencyBanner from "@/components/EmergencyBanner";
import PublicNav from "@/components/PublicNav";
import HeroSlider from "@/components/HeroSlider";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import IndustriesServed from "@/components/IndustriesServed";
import StatsSection from "@/components/StatsSection";
import HealthDashboard from "@/components/HealthDashboard";
import OurProcess from "@/components/OurProcess";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InsightsSection from "@/components/InsightsSection";
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
        <TrustStrip />
        <Services />
        <IndustriesServed />
        <StatsSection />
        <HealthDashboard />
        <OurProcess />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <InsightsSection />
        <LiveHealthTracker />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
