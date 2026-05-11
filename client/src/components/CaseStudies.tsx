import { Building2, CheckCircle2, Trophy, Users2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const supportedGroups = [
  "Seplat Inc.",
  "Ceplax Staff",
  "Midwestern Staff",
  "GetOil Integrated Services-related field personnel",
  "Community and institutional groups",
  "Event and competition medical support groups",
];

const capabilities = [
  {
    icon: Building2,
    title: "Corporate and Industrial Teams",
    description: "Workforce health support for staff groups connected to corporate, industrial, and field-based operations.",
  },
  {
    icon: Users2,
    title: "Community and Institutional Groups",
    description: "Medical support, health education, screening, and care coordination for organised groups and communities.",
  },
  {
    icon: Trophy,
    title: "Event and Competition Coverage",
    description: "Standby medical teams for programmes where reliable on-site care and emergency readiness are required.",
  },
];

export default function CaseStudies() {
  return (
    <section id="experience" className="bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal direction="left">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
                Experience
              </span>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-[#4B1E1B] sm:text-4xl">
                Organizations & Workforce Groups We Have Supported
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Through direct and related service arrangements, Sapphire Health has supported staff and workforce groups connected to corporate, community, industrial, and field-based operations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                This experience informs how we plan coverage, prepare equipment, document incidents, educate workforces, and coordinate care in settings where timing and reliability matter.
              </p>
              <figure className="mt-8 overflow-hidden rounded-lg border border-gray-100 bg-white">
                <img
                  src="/images/sapphire/sapphire-industrial-response-card.jpg"
                  alt="Sapphire Health field safety and emergency readiness support"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {supportedGroups.map((group) => (
                  <div
                    key={group}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-[#FAFBFC] px-4 py-3 text-sm font-semibold text-[#4B1E1B]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9E3C34]" />
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-gray-100 bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#4B1E1B]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#4B1E1B]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
