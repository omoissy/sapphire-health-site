import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "What is a Medical Emergency Response Plan (MERP) and does my operation require one?",
    a: "A MERP is a documented plan outlining how medical emergencies will be identified, managed, and escalated on your site. In Nigeria, the Department of Petroleum Resources (DPR, now NUPRC) requires upstream oil and gas operators to have an approved MERP before commencing operations. Sapphire Health develops, reviews, and maintains MERPs that meet all regulatory requirements.",
  },
  {
    q: "What is a fitness-for-work (FFW) assessment and when is it needed?",
    a: "An FFW assessment is a medical evaluation confirming that a worker is physically and mentally capable of performing their job safely in a specific environment. It is required before deploying personnel to hazardous environments such as offshore platforms, drilling sites, or high-risk onshore operations. Sapphire Health conducts FFW assessments and issues valid certificates for all major operators.",
  },
  {
    q: "Do you operate offshore?",
    a: "Yes. Our paramedics and occupational health professionals are trained and experienced in offshore environments. We can deploy to platforms and rigs in the Niger Delta and beyond, providing both standby medical support and comprehensive health programme management for your crew.",
  },
  {
    q: "How quickly can you deploy a medical team to our site?",
    a: "For planned engagements, our standard mobilisation turnaround is 48–72 hours after agreement sign-off. For urgent or emergency requirements, we work with you directly to determine the fastest safe deployment option. Contact us to discuss your timeline.",
  },
  {
    q: "Does Sapphire Health replace our existing HSE or safety officer?",
    a: "No — and we never position ourselves as a replacement. Your HSE officer manages hazard identification, safety systems, and regulatory compliance. Sapphire Health provides the clinical response layer — certified medical professionals who handle health screening, emergency medical response, and treatment. We work alongside your existing safety structure.",
  },
  {
    q: "Can you handle pre-mobilisation screening for large numbers of workers?",
    a: "Yes. We routinely conduct pre-mobilisation screening for groups ranging from 20 to several hundred personnel. Our screening covers medical history review, physical examination, and relevant laboratory tests. We can also deploy a mobile screening team to your site or staging area.",
  },
  {
    q: "Are your services aligned with DPR/NUPRC requirements?",
    a: "Yes. All our services — MERP development, FFW assessments, medical staffing, and health documentation — are structured around DPR/NUPRC standards and international occupational health best practices. We stay updated with regulatory changes and ensure your operations remain compliant.",
  },
  {
    q: "How do we get started with Sapphire Health?",
    a: "Fill in our corporate inquiry form, call us directly, or send an email. We respond within 24 hours and will schedule a brief consultation to understand your operation before preparing a tailored proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B1E1B] mb-4">
              Questions We Get Asked Most
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              If your question isn't covered here, call us or use the contact form below.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-[#4B1E1B]/2 transition-colors"
                >
                  <span className="font-semibold text-[#4B1E1B] text-sm leading-snug">{faq.q}</span>
                  <span className="flex-shrink-0 mt-0.5">
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 text-[#9E3C34]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#4B1E1B]/50" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
