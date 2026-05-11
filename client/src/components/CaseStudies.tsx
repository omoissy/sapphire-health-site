import { Building2, Factory, Fuel, Landmark, ShieldCheck, Trophy, Users2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const supportedGroups = [
  {
    initials: "SE",
    name: "Seplat Inc.",
    context: "Staff and workforce groups connected to energy and field operations.",
    category: "Corporate / industrial",
    icon: Fuel,
  },
  {
    initials: "CX",
    name: "Ceplax Staff",
    context: "Staff support context represented as a named workforce group.",
    category: "Workforce group",
    icon: Building2,
  },
  {
    initials: "MW",
    name: "Midwestern Staff",
    context: "Workforce groups connected to oil and gas operating environments.",
    category: "Industrial workforce",
    icon: Factory,
  },
  {
    initials: "GO",
    name: "GetOil Integrated Services-related field personnel",
    context: "Field personnel connected to oilfield service and operational settings.",
    category: "Field personnel",
    icon: ShieldCheck,
  },
  {
    initials: "CI",
    name: "Community and institutional groups",
    context: "Organised community, faith, education, and institutional service contexts.",
    category: "Community / institutional",
    icon: Landmark,
  },
  {
    initials: "EC",
    name: "Event and competition medical support groups",
    context: "On-site medical support contexts for events, programmes, and competitions.",
    category: "Events / competitions",
    icon: Trophy,
  },
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
                  className="aspect-[4/3] w-full object-cover object-[center_45%]"
                  loading="lazy"
                />
              </figure>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {supportedGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article
                      key={group.name}
                      className="group flex min-h-[154px] flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4B1E1B]/20 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-[#4B1E1B]/10 bg-[#FAFBFC] text-sm font-bold text-[#4B1E1B]">
                          {group.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                            {group.category}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold leading-snug text-[#4B1E1B]">
                            {group.name}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-4 flex items-start gap-2 border-t border-gray-100 pt-3 text-xs leading-relaxed text-gray-500">
                        <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9E3C34]" />
                        <p>{group.context}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="mt-5 rounded-md border border-gray-200 bg-white px-4 py-3 text-xs leading-relaxed text-gray-500">
                Logos and names are used only to represent workforce groups, service contexts, or related engagements where applicable. They do not necessarily imply direct contractual partnership unless stated.
              </p>
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
