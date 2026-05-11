import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Excellent nurse-to-patient care, the right equipment on site, good time management, and useful health education.",
    source: "On-site care feedback",
  },
  {
    quote: "Healthy staff, fast response, and improved morale.",
    source: "Workforce support feedback",
  },
  {
    quote:
      "High level of professionalism, quality service, and genuine care for humanity.",
    source: "Client service feedback",
  },
  {
    quote:
      "We had a reliable medical team for quality service and medical emergencies within our community.",
    source: "Community medical support feedback",
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
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-white/50">
                Testimonials
              </span>
              <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Feedback from People We Have Supported
              </h2>
            </div>
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
              <article className={`${index > 0 ? "hidden md:flex" : "flex"} min-h-[260px] flex-col rounded-lg border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm`}>
                <Quote className="mb-5 h-8 w-8 text-[#F0B8B0]" />
                <p className="flex-1 text-lg leading-relaxed text-white/90">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-white/60">{testimonial.source}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </article>
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
