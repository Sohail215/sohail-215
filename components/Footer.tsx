"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#081C3A] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold text-yellow-400">
              ZORIELLE
            </h2>

            <p className="text-gray-300 leading-8 mt-5">
              Experience luxury, comfort and complete privacy
              in our premium pool villa located in Udaipur.
              Perfect for families, couples and group stays.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#about" className="hover:text-yellow-400 transition">
                About
              </Link>

              <Link href="#amenities" className="hover:text-yellow-400 transition">
                Amenities
              </Link>

              <Link href="#rooms" className="hover:text-yellow-400 transition">
                Villa
              </Link>

              <Link href="#gallery" className="hover:text-yellow-400 transition">
                Gallery
              </Link>

              <Link href="#booking" className="hover:text-yellow-400 transition">
                Booking
              </Link>

              <Link href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <a
                href="tel:+918619985400"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <Phone size={18} />
                +91 86199 85400
              </a>

              <a
                href="mailto:info@zorielle.com"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <Mail size={18} />
                info@zorielle.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Udaipur,
                  Rajasthan,
                  India
                </span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10284D] p-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10284D] p-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://wa.me/918619985400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10284D] p-4 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full transition"
            >
              Book Now
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © 2026 Zorielle Luxury Villa. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Managed by Zorielle Hospitality
          </p>

        </div>

      </div>

    </footer>
  );
}