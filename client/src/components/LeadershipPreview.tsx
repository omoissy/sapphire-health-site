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
    experience: "10+ years",
    summary:
      "Pediatrician and healthcare leader with over 10 years of experience guiding Sapphire's clinical vision, partnerships, and commitment to accessible workforce healthcare.",
    profile:
      "Dr. Oluwasanmi Oluwatobi Mercy is a pediatrician and healthcare leader with over a decade of experience in clinical care, patient advocacy, and healthcare service delivery. As Chief Executive Officer of Sapphire Health Services Limited, she leads the company's strategic direction, clinical standards, partnership development, and long-term vision. Her leadership is rooted in the belief that quality healthcare should not be limited by geography, especially for employees and communities working in remote, industrial, or offsite environments. Through Sapphire Health, she is building a model of care that combines clinical reliability, prevention, compassion, and operational readiness.",
  },
  {
    initials: "ES",
    name: "Dr. Ezenwali Somtochukwu Cynthia",
    title: "Chief Operating Officer",
    specialty: "Internal Medicine",
    experience: "10+ years",
    imageSrc: "/images/team/dr-somto-coo.jpg",
    imagePosition: "center top",
    summary:
      "Internal medicine physician with over 10 years of experience supporting Sapphire's operations, field readiness, clinical coordination, and service delivery.",
    profile:
      "Dr. Ezenwali Somtochukwu Cynthia is an internal medicine physician with a cardiology subspecialty focus and over 10 years of experience in clinical practice and healthcare operations. As Chief Operating Officer of Sapphire Health Services Limited, she oversees day-to-day service delivery, field readiness, staffing coordination, procurement, and operational quality. Her work ensures that Sapphire's medical teams are prepared, professional, and responsive across corporate, community, and remote workforce environments. She brings a strong clinical foundation and operational discipline to Sapphire's mission of bringing dependable healthcare closer to where people work.",
  },
  {
    initials: "OI",
    name: "Omoniyi Israel",
    title: "Head of Strategy, Finance & Technology",
    specialty: "Strategy, Finance & Data",
    experience: "Field operations",
    imageSrc: "/images/team/omoniyi-israel-strategy.jpg",
    imagePosition: "center top",
    summary:
      "Petroleum engineer and data science professional leading Sapphire's strategy, finance, technology systems, digital growth, and corporate positioning.",
    profile:
      "Omoniyi Israel brings a multidisciplinary background across petroleum engineering, oil and gas field operations, finance, technology, and data science. He holds a B.Eng. in Chemical Engineering from Covenant University and is pursuing an M.S. in Data Science at George Washington University. With professional experience in the oil and gas sector, he understands the operational realities of field-based and remote workforces. As Head of Strategy, Finance & Technology at Sapphire Health Services Limited, he leads business strategy, digital systems, website and technology infrastructure, financial planning, proposal development, analytics, and growth positioning. His role bridges healthcare, field operations, and technology to help Sapphire scale as a modern workforce healthcare company.",
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
              description="A compact executive view keeps the homepage easy to scan while detailed profiles open on demand."
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
                <p className="text-sm leading-relaxed text-gray-600">{activeLeader.profile}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
