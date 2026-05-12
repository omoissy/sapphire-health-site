import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

const articles = [
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
];

export default function InsightsSection() {
  return (
    <section className="bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Insights"
              title="Resources & Industry Perspectives"
              description="Practical articles on workforce health, telemedicine, preventive care, and healthcare operations."
            />
            <CTAButton href="/insights" variant="secondary" className="w-fit shrink-0">
              View All Insights <ArrowRight className="h-3.5 w-3.5" />
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 0.06}>
              <Link href="/insights">
                <article className="group cursor-pointer overflow-hidden rounded-xl border border-[#4B1E1B]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4B1E1B]/8">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-[#4B1E1B]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#9E3C34]">
                        {article.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold leading-snug text-[#4B1E1B] line-clamp-2 group-hover:text-[#9E3C34]">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
