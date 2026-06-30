"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const bookVilla = () => {
    const message = `
🏡 *Zorielle Luxury Villa Booking*

👤 Name: ${name}

📞 Phone: ${phone}

📅 Check-in: ${checkIn}

📅 Check-out: ${checkOut}

👨 Guests: ${guests}

🏡 Booking Type: Entire Luxury Villa

💰 Weekdays ₹11,999
💰 Weekends ₹15,999

I would like to book the Entire Villa.
`;

    const url = `https://wa.me/918619985400?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="booking"
      className="bg-[#10284D] py-24"
    >
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-[#081C3A] rounded-3xl p-10 border border-yellow-500">

          <h2 className="text-4xl font-bold text-center mb-10">
            Book Entire Villa
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#10284D] border border-gray-700 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#10284D] border border-gray-700 outline-none"
            />

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#10284D] border border-gray-700 outline-none"
            />

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#10284D] border border-gray-700 outline-none"
            />

            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#10284D] border border-gray-700 outline-none"
            >
              <option value="">Select Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>

            <button
              onClick={bookVilla}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
            >
              Book on WhatsApp
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}