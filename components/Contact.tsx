"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#10284D] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Card */}

          <div className="bg-[#081C3A] rounded-3xl border border-yellow-500/20 p-10">

            <div className="space-y-8">

              <div className="flex items-start gap-5">

                <Phone className="text-yellow-400" size={30} />

                <div>
                  <h3 className="text-xl font-bold">
                    Call Us
                  </h3>

                  <p className="text-gray-300">
                    +91 86199 85400
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <Mail className="text-yellow-400" size={30} />

                <div>
                  <h3 className="text-xl font-bold">
                    Email
                  </h3>

                  <p className="text-gray-300">
                    info@zorielle.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <MapPin className="text-yellow-400" size={30} />

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

                <Clock className="text-yellow-400" size={30} />

                <div>
                  <h3 className="text-xl font-bold">
                    Check-in / Check-out
                  </h3>

                  <p className="text-gray-300">
                    Check-in : 1:00 PM
                  </p>

                  <p className="text-gray-300">
                    Check-out : 11:00 AM
                  </p>
                </div>

              </div>

            </div>

            <a
              href="https://wa.me/918619985400"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-10 text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-full transition"
            >
              WhatsApp Now
            </a>

          </div>

          {/* Google Map */}

          <div className="rounded-3xl overflow-hidden border border-yellow-500/20">

            <iframe
              src="https://www.google.com/maps?q=Udaipur,Rajasthan&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[500px]"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}