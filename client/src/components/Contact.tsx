import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACT_INFO } from "@/config/contact";
import SapphireLogo from "@/components/SapphireLogo";
import IconBadge from "@/components/ui/icon-badge";
import PremiumCard from "@/components/ui/premium-card";
import SectionHeading from "@/components/ui/section-heading";

type ContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone.display,
    href: `tel:${CONTACT_INFO.phone.tel}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email.general,
    href: `mailto:${CONTACT_INFO.email.general}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT_INFO.addresses.lagos.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.addresses.lagos.address)}`,
  },
  {
    icon: Clock,
    label: "Availability",
    value: CONTACT_INFO.hours.office,
    note: CONTACT_INFO.hours.emergency,
  },
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange =
    (field: keyof Omit<ContactForm, "message">) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, message: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoBody = [
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_INFO.email.general}?subject=${encodeURIComponent(
      `Sapphire Health consultation request from ${form.name}`,
    )}&body=${encodeURIComponent(mailtoBody)}`;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_INFO.whatsapp.defaultMessage,
  )}`;

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            className="mb-14"
            eyebrow="Get in Touch"
            title="Talk to Our Team"
            description="Whether you need a formal proposal, a quick question answered, or an urgent deployment, we are available. Reach out and we will respond within 24 hours."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <PremiumCard className="p-5">
                <SapphireLogo
                  variant="lockup"
                  imageBoxClassName="h-24 w-44 p-3"
                  showText={false}
                />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
                  Clinical support, emergency readiness, and workforce health coordination for organizations that need care closer to operations.
                </p>
              </PremiumCard>

              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.label} className="flex items-start gap-4">
                    <IconBadge icon={Icon} tone="light" size="sm" />
                    <div>
                      <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-gray-400">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-[#4B1E1B] transition-colors hover:text-[#9E3C34]"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-medium text-[#4B1E1B]">{detail.value}</p>
                      )}
                      {detail.note ? (
                        <p className="mt-0.5 text-xs text-[#9E3C34]">{detail.note}</p>
                      ) : null}
                    </div>
                  </div>
                );
              })}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20BA5A]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              <div className="flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-[#4B1E1B]/10 bg-[#F5F7FA]">
                <div className="text-center text-gray-500">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-[#4B1E1B]/40" />
                  <p className="text-sm font-medium">11A Van Daniel's Estate</p>
                  <p className="text-xs">Orchid, Lagos</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50 p-10 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-800">Message Ready</h3>
                <p className="text-sm text-green-700">
                  Your email client has opened with your message. We will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-green-700 underline underline-offset-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-[#4B1E1B]/10 bg-[#FAFBFC] p-6 shadow-sm sm:p-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleInputChange("name")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                      Company / Organisation
                    </label>
                    <Input
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleInputChange("company")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleInputChange("email")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                      Phone Number
                    </label>
                    <Input
                      placeholder="08067316717"
                      value={form.phone}
                      onChange={handleInputChange("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-600">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your operation, site, headcount, location, and what you need."
                    rows={5}
                    value={form.message}
                    onChange={handleMessageChange}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="h-12 w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-center text-xs text-gray-400">
                  We respond within 24 hours on business days.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
