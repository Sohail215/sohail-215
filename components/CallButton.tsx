"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+918619985400"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Call Now"
    >
      <Phone size={26} className="text-white" />
    </a>
  );
}