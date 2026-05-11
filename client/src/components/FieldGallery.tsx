import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/ui/section-heading";

const fieldPhotos = [
  {
    src: "/images/sapphire/sapphire-onsite-healthcare-card.jpg",
    alt: "Sapphire Health on-site workforce health screening",
    caption: "Workforce screening",
    objectPosition: "center center",
  },
  {
    src: "/images/sapphire/sapphire-industrial-response-card.jpg",
    alt: "Sapphire Health emergency readiness support at an industrial site",
    caption: "Emergency readiness",
    objectPosition: "center 45%",
  },
  {
    src: "/images/sapphire/sapphire-team-ppe-field-card.jpg",
    alt: "Sapphire Health professional in PPE at a field operation",
    caption: "Field deployment",
    objectPosition: "center center",
  },
  {
    src: "/images/sapphire/sapphire-field-medical-hero.jpg",
    alt: "Sapphire Health field medical personnel at an operational site",
    caption: "Industrial site support",
    objectPosition: "58% center",
  },
];

export default function FieldGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Field Proof"
              title="Care Delivered Where Work Happens"
            />
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              A compact view of the field environments Sapphire supports, without turning the homepage into a long photo archive.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {fieldPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative aspect-[4/3] min-w-[78vw] snap-start overflow-hidden rounded-2xl border border-white bg-[#4B1E1B] shadow-xl shadow-[#4B1E1B]/10 sm:min-w-[420px] lg:min-w-[31%]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: photo.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D0C]/90 via-[#1A0D0C]/15 to-transparent opacity-90" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-5">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {photo.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
