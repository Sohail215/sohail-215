"use client";

import { useState } from "react";
import { CalendarDays, Users, Phone, User } from "lucide-react";

export default function BookingForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const bookVilla = () => {

    if (!name || !phone || !checkIn || !checkOut) {
      alert("Please fill all details.");
      return;
    }

    const message = `
Hello Team Zorielle,

Greetings!

I am interested in booking your Luxury Pool Villa in Udaipur.

Booking Details

👤 Name: ${name}

📞 Phone: ${phone}

📅 Check-in Date: ${checkIn}

📅 Check-out Date: ${checkOut}

👥 Number of Guests: ${guests}

Kindly let me know the availability and booking process.

Looking forward to your response.

Thank you.
`;

    window.open(
      `https://wa.me/918619985400?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="booking"
      className="py-24 bg-gradient-to-b from-[#081C3A] to-[#10284D]"
    >

      <div className="max-w-4xl mx-auto px-6">

        <div className="glass rounded-3xl p-10 border border-yellow-500/20 shadow-2xl">

          <p className="uppercase tracking-[8px] text-yellow-400 text-center">
            Reservation
          </p>

          <h2 className="text-5xl font-bold text-center mt-4">
            Book Your Luxury Stay
          </h2>

          <p className="text-center text-gray-300 mt-4 mb-10">
            Reserve the entire villa for your family and friends.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="relative">

              <User className="absolute left-4 top-4 text-yellow-400" size={20} />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none"
              />

            </div>

            <div className="relative">

              <Phone className="absolute left-4 top-4 text-yellow-400" size={20} />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none"
              />

            </div>            <div className="relative">

              <CalendarDays className="absolute left-4 top-4 text-yellow-400" size={20} />

              <input
                type="date"
                value={checkIn}
                onChange={(e)=>setCheckIn(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none"
              />

            </div>

            <div className="relative">

              <CalendarDays className="absolute left-4 top-4 text-yellow-400" size={20} />

              <input
                type="date"
                value={checkOut}
                onChange={(e)=>setCheckOut(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none"
              />

            </div>

            <div className="relative md:col-span-2">

              <Users className="absolute left-4 top-4 text-yellow-400" size={20} />

              <select
                value={guests}
                onChange={(e)=>setGuests(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
              </select>

            </div>

          </div>

          <button
            onClick={bookVilla}
            className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition duration-300"
          >
            Book on WhatsApp
          </button>

        </div>

      </div>

    </section>
  );
}
