import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PremiumCardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
  interactive?: boolean;
};

export default function PremiumCard({
  className,
  elevated = false,
  interactive = true,
  children,
  ...props
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#4B1E1B]/10 bg-white/95 shadow-sm",
        elevated && "shadow-xl shadow-[#4B1E1B]/10",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3C34]/25 hover:shadow-xl hover:shadow-[#4B1E1B]/10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
