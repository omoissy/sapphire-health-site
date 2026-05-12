import { cn } from "@/lib/utils";

type LogoCardProps = {
  name: string;
  logoSrc?: string;
  initials?: string;
  className?: string;
};

export default function LogoCard({
  name,
  logoSrc,
  initials,
  className,
}: LogoCardProps) {
  return (
    <article
      className={cn(
        "group mx-2 flex h-[150px] w-[286px] shrink-0 flex-col items-center justify-center gap-4 rounded-lg border border-[#4B1E1B]/10 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3C34]/25 hover:shadow-xl hover:shadow-[#4B1E1B]/10",
        className,
      )}
    >
      <div className="flex h-16 w-full items-center justify-center">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${name} logo`}
            className="max-h-14 max-w-[190px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="flex h-16 min-w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#4B1E1B] to-[#9E3C34] px-5 text-sm font-bold text-white shadow-lg shadow-[#4B1E1B]/20">
            {initials ?? name}
          </div>
        )}
      </div>
      <h3 className="text-sm font-semibold leading-snug text-[#4B1E1B]">{name}</h3>
    </article>
  );
}
