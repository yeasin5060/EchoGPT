"use client";

import {
  ArrowRight,
  Command,
  History,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { features } from "@/data/features";
import SectionHeading from "../ui/SectionHeading";

const featureMeta: Record<
  string,
  {
    icon: typeof Layers;
    gradient: string;
    borderGlow: string;
    badge: string;
    previewTag: string;
  }
> = {
  Layers: {
    icon: Layers,
    gradient: "from-violet-500 to-indigo-500",
    borderGlow: "group-hover:border-violet-500/40",
    badge: "Multi-Engine",
    previewTag: "Switch GPT-4o, Claude & Gemini instantly",
  },
  Zap: {
    icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    borderGlow: "group-hover:border-amber-500/40",
    badge: "< 400ms",
    previewTag: "Streamed responses & edge caching",
  },
  History: {
    icon: History,
    gradient: "from-cyan-400 to-blue-500",
    borderGlow: "group-hover:border-cyan-500/40",
    badge: "Auto-sync",
    previewTag: "Context retained across active threads",
  },
  Command: {
    icon: Command,
    gradient: "from-fuchsia-500 to-pink-500",
    borderGlow: "group-hover:border-fuchsia-500/40",
    badge: "⌘K Palette",
    previewTag: "One-click prompt templates & macros",
  },
  ShieldCheck: {
    icon: ShieldCheck,
    gradient: "from-emerald-400 to-teal-500",
    borderGlow: "group-hover:border-emerald-500/40",
    badge: "End-to-End",
    previewTag: "Zero telemetry on proprietary data",
  },
  Sparkles: {
    icon: Sparkles,
    gradient: "from-violet-400 to-cyan-400",
    borderGlow: "group-hover:border-violet-400/40",
    badge: "Adaptive UI",
    previewTag: "Fluid glassmorphism & keyboard ergonomics",
  },
};

export default function Features() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = ["All", "Core Engine", "Productivity", "Security"];

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Radial Accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px] dark:bg-violet-600/10" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="ENGINEERED FOR WORKFLOW"
          title="Everything you need, without the clutter."
          text="A modular interface designed around the way ambitious teams and power users actually communicate with AI."
        />

        {/* Interactive Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                activeFilter === tab
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/25 scale-105"
                  : "border border-slate-200 bg-white/60 text-slate-600 hover:border-violet-400/50 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Features Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const meta = featureMeta[feature.icon] || featureMeta["Sparkles"];
            const Icon = meta.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-[#0c0d13]/70 ${meta.borderGlow}`}
              >
                {/* Subtle top spotlight on hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br from-violet-500/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

                {/* Top Row: Icon with Gradient Glow & Meta Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`relative grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br ${meta.gradient} text-white shadow-lg shadow-violet-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={24} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:group-hover:text-violet-300">
                    {meta.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {feature.title}
                </h3>

                <p className="muted mt-3 text-sm leading-relaxed">
                  {feature.text}
                </p>

                {/* Micro Preview Tag on Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400 transition-colors duration-300 dark:border-white/5 dark:text-white/40">
                  <span className="truncate pr-2 font-medium">
                    {meta.previewTag}
                  </span>
                  <ArrowRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout Banner inside Features */}
        <div className="mt-14 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 p-6 backdrop-blur-md dark:border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/25">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Want to test model latency side-by-side?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Launch the playground and inspect token streaming in real-time.
                </p>
              </div>
            </div>

            <a
              href="/chat"
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>Open Model Playground</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}