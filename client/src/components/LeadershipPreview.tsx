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
    specialty: "Pediatrics",
    experience: "Over 10 years",
    imageSrc: "/images/team/dr-tobi-ceo.jpg",
    imagePosition: "center 30%",
    summary:
      "Pediatrician and healthcare leader with over 10 years of experience, guiding Sapphire's clinical vision, partnerships, and mission to make quality healthcare accessible to workforces wherever they operate.",
    profile:
      "Dr. Oluwasanmi Oluwatobi Mercy is a seasoned pediatrician and healthcare leader with over 10 years of experience in clinical care, patient advocacy, and healthcare service delivery. As Chief Executive Officer of Sapphire Health Services Limited, she provides the strategic vision behind the company's mission to bring reliable, proactive, and compassionate healthcare closer to employees, organizations, and communities.\n\nHer leadership combines medical expertise with a strong commitment to access, prevention, and service quality. She oversees Sapphire's clinical governance direction, ethical standards, stakeholder relationships, and long-term growth strategy. Under her leadership, Sapphire Health is positioned as an emerging force in corporate and remote workforce healthcare, helping organizations protect their most valuable asset - their people.\n\nDr. Tobi's work is driven by a simple conviction: geography should never determine the quality of care a person receives. Through Sapphire Health, she continues to champion a model of healthcare that is responsive, people-centered, and built for the realities of modern work.",
  },
  {
    initials: "ES",
    name: "Dr. Ezenwali Somtochukwu Cynthia",
    title: "Chief Operating Officer",
    specialty: "Internal Medicine",
    experience: "Over 10 years",
    imageSrc: "/images/team/dr-somto-coo.jpg",
    imagePosition: "center top",
    summary:
      "Internal medicine physician with a cardiology subspecialty focus and over 10 years of experience, leading Sapphire's clinical operations, quality assurance, and field readiness.",
    profile:
      "Dr. Ezenwali Somtochukwu Cynthia is an experienced internal medicine physician with a cardiology subspecialty focus and over 10 years of clinical and operational healthcare experience. As Chief Operating Officer of Sapphire Health Services Limited, she brings strong medical judgment, operational discipline, and quality-focused leadership to the company's service delivery model.\n\nShe oversees Sapphire's day-to-day healthcare operations, clinical quality assurance, field readiness, staffing coordination, procurement, SOP implementation, and service delivery standards. Her role ensures that Sapphire's medical teams are prepared, responsive, and capable of delivering safe, reliable, and professional healthcare across corporate, community, industrial, and remote workforce environments.\n\nWith her background in internal medicine and cardiovascular care, Dr. Somto brings a strong understanding of adult health, chronic disease management, preventive care, and emergency readiness - all critical to supporting workforces in demanding operational settings. Her leadership helps Sapphire maintain the consistency, professionalism, and clinical quality expected of a serious healthcare partner.",
  },
  {
    initials: "OI",
    name: "Omoniyi Israel",
    title: "Head of Strategy, Finance & Technology",
    specialty: "Petroleum Engineering & Data Science",
    experience: "Strategy, finance & growth",
    imageSrc: "/images/team/omoniyi-israel-strategy.jpg",
    imagePosition: "center top",
    summary:
      "Petroleum engineer and data science professional combining oil and gas field insight, finance, technology, and strategy to support Sapphire's growth as a modern workforce healthcare company.",
    profile:
      "Omoniyi Israel brings a multidisciplinary background across petroleum engineering, oil and gas operations, finance, technology, and data science. He holds a B.Eng. in Chemical Engineering from Covenant University and is pursuing an M.S. in Data Science at George Washington University, combining engineering discipline with modern analytical and digital systems expertise.\n\nBefore joining Sapphire's leadership team, Israel built experience within the oil and gas sector, giving him direct insight into the realities of field operations, remote workforces, industrial safety demands, and the logistical challenges faced by companies operating outside traditional urban infrastructure. This background allows him to support Sapphire's positioning as a healthcare partner that understands the operational world its clients work in.\n\nAs Head of Strategy, Finance & Technology, Israel leads Sapphire's business strategy, financial planning, digital infrastructure, proposal development, analytics, brand positioning, and growth systems. His role bridges healthcare delivery with technology, data, and industrial workforce strategy - helping Sapphire build the structure, visibility, and operational intelligence needed to scale as a premium corporate healthcare provider.",
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
    <section id="leadership" className="relative scroll-mt-24 overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#4B1E1B]/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Meet Our Leadership"
              title="Clinical Leadership Backed by Strategy and Field Discipline"
              description="Sapphire's clinical governance is led by experienced physicians, while its strategy, finance, and technology systems are supported by multidisciplinary expertise across healthcare, field operations, energy, and data."
            />
          </div>
        </ScrollReveal>

        <div className="scrollbar-hide -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {leaders.map((leader, index) => (
            <ScrollReveal key={leader.name} delay={index * 0.06} className="h-full">
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
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid md:grid-cols-[240px_1fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-[#4B1E1B] md:min-h-full">
                {activeLeader.imageSrc ? (
                  <img
                    src={activeLeader.imageSrc}
                    alt={`${activeLeader.name} portrait`}
                    className="h-full w-full object-cover object-top [filter:contrast(1.04)_saturate(1.03)]"
                    style={{ objectPosition: activeLeader.imagePosition ?? "center top" }}
                  />
                ) : (
                  <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(240,184,176,0.28),transparent_34%),linear-gradient(145deg,#4B1E1B,#9E3C34)]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/10 text-3xl font-bold text-white shadow-2xl backdrop-blur-sm">
                      {activeLeader.initials}
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0D0C]/75 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E3C34]">
                      Leadership Profile
                    </p>
                    <h3 id="leadership-profile-title" className="mt-2 text-2xl font-bold text-[#4B1E1B]">
                      {activeLeader.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
                      {activeLeader.title}
                    </p>
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

                <div className="mb-6 flex flex-wrap gap-2">
                  {activeLeader.specialty ? (
                    <span className="rounded-full bg-[#4B1E1B]/5 px-3 py-1 text-xs font-medium text-[#4B1E1B]">
                      {activeLeader.specialty}
                    </span>
                  ) : null}
                  {activeLeader.experience ? (
                    <span className="rounded-full bg-[#D9A441]/10 px-3 py-1 text-xs font-medium text-[#6B4B0B]">
                      {activeLeader.experience}
                    </span>
                  ) : null}
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                  {activeLeader.profile.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
