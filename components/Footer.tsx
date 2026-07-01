"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06152d] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-bold text-yellow-400">
              ZORIELLE
            </h2>

            <p className="text-gray-300 mt-6 leading-8">
              Luxury Private Pool Villa in Greater Kailash,
              Udaipur. Experience elegance, privacy and
              unforgettable stays with Zorielle Hospitality.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#about">About</Link>
              <Link href="#amenities">Amenities</Link>
              <Link href="#rooms">Villa</Link>
              <Link href="#gallery">Gallery</Link>
              <Link href="#contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+918619985400"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <Phone size={20}/>
                +91 86199 85400
              </a>

              <a
                href="mailto:info@zorielle.com"
                className="flex items-center gap-3 hover:text-yellow-400 transition"
              >
                <Mail size={20}/>
                info@zorielle.com
              </a>

              <div className="flex items-start gap-3">

                <MapPin size={20}/>

                <span>
                  Greater Kailash,
                  Udaipur,
                  Rajasthan 313011
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-[#10284D] hover:bg-yellow-500 hover:text-black p-4 rounded-full transition"
              >
               <FaInstagram size={22}/>
              </a>

              <a
                href="#"
                className="bg-[#10284D] hover:bg-yellow-500 hover:text-black p-4 rounded-full transition"
              >
                <FaFacebookF size={22}/>
              </a>

            </div>

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-bold transition"
            >
              Book Now
              <ArrowUpRight size={18}/>
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2026 Zorielle Hospitality. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with ❤️ for Luxury Experiences
          </p>

        </div>

      </div>

    </footer>
  );
}