import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) return;

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
  }, [target, duration, startOnView]);

  return { count, ref };
}

const metrics = [
  { value: 500, suffix: "+", label: "Workforce Members Covered", prefix: "" },
  { value: 24, suffix: "/7", label: "Emergency Response Hours", prefix: "" },
  { value: 8, suffix: "", label: "Core Service Lines", prefix: "" },
  { value: 50, suffix: "+", label: "Deployments Completed", prefix: "" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate", prefix: "" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#1A0D0C] py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4B1E1B]/20 via-transparent to-[#123B43]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            By the Numbers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <StatCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[number];
  index: number;
}) {
  const { count, ref } = useCountUp(metric.value, 2000);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div ref={ref} className="text-center">
        <p className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
          {metric.prefix}
          {count}
          <span className="text-[#9E3C34]">{metric.suffix}</span>
        </p>
        <p className="mt-3 text-sm font-medium text-white/50">{metric.label}</p>
      </div>
    </ScrollReveal>
  );
}
