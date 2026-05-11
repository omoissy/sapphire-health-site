import { ArrowRight } from "lucide-react";
import PremiumCard from "@/components/ui/premium-card";

type LeadershipCardProps = {
  initials: string;
  name: string;
  title: string;
  summary: string;
  onViewProfile: () => void;
};

export default function LeadershipCard({
  initials,
  name,
  title,
  summary,
  onViewProfile,
}: LeadershipCardProps) {
  return (
    <PremiumCard className="group flex h-full min-h-[304px] min-w-[78vw] snap-start flex-col overflow-hidden p-6 sm:min-w-[330px] lg:min-w-0">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#4B1E1B] to-[#9E3C34] text-xl font-bold text-white shadow-xl shadow-[#4B1E1B]/20">
          {initials}
        </div>
        <span className="rounded-full bg-[#4B1E1B]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B1E1B]/55">
          Leadership
        </span>
      </div>
      <h3 className="text-base font-semibold leading-snug text-[#4B1E1B]">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E3C34]">
        {title}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">{summary}</p>
      <button
        type="button"
        onClick={onViewProfile}
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#4B1E1B] transition-colors hover:text-[#9E3C34]"
      >
        View Profile <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </PremiumCard>
  );
}
