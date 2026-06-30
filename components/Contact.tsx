"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#10284D] to-[#081C3A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-center">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          Let's Plan Your Stay
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-2xl mx-auto mb-16">
          Contact us anytime for bookings, availability,
          pricing or any special requests.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="glass rounded-3xl p-10 border border-yellow-500/20 shadow-2xl">

            <div className="space-y-8">

              <div className="flex items-start gap-5">

                <Phone className="text-yellow-400" size={28} />

                <div>

                  <h3 className="text-xl font-bold">
                    Phone
                  </h3>

                  <a
                    href="tel:+918619985400"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    +91 86199 85400
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <Mail className="text-yellow-400" size={28} />

                <div>

                  <h3 className="text-xl font-bold">
                    Email
                  </h3>

                  <a
                    href="mailto:info@zorielle.com"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    info@zorielle.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <MapPin className="text-yellow-400" size={28} />

                <div>

                  <h3 className="text-xl font-bold">
                    Location
                  </h3>

                  <p className="text-gray-300">
                    Udaipur, Rajasthan, India
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <Clock className="text-yellow-400" size={28} />

                <div>

                  <h3 className="text-xl font-bold">
                    Check In / Check Out
                  </h3>

                  <p className="text-gray-300">
                    Check-In : 1:00 PM
                  </p>

                  <p className="text-gray-300">
                    Check-Out : 11:00 AM
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
            >
              <MessageCircle size={22} />
              Book on WhatsApp
            </a>

          </div>

          <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Udaipur,Rajasthan&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[550px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}