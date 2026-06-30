"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081C3A]/90 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="/"
          className="text-3xl font-bold tracking-wider text-yellow-400"
        >
          ZORIELLE
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 transition duration-300"
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
          className="hidden lg:inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-7 py-3 rounded-full transition"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#081C3A] border-t border-yellow-500/20 px-6 py-6">

          <div className="flex flex-col gap-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:text-yellow-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-center text-black py-3 rounded-full font-bold mt-3"
            >
              Book Now
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}