import { ArrowRight, Calendar, Tag } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

const categories = [
  "All",
  "Workplace Health",
  "Telemedicine",
  "Preventive Care",
  "Emergency Preparedness",
  "Diaspora Healthcare",
  "Corporate Wellness",
];

const allArticles = [
  {
    tag: "Workplace Health",
    date: "March 2025",
    title: "Why On-Site Medical Teams Are No Longer Optional for Nigerian Workforces",
    excerpt:
      "The business case for embedding medical teams in industrial and corporate operations — and what it means for employee retention, productivity, and compliance.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    tag: "Telemedicine",
    date: "February 2025",
    title: "Telemedicine in Remote Operations: Bridging the Healthcare Access Gap",
    excerpt:
      "How organizations in oil & gas, mining, and construction are using telemedicine to provide clinical support to workers in hard-to-reach locations.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    tag: "Preventive Care",
    date: "January 2025",
    title: "The ROI of Preventive Health Programmes in Corporate Settings",
    excerpt:
      "Data-driven insights on how proactive screening, wellness days, and chronic disease management reduce absenteeism and healthcare costs.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    tag: "Diaspora Healthcare",
    date: "December 2024",
    title: "Diaspora Health Plans: Caring for Your Family from Abroad",
    excerpt:
      "A growing number of Nigerians abroad are arranging healthcare for loved ones back home. Here's how structured plans make it reliable.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    tag: "Emergency Preparedness",
    date: "November 2024",
    title: "Building an Emergency Medical Response Plan for Industrial Sites",
    excerpt:
      "Key components of an effective emergency medical response plan for oil & gas, construction, and mining operations.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    tag: "Corporate Wellness",
    date: "October 2024",
    title: "Corporate Wellness Programmes That Actually Work",
    excerpt:
      "Moving beyond generic wellness initiatives to design health programmes that employees value and that leadership can measure.",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <PublicNav />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#4B1E1B] to-[#2D1210] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                inverse
                eyebrow="Insights & Resources"
                title="Perspectives on Workforce Healthcare"
                description="Articles, guides, and thought leadership on occupational health, telemedicine, preventive care, and corporate wellness."
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Category filters */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="scrollbar-hide flex gap-1 overflow-x-auto py-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="shrink-0 rounded-full border border-[#4B1E1B]/10 px-4 py-2 text-xs font-semibold text-gray-600 transition-colors hover:bg-[#4B1E1B] hover:text-white first:bg-[#4B1E1B] first:text-white"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allArticles.map((article, index) => (
                <ScrollReveal key={article.title} delay={index * 0.05}>
                  <article className="group cursor-pointer overflow-hidden rounded-xl border border-[#4B1E1B]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4B1E1B]/8">
                    <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                      <img
                        src={article.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-[#4B1E1B]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#9E3C34]">
                          {article.tag}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-[#4B1E1B] group-hover:text-[#9E3C34]">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                        Read Article <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
