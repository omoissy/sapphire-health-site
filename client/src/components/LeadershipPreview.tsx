import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadershipCard from "@/components/ui/leadership-card";
import SectionHeading from "@/components/ui/section-heading";

const leaders = [
  {
    initials: "OM",
    name: "Dr. Oluwasanmi Oluwatobi Mercy",
    title: "Chief Executive Officer",
    summary: "Leads Sapphire's strategic direction, clinical quality, partnerships, and growth.",
    profile:
      "Provides executive leadership across service strategy, client relationships, clinical standards, and long-term growth. Her focus is keeping Sapphire Health positioned as a dependable healthcare partner for organizations, communities, and field teams.",
  },
  {
    initials: "ES",
    name: "Dr. Ezenwali Somtochukwu Cynthia",
    title: "Chief Operating Officer",
    summary: "Oversees daily operations, field readiness, staffing, procurement, and service delivery.",
    profile:
      "Coordinates the operational systems that move Sapphire from enquiry to safe deployment. Her work covers staffing readiness, logistics, field coordination, supplier planning, and delivery quality across client engagements.",
  },
  {
    initials: "OI",
    name: "Omoniyi Israel",
    title: "Head of Strategy, Finance & Technology",
    summary: "Leads digital strategy, finance, website systems, growth planning, and technology integration.",
    profile:
      "Builds the planning and technology layer behind Sapphire's growth. His remit includes financial structure, digital systems, service positioning, operational data, and the tools that make the company easier for clients to engage.",
  },
  {
    initials: "AS",
    name: "Dr. Oluwasanmi Ademola Samuel",
    title: "Medical Director",
    summary: "Provides clinical oversight, medical governance, and service quality assurance.",
    profile:
      "Oversees medical governance, clinical protocols, service quality, and care standards. His role helps ensure every engagement is clinically responsible, properly documented, and aligned with Sapphire's duty of care.",
  },
];

export default function LeadershipPreview() {
  const [activeLeader, setActiveLeader] = useState<(typeof leaders)[number] | null>(null);

  useEffect(() => {
    if (!activeLeader) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveLeader(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeLeader]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Meet the Leadership"
              title="Clinical Governance with Operational Discipline"
            />
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              Short leadership profiles stay compact on the homepage. Full details open only when needed.
            </p>
          </div>
        </ScrollReveal>

        <div className="scrollbar-hide -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {leaders.map((leader, index) => (
            <ScrollReveal key={leader.name} delay={index * 0.06}>
              <LeadershipCard {...leader} onViewProfile={() => setActiveLeader(leader)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {activeLeader ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0D0C]/70 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leadership-profile-title"
          onClick={() => setActiveLeader(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#4B1E1B] text-base font-bold text-white">
                  {activeLeader.initials}
                </div>
                <div>
                  <h3 id="leadership-profile-title" className="text-xl font-bold text-[#4B1E1B]">
                    {activeLeader.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
                    {activeLeader.title}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveLeader(null)}
                className="rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#4B1E1B]"
                aria-label="Close profile"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{activeLeader.profile}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
