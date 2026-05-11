// ExitIntentPopup.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 20 && !dismissed) setShow(true);
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  const close = () => { setShow(false); setDismissed(true); };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
          >
            <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 rounded-xl bg-[#4B1E1B]/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-[#4B1E1B] text-center mb-2">
              Before You Go — Is Your Site Medically Covered?
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Many operations in Nigeria run without a compliant MERP or certified medic on site. One incident without coverage can cost far more than a full medical programme.
            </p>
            <div className="space-y-3">
              <Link href="/corporate-inquiry">
                <button
                  onClick={close}
                  className="w-full bg-[#4B1E1B] hover:bg-[#9E3C34] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
                >
                  Get a Free Proposal <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <button onClick={close} className="w-full text-sm text-gray-400 hover:text-gray-600 py-2">
                I'll come back later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
