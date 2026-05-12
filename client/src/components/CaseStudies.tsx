import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import LogoCard from "@/components/ui/logo-card";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";

const caseStudies = [
  {
    industry: "Oil & Gas",
    title: "24-Hour Well Stimulation Medical Coverage",
    challenge:
      "A well stimulation contractor required round-the-clock medical support for a high-pressure operation across two active well pads in a remote location.",
    solution:
      "Sapphire deployed a 2-person clinical team with a stocked field medical post, emergency drugs, and a direct referral line to a nearby hospital.",
    impact: ["Zero lost-time incidents", "100% crew coverage", "14-day deployment"],
    image: "/images/sapphire/sapphire-field-medical-card.jpg",
    gradient: "from-[#4B1E1B] to-[#7B2D26]",
    accentColor: "bg-[#9E3C34]",
  },
  {
    industry: "Corporate",
    title: "Corporate Wellness Programme for 200+ Staff",
    challenge:
      "A mid-size financial services firm struggled with rising absenteeism and needed a structured employee wellness initiative.",
    solution:
      "Sapphire designed a quarterly wellness programme including BMI checks, blood pressure screening, health education talks, and executive health risk assessments.",
    impact: ["85% participation", "30% fewer sick days", "Ongoing retainer"],
    image: "/images/sapphire/sapphire-onsite-healthcare-card.jpg",
    gradient: "from-[#4B1E1B] to-[#7B2D26]",
    accentColor: "bg-[#9E3C34]",
  },
  {
    industry: "Construction",
    title: "Multi-Site Construction Medical Standby",
    challenge:
      "A construction company needed coordinated medical standby across 3 active sites simultaneously, with different risk profiles per location.",
    solution:
      "Sapphire assigned dedicated medics to each site with a centralized coordination lead, standardized incident reporting, and weekly health summaries for project managers.",
    impact: ["Zero compliance gaps", "3 sites covered", "8-week engagement"],
    image: "/images/sapphire/sapphire-industrial-response-card.jpg",
    gradient: "from-[#4B1E1B] to-[#7B2D26]",
    accentColor: "bg-[#9E3C34]",
  },
  {
    industry: "Community",
    title: "Community Health Outreach for 500+ Attendees",
    challenge:
      "A faith-based organization hosting a multi-day conference needed medical coverage and free health screenings for attendees.",
    solution:
      "Sapphire provided a mobile screening unit, 3 nurses, a coordinating physician, and materials for blood pressure, blood sugar, and BMI checks across the event.",
    impact: ["500+ screened", "15 urgent referrals", "3-day coverage"],
    image: "/images/sapphire/sapphire-team-ppe-field-card.jpg",
    gradient: "from-[#4B1E1B] to-[#7B2D26]",
    accentColor: "bg-[#9E3C34]",
  },
];

const supportedGroups = [
  { name: "Seplat Energy", logoSrc: "/images/logos/seplat-energy-logo.png" },
  {
    name: "Midwestern Staff",
    logoSrc: "/images/logos/midwestern-oil-gas-logo.png",
  },
  {
    name: "GetOil Integrated Services",
    logoSrc: "/images/logos/getoil-integrated-logo.png",
  },
  { name: "RCCG Community Support", logoSrc: "/images/logos/rccg-logo.png" },
];

export default function CaseStudies() {
  const marqueeGroups = [...supportedGroups, ...supportedGroups];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAFBFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Case Studies"
              title="Proven Impact Across Industries"
              description="Real-world examples of how Sapphire Health has supported organizations with reliable medical solutions."
            />
            <CTAButton
              href="/case-studies"
              variant="secondary"
              className="w-fit shrink-0"
            >
              View All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </CTAButton>
          </div>
        </ScrollReveal>

        {/* Case study cards — 2-column for richer layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.title} delay={index * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <Link href="/case-studies">
                  <div className="group h-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:ring-black/10">
                    <div className="flex h-full flex-col sm:flex-row">
                      {/* ── Image panel ── */}
                      <div className="relative h-56 w-full overflow-hidden sm:h-auto sm:w-[45%]">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-50 mix-blend-multiply`}
                        />
                        {/* Industry label */}
                        <div className="absolute left-4 top-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full ${study.accentColor} px-3 py-1 text-[11px] font-bold text-white shadow-lg`}
                          >
                            {study.industry}
                          </span>
                        </div>
                        {/* Shimmer */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      </div>

                      {/* ── Content panel ── */}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold leading-snug text-[#4B1E1B] transition-colors group-hover:text-[#9E3C34]">
                          {study.title}
                        </h3>

                        {/* Challenge */}
                        <div className="mt-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Challenge
                          </span>
                          <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mt-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Solution
                          </span>
                          <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
                            {study.solution}
                          </p>
                        </div>

                        {/* Impact */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.impact.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-4">
                          <span className="inline-flex items-center gap-2 rounded-lg bg-[#4B1E1B]/5 px-3.5 py-2 text-[13px] font-bold text-[#9E3C34] transition-all duration-300 group-hover:bg-[#4B1E1B] group-hover:text-white">
                            Read Case Study{" "}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Logo marquee */}
        <ScrollReveal delay={0.1}>
          <div className="mt-18 border-t border-[#4B1E1B]/8 pt-10">
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
