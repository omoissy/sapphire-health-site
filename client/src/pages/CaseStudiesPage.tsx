import { ArrowRight, Building2, CheckCircle2, Factory, Fuel, Landmark } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import LogoCard from "@/components/ui/logo-card";

const caseStudies = [
  {
    icon: Fuel,
    industry: "Oil & Gas",
    title: "24-Hour Well Stimulation Medical Coverage",
    challenge:
      "A leading oil and gas service company needed round-the-clock medical support for a high-pressure well stimulation operation in a remote onshore location.",
    solution:
      "Sapphire Health deployed a qualified medical team with mobile clinic equipment, emergency drugs, and evacuation protocols — operating on 12-hour rotations over the project duration.",
    impact: [
      "Zero lost-time incidents during the operation",
      "Immediate response to 3 minor medical cases on-site",
      "Full incident documentation provided within 24 hours of project completion",
    ],
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Building2,
    industry: "Corporate",
    title: "Corporate Wellness Programme for 200+ Staff",
    challenge:
      "A mid-size corporate organization wanted to improve employee health awareness and reduce absenteeism through structured wellness initiatives.",
    solution:
      "Sapphire Health designed and delivered a quarterly wellness programme including health screenings, chronic disease risk assessments, mental health awareness sessions, and nutrition guidance.",
    impact: [
      "85% employee participation rate across 4 quarterly sessions",
      "12 staff identified with previously undiagnosed hypertension",
      "Reported improvement in employee satisfaction scores related to healthcare benefits",
    ],
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Factory,
    industry: "Construction",
    title: "Multi-Site Construction Medical Standby",
    challenge:
      "A construction firm operating across 3 active sites needed coordinated medical standby teams who understood site-specific risks and could respond rapidly.",
    solution:
      "Sapphire Health assigned dedicated medical officers to each site with standardised emergency protocols, daily health briefs, and weekly reporting to the client's HSE team.",
    impact: [
      "Consistent medical coverage across all 3 sites over 6 months",
      "4 emergency cases stabilised and successfully referred",
      "Zero regulatory compliance gaps during HSE audits",
    ],
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
  {
    icon: Landmark,
    industry: "Community",
    title: "Community Health Outreach for 500+ Attendees",
    challenge:
      "A large religious organization needed professional medical coverage and health screening services for a multi-day community gathering.",
    solution:
      "Sapphire Health set up a fully equipped medical post with triage, basic diagnostics, emergency response capability, and health education sessions throughout the event.",
    impact: [
      "Over 500 attendees screened across 3 days",
      "Immediate medical attention for 15+ acute cases",
      "Health education materials distributed to all attendees",
    ],
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
  },
];

const supportedGroups = [
  { name: "Seplat Energy", logoSrc: "/images/logos/seplat-energy-logo.png" },
  { name: "Midwestern Staff", logoSrc: "/images/logos/midwestern-oil-gas-logo.png" },
  { name: "GetOil Integrated Services", logoSrc: "/images/logos/getoil-integrated-logo.png" },
  { name: "RCCG Community Support", logoSrc: "/images/logos/rccg-logo.png" },
];

export default function CaseStudiesPage() {
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
                eyebrow="Case Studies"
                title="Real Impact Across Industries"
                description="Anonymized case studies showing how Sapphire Health has supported organizations with practical, reliable medical solutions."
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <ScrollReveal key={study.title} delay={0.05}>
                    <div className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                      <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4B1E1B]/10 text-[#4B1E1B]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="rounded-full bg-[#4B1E1B]/5 px-3 py-1 text-xs font-semibold text-[#9E3C34]">
                            {study.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1E1B]">{study.title}</h3>

                        <div className="mt-6 space-y-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9E3C34]">Challenge</p>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9E3C34]">Solution</p>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9E3C34]">Impact</p>
                            <ul className="mt-2 space-y-2">
                              {study.impact.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className={`overflow-hidden rounded-2xl bg-gray-100 ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                        <img
                          src={study.image}
                          alt=""
                          className="aspect-[4/3] h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Logo Strip */}
        <section className="border-t border-gray-100 bg-[#FAFBFC] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                Organizations We Have Supported
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {supportedGroups.map((group) => (
                  <LogoCard key={group.name} {...group} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#4B1E1B] py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to See Results Like These?
              </h2>
              <p className="mt-4 text-base text-white/70">
                Let's discuss how Sapphire Health can support your workforce with reliable, professional medical coverage.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTAButton href="/corporate-inquiry" variant="light">
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton href="/#services" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  Explore Services
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
