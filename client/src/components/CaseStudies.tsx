import { Building2, Factory, Fuel, Landmark, ShieldCheck, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const supportedGroups = [
  {
    initials: "SE",
    name: "Seplat Energy",
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

function ProofCard({ group }: { group: (typeof supportedGroups)[number] }) {
  const Icon = group.icon;

  return (
    <article className="group mx-2 flex h-[164px] w-[286px] shrink-0 flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4B1E1B]/20 hover:shadow-md">
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
}

export default function CaseStudies() {
  const marqueeGroups = [...supportedGroups, ...supportedGroups];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAFBFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
              Experience
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#4B1E1B] sm:text-4xl">
              Organizations & Workforce Groups We Have Supported
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Through direct and related service arrangements, Sapphire Health has supported staff and workforce groups connected to corporate, community, industrial, and field-based operations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="scrollbar-hide -mx-4 flex snap-x overflow-x-auto px-4 pb-3 sm:hidden">
            {supportedGroups.map((group) => (
              <div key={group.name} className="snap-start">
                <ProofCard group={group} />
              </div>
            ))}
          </div>
          <div className="proof-marquee -mx-6 hidden sm:block lg:mx-0">
            <div className="proof-marquee-track py-2">
              {marqueeGroups.map((group, index) => (
                <ProofCard key={`${group.name}-${index}`} group={group} />
              ))}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl rounded-md border border-gray-200 bg-white px-4 py-3 text-center text-xs leading-relaxed text-gray-500">
            Names and logos are used to represent workforce groups, service contexts, or related engagements where applicable. They do not necessarily imply direct contractual partnership unless stated.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
