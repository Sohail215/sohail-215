"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  Phone,
  User,
  Mail,
  Clock3,
  MessageSquare,
} from "lucide-react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [arrivalTime, setArrivalTime] = useState("");
  const [request, setRequest] = useState("");

  const bookVilla = () => {
    if (!name || !phone || !checkIn || !checkOut) {
      alert("Please fill all required details.");
      return;
    }

    const message = `Hello Team Zorielle,

Greetings!

I am interested in booking your Luxury Pool Villa in Udaipur.

━━━━━━━━━━━━━━
BOOKING DETAILS
━━━━━━━━━━━━━━

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email || "Not Provided"}

📅 Check-in: ${checkIn}

📅 Check-out: ${checkOut}

👥 Guests: ${guests}

🕒 Expected Arrival: ${arrivalTime || "Not Provided"}

📝 Special Request:
${request || "None"}

Kindly let me know the availability and booking process.

Thank you.`;

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
      <div className="max-w-5xl mx-auto px-6">

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
              <User className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <select
                value={guests}
                onChange={(e)=>setGuests(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              >
                {[1,2,3,4,5,6,7,8].map((g)=>(
                  <option key={g} value={g}>
                    {g} Guest{g>1?"s":""}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="date"
                value={checkIn}
                onChange={(e)=>setCheckIn(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="date"
                value={checkOut}
                onChange={(e)=>setCheckOut(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative md:col-span-2">
              <Clock3 className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <input
                type="time"
                value={arrivalTime}
                onChange={(e)=>setArrivalTime(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 py-4 outline-none"
              />
            </div>

            <div className="relative md:col-span-2">
              <MessageSquare className="absolute left-4 top-4 text-yellow-400" size={20}/>
              <textarea
                rows={5}
                placeholder="Special Request (Optional)"
                value={request}
                onChange={(e)=>setRequest(e.target.value)}
                className="w-full bg-[#081C3A] border border-white/10 rounded-xl pl-12 pt-4 pb-4 outline-none resize-none"
              />
            </div>

          </div>

          <button
            onClick={bookVilla}
            className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
          >
            Book on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}