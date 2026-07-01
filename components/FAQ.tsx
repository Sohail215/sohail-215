"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the check-in and check-out timings?",
    answer:
      "Check-in starts from 1:00 PM and check-out is before 11:00 AM.",
  },
  {
    question: "How many guests can stay at Zorielle Villa Udaipur?",
    answer:
      "Zorielle Villa Udaipur comfortably accommodates up to 8 guests, making it ideal for families, friends, and small groups.",
  },
  {
    question: "Is the swimming pool private?",
    answer:
      "Yes. The swimming pool is completely private and exclusively reserved for your booking.",
  },
  {
    question: "Is free parking available?",
    answer:
      "Yes, complimentary private parking is available inside the property for our guests.",
  },
  {
    question: "How can I book Zorielle Villa Udaipur?",
    answer:
      "Simply click any WhatsApp 'Book Now' button on the website, share your travel details, and our team will assist you with availability and booking confirmation.",
  },
  {
    question: "Are meals provided at the villa?",
    answer:
      "Meals can be arranged on request. Guests can also use the fully equipped kitchen or order food from nearby restaurants.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Yes, complimentary high-speed Wi-Fi is available throughout the villa.",
  },
  {
    question: "Is the villa suitable for families?",
    answer:
      "Absolutely. Zorielle Villa Udaipur is family-friendly and perfect for vacations, celebrations, weekend getaways, and relaxing holidays.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#10284D] py-24">

      <div className="max-w-4xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Frequently Asked Questions
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Everything You Need to Know
        </h2>

        <p className="text-center text-gray-300 mt-5 mb-14">
          Find answers to the most common questions about your stay at
          <span className="text-yellow-400 font-semibold">
            {" "}Zorielle Villa Udaipur
          </span>.
        </p>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-300 leading-7">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}