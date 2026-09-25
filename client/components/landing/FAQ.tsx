"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircleQuestion,
  Plus,
  Sparkles,
} from "lucide-react";
import { faqs } from "@/data/faq";
import SectionHeading from "../ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 sm:py-32 border-y border-slate-200/80 bg-slate-50/50 dark:border-white/5 dark:bg-[#090a0f]/60"
    >
      {/* Background Ambient Radial Accents */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute right-12 bottom-12 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions, answered clearly."
          text="Everything you need to know about models, extensions, workflows, and account security."
        />

        {/* Accordion List Container */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-violet-500/50 bg-white shadow-xl shadow-violet-500/5 ring-1 ring-violet-500/20 dark:border-violet-500/40 dark:bg-white/[0.04]"
                    : "border-slate-200/90 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.03]"
                }`}
              >
                {/* Question Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-violet-600 text-white shadow-md shadow-violet-500/30 scale-105"
                          : "border border-slate-200 bg-slate-100/80 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 group-hover:border-violet-400/50 group-hover:text-violet-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen
                          ? "text-violet-600 dark:text-violet-300"
                          : "text-slate-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300"
                        : "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-6 pt-3 sm:px-6 dark:border-white/5">
                      <p className="muted text-sm leading-relaxed">
                        {faq.a}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-[11px] font-semibold text-violet-600 dark:text-violet-300">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need more help support callout */}
        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-sm sm:flex-row sm:text-left dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <MessageCircleQuestion size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Have another question in mind?
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Reach out to our team or test models in our interactive chat.
              </p>
            </div>
          </div>

          <a
            href="/chat"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-500"
          >
            <Sparkles size={13} />
            <span>Ask in EchoGPT</span>
          </a>
        </div>
      </div>
    </section>
  );
}