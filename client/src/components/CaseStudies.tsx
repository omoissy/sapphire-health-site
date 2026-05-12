import { ArrowRight, Building2, CheckCircle2, Factory, Fuel, Landmark } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import LogoCard from "@/components/ui/logo-card";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

const caseStudies = [
  {
    icon: Fuel,
    industry: "Oil & Gas",
    title: "24-Hour Well Stimulation Medical Coverage",
    challenge: "Round-the-clock medical support for a high-pressure well stimulation operation.",
    impact: "Zero lost-time incidents",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Building2,
    industry: "Corporate",
    title: "Corporate Wellness Programme for 200+ Staff",
    challenge: "Structured wellness initiatives to reduce absenteeism.",
    impact: "85% employee participation",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Factory,
    industry: "Construction",
    title: "Multi-Site Construction Medical Standby",
    challenge: "Coordinated medical standby across 3 active sites.",
    impact: "Zero regulatory compliance gaps",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Landmark,
    industry: "Community",
    title: "Community Health Outreach for 500+ Attendees",
    challenge: "Medical coverage and screenings for a multi-day community gathering.",
    impact: "500+ attendees screened",
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
];

const supportedGroups = [
  { name: "Seplat Energy", logoSrc: "/images/logos/seplat-energy-logo.png" },
  { name: "Midwestern Staff", logoSrc: "/images/logos/midwestern-oil-gas-logo.png" },
  { name: "GetOil Integrated Services", logoSrc: "/images/logos/getoil-integrated-logo.png" },
  { name: "RCCG Community Support", logoSrc: "/images/logos/rccg-logo.png" },
];

export default function CaseStudies() {
  const marqueeGroups = [...supportedGroups, ...supportedGroups];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Case Studies"
              title="Proven Impact Across Industries"
              description="Real-world examples of how Sapphire Health has supported organizations with reliable medical solutions."
            />
            <CTAButton href="/case-studies" variant="secondary" className="w-fit shrink-0">
              View All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </CTAButton>
          </div>
        </ScrollReveal>

        {/* Case study cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <ScrollReveal key={study.title} delay={index * 0.05}>
                <Link href="/case-studies">
                  <div className="group cursor-pointer overflow-hidden rounded-xl border border-[#4B1E1B]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4B1E1B]/8">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={study.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#9E3C34]" />
                        <span className="rounded-full bg-[#4B1E1B]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#9E3C34]">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-[#4B1E1B] group-hover:text-[#9E3C34]">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-500">{study.challenge}</p>
                      <div className="mt-3 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-xs font-semibold text-emerald-600">{study.impact}</span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#9E3C34] transition-colors group-hover:text-[#4B1E1B]">
                        Read Case Study <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Logo marquee */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 border-t border-[#4B1E1B]/8 pt-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Organizations We Have Supported
            </p>
            <div className="scrollbar-hide flex snap-x overflow-x-auto pb-3 sm:hidden">
              {supportedGroups.map((group) => (
                <div key={group.name} className="snap-start">
                  <LogoCard {...group} />
                </div>
              ))}
            </div>
            <div className="proof-marquee -mx-6 hidden sm:block lg:mx-0">
              <div className="proof-marquee-track py-2">
                {marqueeGroups.map((group, index) => (
                  <LogoCard key={`${group.name}-${index}`} {...group} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
