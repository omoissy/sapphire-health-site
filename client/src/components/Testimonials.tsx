import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote:
      "Excellent nurse-to-patient care, the right equipment on site, good time management, and useful health education.",
    source: "GetOil Integrated Services feedback",
  },
  {
    quote: "Healthy staff, fast response, and improved morale.",
    source: "Ohaji 24-hour well stimulation operations",
  },
  {
    quote:
      "High level of professionalism, quality service, and genuine care for humanity.",
    source: "RCCG community medical support feedback",
  },
  {
    quote:
      "We had a reliable medical team for quality service and medical emergencies within our community.",
    source: "RCCG community support feedback",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const visibleTestimonials = [0, 1, 2].map((offset) => testimonials[(active + offset) % testimonials.length]);

  const goPrevious = () => {
    setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goNext = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

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
            <ScrollReveal key={`${testimonial.source}-${active}`} delay={index * 0.06}>
              <TestimonialCard
                dark
                quote={testimonial.quote}
                source={testimonial.source}
                className={index > 0 ? "hidden md:flex" : "flex"}
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.source}
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
