import ScrollReveal from "@/components/ScrollReveal";
import LogoCard from "@/components/ui/logo-card";
import SectionHeading from "@/components/ui/section-heading";

const supportedGroups = [
  {
    name: "Seplat Energy",
    logoSrc: "/images/logos/seplat-energy-logo.png",
  },
  {
    name: "Midwestern Staff",
    logoSrc: "/images/logos/midwestern-oil-gas-logo.png",
  },
  {
    name: "GetOil Integrated Services",
    logoSrc: "/images/logos/getoil-integrated-logo.png",
  },
  {
    name: "RCCG Community Support",
    logoSrc: "/images/logos/rccg-logo.png",
  },
];

export default function CaseStudies() {
  const marqueeGroups = [...supportedGroups, ...supportedGroups];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-10"
            eyebrow="Experience"
            title="Organizations & Workforce Groups We Have Supported"
            description="Through direct and related service arrangements, Sapphire Health has supported staff and workforce groups connected to corporate, community, industrial, and field-based operations."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="scrollbar-hide -mx-4 flex snap-x overflow-x-auto px-4 pb-3 sm:hidden">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
