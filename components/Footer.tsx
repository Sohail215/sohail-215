"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#081C3A] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              ZORIELLE
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Luxury Private Pool Villa in Udaipur.
              Experience premium comfort,
              privacy and unforgettable stays.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#about">About</Link>

              <Link href="#rooms">Entire Villa</Link>

              <Link href="#gallery">Gallery</Link>

              <Link href="#contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex gap-3">
                <Phone size={18}/>
                <span>+91 86199 85400</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18}/>
                <span>info@zorielle.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18}/>
                <span>Udaipur, Rajasthan</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-[#10284D] p-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram size={20} />
                </a>
                 <FaFacebookF size={20} />
              

              <a
                href="#"
                className="bg-[#10284D] p-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
              
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-400">

          © 2026 Zorielle Luxury Villa. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}