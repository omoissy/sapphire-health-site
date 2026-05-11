import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeTone = "maroon" | "amber" | "teal" | "blue" | "green" | "light";

const toneClasses: Record<IconBadgeTone, string> = {
  maroon: "from-[#4B1E1B] to-[#9E3C34] text-white shadow-[#4B1E1B]/20",
  amber: "from-[#F7C66A] to-[#B7791F] text-[#3A1A12] shadow-amber-700/15",
  teal: "from-[#0F766E] to-[#38B2AC] text-white shadow-teal-700/15",
  blue: "from-[#1E3A5F] to-[#3B82F6] text-white shadow-blue-700/15",
  green: "from-[#16865D] to-[#36C486] text-white shadow-green-700/15",
  light: "from-white to-[#F7ECEA] text-[#4B1E1B] shadow-[#4B1E1B]/10",
};

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: IconBadgeTone;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export default function IconBadge({
  icon: Icon,
  tone = "maroon",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br shadow-lg ring-1 ring-white/45",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      <span className="absolute inset-[3px] rounded-md border border-white/20" />
      <Icon className={cn("relative", iconSizes[size])} strokeWidth={1.9} />
    </span>
  );
}
