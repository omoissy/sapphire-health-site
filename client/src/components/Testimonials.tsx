import { Quote, Star } from "lucide-react";
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

const proofImages = [
  {
    src: "/images/sapphire/sapphire-field-medical-thumb.jpg",
    alt: "Sapphire Health field medical team at an industrial operation",
  },
  {
    src: "/images/sapphire/sapphire-onsite-healthcare-thumb.jpg",
    alt: "Sapphire Health on-site workforce health screening",
  },
  {
    src: "/images/sapphire/sapphire-team-ppe-field-thumb.jpg",
    alt: "Sapphire Health field healthcare professional in PPE",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#4B1E1B] py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-white/50">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Feedback from People We Have Supported
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="mb-10 grid grid-cols-3 gap-3">
            {proofImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-28 w-full rounded-md border border-white/10 object-cover sm:h-36"
                loading="lazy"
              />
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.quote} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm">
                <Quote className="mb-5 h-8 w-8 text-[#F0B8B0]" />
                <p className="text-lg leading-relaxed text-white/90">
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
      </div>
    </section>
  );
}
