import { useEffect, useRef, useState } from "react";
import { Activity, CheckCircle2, MapPin, Shield, TrendingUp, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function DashCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm ${className}`}
    >
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
        {title}
      </p>
      {children}
    </div>
  );
}

function MiniSparkline() {
  const points = [20, 35, 28, 45, 38, 52, 48, 60, 55, 68, 62, 72];
  const max = Math.max(...points);
  const width = 200;
  const height = 50;

  const pathData = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - (p / max) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-12 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#9E3C34" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9E3C34" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${pathData} L ${width} ${height} L 0 ${height} Z`} fill="url(#sparkGrad)" />
      <path d={pathData} fill="none" stroke="#9E3C34" strokeWidth="2" />
    </svg>
  );
}

function NigeriaMap() {
  const pins = [
    { x: 48, y: 72, label: "Lagos" },
    { x: 55, y: 55, label: "Benin" },
    { x: 42, y: 42, label: "Abuja" },
    { x: 60, y: 38, label: "Jos" },
    { x: 52, y: 65, label: "PH" },
  ];

  return (
    <div className="relative h-36 w-full">
      <svg viewBox="0 0 100 100" className="h-full w-full opacity-20">
        <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>
      {pins.map((pin) => (
        <div
          key={pin.label}
          className="absolute flex flex-col items-center"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9E3C34] opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#9E3C34]" />
          </span>
          <span className="mt-0.5 text-[8px] text-white/50">{pin.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function HealthDashboard() {
  const workforceCounter = useCountUp(527, 2200);
  const screeningsCounter = useCountUp(84, 2000);

  return (
    <section className="relative overflow-hidden bg-[#0F0908] py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Platform Preview
            </span>
          </div>
          <SectionHeading
            inverse
            className="mb-12"
            eyebrow="Health Operations"
            title="Real-Time Workforce Health Visibility"
            description="A preview of the health operations dashboard that gives corporate clients full visibility into their workforce healthcare programme."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Active Workforce */}
            <DashCard title="Active Workforce Covered">
              <div ref={workforceCounter.ref} className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">{workforceCounter.count}</span>
                <span className="mb-1 text-sm text-[#9E3C34]">
                  <TrendingUp className="inline h-4 w-4" /> +12%
                </span>
              </div>
              <p className="mt-1 text-xs text-white/40">Personnel across active deployments</p>
            </DashCard>

            {/* Telemedicine gauge */}
            <DashCard title="Telemedicine Requests">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#9E3C34"
                      strokeWidth="3"
                      strokeDasharray="94.25"
                      strokeDashoffset="25"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                    73%
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">142</p>
                  <p className="text-xs text-white/40">This month</p>
                </div>
              </div>
            </DashCard>

            {/* Screenings progress */}
            <DashCard title="Preventive Screenings">
              <div ref={screeningsCounter.ref}>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-black text-white">{screeningsCounter.count}%</span>
                  <span className="text-xs text-white/40">Target: 100%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#4B1E1B] to-[#9E3C34]" style={{ width: "84%" }} />
                </div>
              </div>
            </DashCard>

            {/* Emergency status */}
            <DashCard title="Emergency Readiness">
              <div className="flex items-center gap-3">
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-bold text-emerald-400">All Systems Active</p>
                  <p className="text-xs text-white/40">Teams on standby · Response &lt; 30min</p>
                </div>
              </div>
            </DashCard>

            {/* Sparkline insights */}
            <DashCard title="Monthly Health Insights">
              <MiniSparkline />
              <p className="mt-2 text-xs text-white/40">Consultations trending upward over 12 months</p>
            </DashCard>

            {/* Coverage map */}
            <DashCard title="Coverage Locations">
              <NigeriaMap />
            </DashCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
