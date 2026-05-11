// ChatWidget.tsx — WhatsApp-based chat widget
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/config/contact";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.defaultMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden"
          >
            <div className="bg-[#4B1E1B] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">Sapphire Health</p>
                  <p className="text-white/60 text-xs">Typically replies within an hour</p>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 rounded-xl p-3 mb-4">
                <p className="text-sm text-gray-700">👋 Hi there! I'm from Sapphire Health.</p>
                <p className="text-sm text-gray-700 mt-1">How can we help with your occupational health or medical support needs?</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#4B1E1B] shadow-lg hover:shadow-xl text-white flex items-center justify-center transition-shadow relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
      </motion.button>
    </div>
  );
}
