import { ArrowRight } from "lucide-react";
import PremiumCard from "@/components/ui/premium-card";

type LeadershipCardProps = {
  initials: string;
  name: string;
  title: string;
  summary: string;
  specialty?: string;
  experience?: string;
  imageSrc?: string;
  imagePosition?: string;
  onViewProfile: () => void;
};

export default function LeadershipCard({
  initials,
  name,
  title,
  summary,
  specialty,
  experience,
  imageSrc,
  imagePosition = "center top",
  onViewProfile,
}: LeadershipCardProps) {
  return (
    <PremiumCard className="group flex h-full min-w-[82vw] snap-start flex-col overflow-hidden p-0 sm:min-w-[340px] lg:min-w-0" elevated>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#4B1E1B]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${name} portrait`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] [filter:contrast(1.04)_saturate(1.03)]"
            style={{ objectPosition: imagePosition }}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(240,184,176,0.28),transparent_34%),linear-gradient(145deg,#4B1E1B,#9E3C34)]">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/10 text-3xl font-bold text-white shadow-2xl backdrop-blur-sm">
              {initials}
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1A0D0C]/80 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B1E1B] shadow-lg">
          Leadership
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-[#4B1E1B]">{name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E3C34]">
          {title}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {specialty ? (
            <span className="rounded-full bg-[#4B1E1B]/5 px-3 py-1 text-[11px] font-medium text-[#4B1E1B]">
              {specialty}
            </span>
          ) : null}
          {experience ? (
            <span className="rounded-full bg-[#D9A441]/10 px-3 py-1 text-[11px] font-medium text-[#6B4B0B]">
              {experience}
            </span>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={onViewProfile}
        className="mx-5 mb-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#4B1E1B] transition-colors hover:text-[#9E3C34]"
      >
        View Profile <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </PremiumCard>
  );
}
