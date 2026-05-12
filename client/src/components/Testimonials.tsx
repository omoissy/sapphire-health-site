import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "Excellent nurse-to-patient care, the right equipment on site, good time management, and useful health education.",
    source: "Operations Manager",
    org: "GetOil Integrated Services",
    role: "Oil & Gas Operations",
  },
  {
    quote: "Healthy staff, fast response, and improved morale. Sapphire Health made a real difference to our operations.",
    source: "HSE Coordinator",
    org: "Well Stimulation Operations",
    role: "Ohaji Field Operations",
  },
  {
    quote:
      "High level of professionalism, quality service, and genuine care for humanity. They went above and beyond.",
    source: "Programme Coordinator",
    org: "RCCG Community Outreach",
    role: "Community Medical Support",
  },
  {
    quote:
      "We had a reliable medical team for quality service and medical emergencies within our community. Highly recommended.",
    source: "Event Organizer",
    org: "Community Support Programme",
    role: "Community Health Initiative",
  },
  {
    quote:
      "The medical coverage was seamless. Our team felt safer knowing there was professional support on standby at all times.",
    source: "Project Manager",
    org: "Construction Firm",
    role: "Multi-Site Project",
  },
  {
    quote:
      "Sapphire Health's wellness programme was well-organized and our staff genuinely appreciated the health screenings and education sessions.",
    source: "HR Director",
    org: "Corporate Organization",
    role: "Employee Wellness Programme",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(active + offset) % testimonials.length],
  );

  const goPrevious = () => {
    setActive((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const goNext = () => {
    setActive((c) => (c + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#4B1E1B] py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              inverse
              eyebrow="Testimonials"
              title="Feedback from People We Have Supported"
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <ScrollReveal key={`${testimonial.org}-${active}`} delay={index * 0.06}>
              <div
                className={`flex min-h-[300px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm ${
                  index > 0 ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  <Quote className="mb-4 h-8 w-8 text-white/20" />
                  <p className="text-base font-medium leading-relaxed text-white/90">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-bold text-white">{testimonial.source}</p>
                  <p className="mt-0.5 text-xs text-white/50">{testimonial.org}</p>
                  <p className="text-[10px] text-white/35">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.org + index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                active === index ? "w-8 bg-white" : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
