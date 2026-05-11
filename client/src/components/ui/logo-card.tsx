import { cn } from "@/lib/utils";

type LogoCardProps = {
  name: string;
  context: string;
  logoSrc?: string;
  initials?: string;
  sourceLabel?: string;
  className?: string;
};

export default function LogoCard({
  name,
  context,
  logoSrc,
  initials,
  sourceLabel,
  className,
}: LogoCardProps) {
  return (
    <article
      className={cn(
        "group mx-2 flex h-[178px] w-[304px] shrink-0 flex-col justify-between rounded-lg border border-[#4B1E1B]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3C34]/25 hover:shadow-xl hover:shadow-[#4B1E1B]/10",
        className,
      )}
    >
      <div className="flex h-16 items-center">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${name} logo`}
            className="max-h-14 max-w-[190px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#4B1E1B] to-[#9E3C34] text-sm font-bold text-white shadow-lg shadow-[#4B1E1B]/20">
            {initials}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-snug text-[#4B1E1B]">{name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-500">{context}</p>
        {sourceLabel ? (
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            {sourceLabel}
          </p>
        ) : null}
      </div>
    </article>
  );
}
