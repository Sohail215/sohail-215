"use client";

import { useEffect, useState } from "react";
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
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(navLinks[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081C3A]/95 backdrop-blur-xl border-b border-yellow-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="/" className="leading-tight">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-yellow-400">
            ZORIELLE
          </h1>

          <p className="text-[10px] md:text-xs uppercase tracking-[4px] text-white/80">
            Villa Udaipur
          </p>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className={`transition-all duration-300 font-medium ${
                active === item.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
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
          className="hidden lg:inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#081C3A] border-t border-yellow-500/20 backdrop-blur-xl">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  active === item.href
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                {item.name}
              </a>

            ))}

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-yellow-500 hover:bg-yellow-400 text-center py-3 rounded-full text-black font-bold transition"
            >
              Book Now
            </a>

            <div className="pt-4 border-t border-white/10 text-center">

              <h3 className="text-yellow-400 font-semibold">
                Zorielle Villa Udaipur
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                Managed by Zorielle Hospitality
              </p>

            </div>

          </div>

        </div>

      )}
    </header>
  );
}