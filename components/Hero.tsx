"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081C3A]/90 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="/"
          className="text-3xl font-bold tracking-wide text-yellow-400"
        >
          ZORIELLE
        </a>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-10 text-white">

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#amenities" className="hover:text-yellow-400 transition">
            Amenities
          </a>

          <a href="#rooms" className="hover:text-yellow-400 transition">
            Villa
          </a>

          <a href="#gallery" className="hover:text-yellow-400 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </nav>

        {/* Button */}

        <a
          href="https://wa.me/918619985400"
          target="_blank"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-7 py-3 rounded-full transition"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}