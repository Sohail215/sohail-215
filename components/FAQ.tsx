"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in starts from 1:00 PM and check-out is until 11:00 AM.",
  },
  {
    question: "How many guests can stay?",
    answer: "The villa comfortably accommodates up to 8 guests.",
  },
  {
    question: "Is the swimming pool private?",
    answer: "Yes, the swimming pool is completely private and reserved only for your booking.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, free private parking is available inside the property.",
  },
  {
    question: "How can I book the villa?",
    answer: "Simply click the WhatsApp booking button anywhere on the website and send us your booking details.",
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

        <h2 className="text-5xl font-bold text-center mt-4 mb-14">
          Have Questions?
        </h2>

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
