"use client";

import { CalendarDays, Users, MessageCircle } from "lucide-react";

export default function BookingBar() {
  return (
    <section className="bg-gradient-to-r from-[#D4AF37] via-[#E6C15A] to-[#D4AF37] py-8 shadow-2xl">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[5px] text-black font-bold">
                Limited Time Offer
              </p>

              <h2 className="text-4xl font-bold text-[#081C3A] mt-2">
                Book Your Luxury Stay
              </h2>

              <p className="text-[#081C3A] mt-3">
                Private Pool • 3 Bedrooms • Mountain View
              </p>

            </div>

            {/* Check In */}

            <div className="bg-white rounded-2xl p-5 flex items-center gap-4">

              <CalendarDays
                className="text-yellow-600"
                size={32}
              />

              <div>

                <p className="text-gray-500 text-sm">
                  Check In
                </p>

                <h3 className="font-bold text-black">
                  Flexible
                </h3>

              </div>

            </div>

            {/* Guests */}

            <div className="bg-white rounded-2xl p-5 flex items-center gap-4">

              <Users
                className="text-yellow-600"
                size={32}
              />

              <div>

                <p className="text-gray-500 text-sm">
                  Guests
                </p>

                <h3 className="font-bold text-black">
                  1 – 8 Guests
                </h3>

              </div>

            </div>

            {/* Button */}

            <div className="flex justify-center lg:justify-end">

              <a
                href="https://wa.me/918619985400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#081C3A] hover:bg-black text-white px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={22} />

                Book on WhatsApp

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}