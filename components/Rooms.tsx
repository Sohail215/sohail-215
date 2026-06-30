"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold text-yellow-500"
        >
          Zorielle
        </Link>

        <nav className="hidden md:flex gap-8 text-white">

          <a href="#about">About</a>

          <a href="#rooms">Rooms</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </nav>

        <a
          href="https://wa.me/918619985400"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}