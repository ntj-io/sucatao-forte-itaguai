"use client"

import { SiWhatsapp } from "react-icons/si"

export function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/5521998453447", "_blank")}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:cursor-pointer"
      style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)" }}
      aria-label="WhatsApp"
    >
      <SiWhatsapp size={28} className="text-white" />
    </button>
  )
}
