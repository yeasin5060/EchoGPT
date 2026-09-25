"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Compass,
  FileText,
  Languages,
  Lightbulb,
  PenLine,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";

interface PromptItem {
  text: string;
  subtext: string;
  icon: typeof FileText;
  tag: string;
  gradient: string;
  color: string;
}

const promptPool: PromptItem[][] = [
  // Set 1: General Productivity
  [
    {
      text: "Summarize this document",
      subtext: "Extract key takeaways & decisions",
      icon: FileText,
      tag: "Analysis",
      gradient: "from-cyan-500/15 to-blue-500/10",
      color: "text-cyan-500",
    },
    {
      text: "Brainstorm product ideas",
      subtext: "Generate 5 disruptive SaaS concepts",
      icon: Lightbulb,
      tag: "Ideation",
      gradient: "from-amber-500/15 to-orange-500/10",
      color: "text-amber-500",
    },
    {
      text: "Improve & polish writing",
      subtext: "Elevate tone, clarity and impact",
      icon: PenLine,
      tag: "Writing",
      gradient: "from-violet-500/15 to-fuchsia-500/10",
      color: "text-violet-500",
    },
    {
      text: "Translate & localize text",
      subtext: "Native idiom & cultural context",
      icon: Languages,
      tag: "Language",
      gradient: "from-emerald-500/15 to-teal-500/10",
      color: "text-emerald-500",
    },
  ],
  // Set 2: Coding & Architecture
  [
    {
      text: "Refactor React component",
      subtext: "Extract hooks & eliminate re-renders",
      icon: Code2,
      tag: "Engineering",
      gradient: "from-blue-500/15 to-indigo-500/10",
      color: "text-blue-500",
    },
    {
      text: "Explain complex algorithm",
      subtext: "Break down Big-O with visual examples",
      icon: Compass,
      tag: "Learning",
      gradient: "from-purple-500/15 to-pink-500/10",
      color: "text-purple-500",
    },
    {
      text: "Design PostgreSQL schema",
      subtext: "Tables, foreign keys and indexes",
      icon: Sparkles,
      tag: "Database",
      gradient: "from-emerald-500/15 to-cyan-500/10",
      color: "text-emerald-500",
    },
    {
      text: "Audit API security flow",
      subtext: "Rate-limiting, JWT and CSRF guard",
      icon: Search,
      tag: "Security",
      gradient: "from-rose-500/15 to-orange-500/10",
      color: "text-rose-500",
    },
  ],
];

interface SuggestedPromptsProps {
  onPick: (value: string) => void;
}

export default function SuggestedPrompts({ onPick }: SuggestedPromptsProps) {
  const [setIndex, setSetIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const rotatePrompts = () => {
    setIsRotating(true);
    setTimeout(() => {
      setSetIndex((prev) => (prev + 1) % promptPool.length);
      setIsRotating(false);
    }, 250);
  };

  const activePrompts = promptPool[setIndex];

  return (
    <div className="space-y-2">
      {/* Mini Bar Header: Title & Shuffle Rotate Button */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40">
          <Sparkles size={12} className="text-violet-500" />
          <span>Quick prompt templates</span>
        </div>

        <button
          type="button"
          onClick={rotatePrompts}
          className="group flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          title="Shuffle prompt ideas"
        >
          <RefreshCw
            size={11}
            className={`transition-transform duration-500 ${
              isRotating ? "rotate-180" : "group-hover:rotate-45"
            }`}
          />
          <span>Shuffle</span>
        </button>
      </div>

      {/* Prompts Cards Grid with Hover Motion & Glow */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {activePrompts.map(({ text, subtext, icon: Icon, tag, gradient, color }, idx) => (
          <button
            key={text}
            type="button"
            onClick={() => onPick(text)}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-3.5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white hover:shadow-lg hover:shadow-violet-500/10 active:scale-[0.98] dark:border-white/10 dark:bg-[#0f1016]/80 dark:hover:border-violet-400/50 dark:hover:bg-white/[0.05] ${
              isRotating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Ambient Background Hover Glow */}
            <div
              className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            {/* Top Row: Icon Container & Category Tag */}
            <div className="flex items-center justify-between">
              <div
                className={`grid h-7 w-7 place-items-center rounded-xl bg-slate-100 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-white/10 ${color}`}
              >
                <Icon size={15} />
              </div>

              <div className="flex items-center gap-1">
                <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                  {tag}
                </span>
                <ArrowUpRight
                  size={12}
                  className="text-slate-400 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-violet-500"
                />
              </div>
            </div>

            {/* Bottom Row: Text & Subtext */}
            <div className="mt-2.5">
              <span className="block text-xs font-bold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300">
                {text}
              </span>
              <p className="mt-0.5 text-[10px] text-slate-400 dark:text-white/40 line-clamp-1">
                {subtext}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}