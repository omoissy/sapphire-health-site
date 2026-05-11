import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  source: string;
  dark?: boolean;
  className?: string;
};

export default function TestimonialCard({ quote, source, dark = false, className }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-[270px] flex-col rounded-lg border p-6 shadow-sm",
        dark
          ? "border-white/15 bg-white/[0.08] text-white backdrop-blur-sm"
          : "border-[#4B1E1B]/10 bg-white text-[#4B1E1B]",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-lg",
            dark ? "bg-white/10 text-[#F0B8B0]" : "bg-[#4B1E1B]/10 text-[#9E3C34]",
          )}
        >
          <Quote className="h-5 w-5" />
        </span>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <p className={cn("flex-1 text-lg leading-relaxed", dark ? "text-white/90" : "text-gray-700")}>
        "{quote}"
      </p>
      <p className={cn("mt-6 text-sm font-semibold", dark ? "text-white/60" : "text-[#4B1E1B]/70")}>
        {source}
      </p>
    </article>
  );
}
