"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Villa", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081C3A]/95 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20"
          : "bg-[#081C3A]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-2xl md:text-3xl font-bold tracking-wider text-yellow-400 hover:text-yellow-300 transition"
        >
          ZORIELLE
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-sm lg:text-base hover:text-yellow-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="https://wa.me/918619985400"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 lg:px-7 py-2.5 lg:py-3 rounded-full transition duration-300 hover:scale-105"
        >
          Book Now
          <ChevronRight size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#081C3A] border-t border-yellow-500/20 px-4 sm:px-6 py-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white text-base sm:text-lg hover:text-yellow-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-bold transition"
            >
              Book Now
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}