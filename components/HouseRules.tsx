"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Waves,
  Home,
  ClipboardCheck,
} from "lucide-react";

const sections = [
  {
    title: "General Rules",
    icon: <Home size={34} />,
    rules: [
      "Check-in: 1:00 PM onwards.",
      "Check-out: Before 11:00 AM.",
      "Maximum 8 Guests Allowed.",
      "Government-Issued Photo ID is Mandatory for All Adult Guests at Check-in.",
      "Visitors who are not part of the original booking are not allowed without prior approval from the management.",
      "Please Respect Neighbours and Maintain a Peaceful Environment.",
    ],
  },

  {
    title: "Pool & Smoking Rules",
    icon: <Waves size={34} />,
    rules: [
      "Private Pool – Use at Your Own Risk.",
      "Swimming Pool Timings: 7:00 AM to 10:00 PM.",
      "Children Must Be Supervised at All Times Near the Swimming Pool.",
      "Smoking is permitted only in designated smoking areas. Guests are requested to use the ashtray provided and dispose of cigarette butts responsibly.",
      "Outside Food & Beverages are Allowed.",
      "Loud Music, DJ, or High Noise Levels Are Not Allowed After 10:00 PM.",
    ],
  },

  {
    title: "Property Protection",
    icon: <ShieldCheck size={34} />,
    rules: [
      "Guests are responsible for any loss or damage caused to the villa, furniture, fixtures, appliances, pool equipment, décor, or any other property during their stay.",
      "Repair, replacement, or deep cleaning charges resulting from damage, negligence, smoking stains, food stains, or misuse of the property will be payable by the guest before check-out.",
      "Any stains or damage to bedsheets, towels, mattresses, sofas, curtains, cushions, or other furnishings may incur additional cleaning or replacement charges.",
      "Please inform the management immediately in case of any accidental damage.",
      "Please switch off lights, air conditioners, fans, and electrical appliances when leaving the villa.",
      "Please keep the villa clean and hand over the property in a reasonable condition at the time of check-out.",
    ],
  },

  {
    title: "Safety & Booking Policy",
    icon: <ClipboardCheck size={34} />,
    rules: [
      "Illegal activities, drug use, gambling, possession of prohibited substances, or any unlawful behaviour are strictly prohibited.",
      "Pets are not allowed unless prior approval has been obtained from the management.",
      "The management reserves the right to refuse check-in or terminate the stay without refund if any house rules are violated.",
      "Guests are requested to follow all safety instructions provided by the management during their stay.",
    ],
  },
];

export default function HouseRules() {
  return (
    <section className="bg-[#10284D] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-400 text-center">
          Guest Information
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          House Rules
        </h2>

        <p className="text-center text-gray-300 mt-5 max-w-3xl mx-auto">
          To ensure a safe, comfortable and enjoyable experience for every
          guest, please read and follow our house rules during your stay.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {sections.map((section, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400 transition"
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="text-yellow-400">
                  {section.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {section.title}
                </h3>

              </div>

              <ul className="space-y-4">

                {section.rules.map((rule, i) => (

                  <li
                    key={i}
                    className="flex gap-3 text-gray-300 leading-7"
                  >
                    <span className="text-yellow-400 mt-1">✔</span>

                    <span>{rule}</span>

                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
