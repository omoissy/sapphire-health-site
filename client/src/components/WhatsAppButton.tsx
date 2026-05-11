import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/config/contact";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  label = "Chat on WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_INFO.whatsapp.defaultMessage,
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}
