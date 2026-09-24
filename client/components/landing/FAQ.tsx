"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import SectionHeading from "../ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-y border-black/5 bg-slate-50/70 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-black/10 overflow-hidden rounded-3xl border border-black/5 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="p-5 sm:p-6">
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left font-semibold"
              >
                <span>{faq.q}</span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <p className="muted mt-3 text-sm leading-6">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}