"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <HelpCircle size={16} aria-hidden="true" />
            FAQ
          </span>
          <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="section-description mx-auto">
            Informasi singkat sebelum memilih varian dan menghubungi admin Gingerfit+.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4" data-aos="fade-up">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-[20px] border bg-gingerfit-cream transition duration-300 ${
                  isOpen ? "border-gingerfit-gray shadow-soft" : "border-gingerfit-gray/80 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus:outline-none focus:ring-4 focus:ring-inset focus:ring-gingerfit-green/15 sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold text-gingerfit-black sm:text-lg">{item.question}</span>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={`shrink-0 text-gingerfit-green transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 mb-5 border-t border-black/10 pt-4 text-sm leading-7 text-black/70 sm:mx-6 sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
