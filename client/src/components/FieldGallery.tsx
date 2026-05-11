import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
                Field Proof
              </span>
              <h2 className="text-3xl font-bold text-[#4B1E1B] sm:text-4xl">
                Care Delivered Where Work Happens
              </h2>
            </div>
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
                className="group relative aspect-[4/3] min-w-[78vw] snap-start overflow-hidden rounded-lg border border-gray-100 bg-[#4B1E1B] sm:min-w-[420px] lg:min-w-[31%]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: photo.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D0C]/82 via-[#1A0D0C]/12 to-transparent opacity-90" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 text-sm font-semibold text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
