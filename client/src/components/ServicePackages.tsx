import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const packages = [
  {
    name: "Essential Cover",
    tagline: "For smaller sites and short-duration projects",
    price: "On Request",
    highlight: false,
    features: [
      "1 certified paramedic on standby",
      "Basic first aid station setup",
      "Fitness-for-work assessments (up to 20 pax)",
      "Daily health monitoring log",
      "Emergency contact & referral coordination",
      "Post-deployment health report",
    ],
    cta: "Enquire Now",
  },
  {
    name: "Operational Health",
    tagline: "For ongoing field operations and upstream projects",
    price: "On Request",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Dedicated paramedic team (2–4 personnel)",
      "Pre-mobilisation screening for all crew",
      "Fitness-for-work certificates (unlimited)",
      "MERP development & regulatory alignment",
      "DPR/NUPRC compliance documentation",
      "24/7 emergency response coverage",
      "Medevac coordination & logistics",
      "Monthly occupational health reports",
    ],
    cta: "Get a Proposal",
  },
  {
    name: "Enterprise HSSE",
    tagline: "For multinationals and large-scale operations",
    price: "On Request",
    highlight: false,
    features: [
      "Full occupational health programme management",
      "Multi-site medical team deployment",
      "Custom MERP design & drill facilitation",
      "Regulatory liaison (DPR/NUPRC/HSE)",
      "Staff health surveillance programme",
      "Periodic medical examinations",
      "Incident investigation support",
      "Executive health reporting dashboard",
    ],
    cta: "Talk to Us",
  },
];

export default function ServicePackages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">
              Service Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B1E1B] mb-4">
              Flexible Packages for Every Operation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you run a short-duration event, an active drilling programme, or a nationwide operation — we structure our services to fit your scope and budget.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 h-full flex flex-col border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-[#4B1E1B] text-white border-[#4B1E1B] shadow-2xl"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#4B1E1B]/30 hover:shadow-lg"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#9E3C34] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      <Star className="w-3 h-3" /> {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-[#4B1E1B]"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
                    {pkg.tagline}
                  </p>
                  <div className={`mt-4 text-2xl font-bold ${pkg.highlight ? "text-white" : "text-[#4B1E1B]"}`}>
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          pkg.highlight ? "text-green-400" : "text-[#9E3C34]"
                        }`}
                      />
                      <span className={pkg.highlight ? "text-white/85" : "text-gray-600"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/corporate-inquiry">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200 ${
                      pkg.highlight
                        ? "bg-white text-[#4B1E1B] hover:bg-white/90"
                        : "bg-[#4B1E1B] text-white hover:bg-[#9E3C34]"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm text-gray-400 mt-8">
            All packages are fully customisable. Pricing is based on scope, duration, personnel count, and site location.{" "}
            <Link href="/corporate-inquiry">
              <span className="text-[#9E3C34] underline underline-offset-2 cursor-pointer hover:text-[#4B1E1B]">
                Contact us for a tailored quote.
              </span>
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
