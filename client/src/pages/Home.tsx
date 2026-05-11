import EmergencyBanner from "@/components/EmergencyBanner";
import PublicNav from "@/components/PublicNav";
import HeroSlider from "@/components/HeroSlider";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import ServicePackages from "@/components/ServicePackages";
import ServiceSelector from "@/components/ServiceSelector";
import About from "@/components/About";
import OurProcess from "@/components/OurProcess";
import TechFeatures from "@/components/TechFeatures";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <PublicNav />
      <main>
        <HeroSlider />
        <PartnerLogos />
        <Services />
        <ServicePackages />
        <ServiceSelector />
        <About />
        <OurProcess />
        <TechFeatures />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
