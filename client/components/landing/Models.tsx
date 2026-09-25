"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Flame,
  Gauge,
  Sparkles,
  Zap,
} from "lucide-react";
import { models } from "@/data/models";
import SectionHeading from "../ui/SectionHeading";

const modelDetails: Record<
  string,
  {
    contextWindow: string;
    latency: string;
    specialty: string;
    benchmark: string;
    description: string;
  }
> = {
  "EchoGPT Pro": {
    contextWindow: "128k tokens",
    latency: "320ms",
    specialty: "Unified multi-turn tasks & synthesis",
    benchmark: "Optimal general intelligence",
    description:
      "Our proprietary meta-orchestrator automatically routes prompts to optimal specialized models dynamically.",
  },
  "GPT-4o": {
    contextWindow: "128k tokens",
    latency: "380ms",
    specialty: "Complex reasoning & code generation",
    benchmark: "90.2% MMLU score",
    description:
      "OpenAI's premier omni-model excels at rigorous algorithmic logic, math, and system design questions.",
  },
  Claude: {
    contextWindow: "200k tokens",
    latency: "410ms",
    specialty: "Nuanced prose & full-code artifacts",
    benchmark: "Highest HumanEval score",
    description:
      "Anthropic's flagship model offers unmatched code precision, structured writing, and massive context digestion.",
  },
  Gemini: {
    contextWindow: "1M tokens",
    latency: "350ms",
    specialty: "Deep research & multi-document parsing",
    benchmark: "Industry-leading context scale",
    description:
      "Google's frontier model excels at ingesting books, video timestamps, and deep multi-source research tasks.",
  },
  Llama: {
    contextWindow: "128k tokens",
    latency: "280ms",
    specialty: "Private, open-weight fast inference",
    benchmark: "Top open-source benchmark",
    description:
      "Meta's open-weights champion engineered for maximum data sovereignty, fast inference, and local customizability.",
  },
};

export default function Models() {
  const [selectedModel, setSelectedModel] = useState<string>("EchoGPT Pro");

  const activeModelObj =
    models.find((m) => m.name === selectedModel) || models[0];
  const activeDetail =
    modelDetails[selectedModel] || modelDetails["EchoGPT Pro"];

  return (
    <section
      id="models"
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/60 py-24 sm:py-32 dark:border-white/5 dark:bg-[#08090e]"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="YOUR MODEL STACK"
          title="Choose the right intelligence for every task."
          text="Keep model switching close to the prompt so your flow stays uninterrupted and laser-focused on the work."
        />

        {/* Interactive Model Selection Cards Grid */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {models.map((model) => {
            const isSelected = selectedModel === model.name;

            return (
              <div
                key={model.name}
                onClick={() => setSelectedModel(model.name)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                  isSelected
                    ? "border-violet-500 bg-white shadow-xl shadow-violet-500/15 ring-2 ring-violet-500/30 -translate-y-1.5 dark:border-violet-400 dark:bg-white/[0.07]"
                    : "border-slate-200/90 bg-white/70 hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
                }`}
              >
                {/* Active indicator dot */}
                {isSelected && (
                  <span className="absolute right-3.5 top-3.5 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                  </span>
                )}

                {/* Model Icon with gradient */}
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${model.color} font-black text-white shadow-md shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-base">{model.icon}</span>
                </div>

                <div className="mt-4">
                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isSelected
                        ? "text-violet-600 dark:text-violet-300"
                        : "text-slate-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300"
                    }`}
                  >
                    {model.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {model.label}
                  </p>
                </div>

                {/* Latency micro pill */}
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 dark:text-white/40">
                  <Zap size={11} className="text-amber-500" />
                  <span>{modelDetails[model.name]?.latency || "300ms"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Model Showcase Banner */}
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-[#0e0f17]/90">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Left Column: Model Details */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${activeModelObj.color} text-white font-bold shadow-md`}
                >
                  {activeModelObj.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-slate-900 dark:text-white">
                      {activeModelObj.name}
                    </h4>
                    <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-bold text-violet-600 dark:text-violet-300">
                      {activeModelObj.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Engineered for {activeDetail.specialty.toLowerCase()}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {activeDetail.description}
              </p>

              {/* Specs & Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-white/40">
                    <Gauge size={13} className="text-cyan-500" />
                    <span>Response Latency</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                    {activeDetail.latency}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-white/40">
                    <Cpu size={13} className="text-violet-500" />
                    <span>Context Window</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                    {activeDetail.contextWindow}
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-white/40">
                    <Sparkles size={13} className="text-amber-500" />
                    <span>Benchmark Lead</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white truncate">
                    {activeDetail.benchmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Action Box */}
            <div className="flex flex-col justify-center rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-6 text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Live Demonstration
              </span>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Test <strong>{activeModelObj.name}</strong> directly in our live workspace without configuration.
              </p>

              <Link
                href="/chat"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:bg-violet-500"
              >
                <span>Launch with {activeModelObj.name}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}