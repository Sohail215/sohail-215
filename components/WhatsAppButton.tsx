"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918619985400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:scale-110 transition-all duration-300 p-4 rounded-full shadow-2xl"
    >
      <FaWhatsapp className="text-white" size={32} />
    </a>
  );
}