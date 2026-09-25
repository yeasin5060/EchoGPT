"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Chrome,
  Command,
  Cpu,
  Layers,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-32 sm:pt-40">
      {/* Background Animated Glows & Mesh Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/20 to-cyan-400/25 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-10 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />

      {/* Decorative Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-x relative">
        {/* Top Badge with Shimmer & Pulse */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-violet-500/50 dark:text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
          </span>
          <Sparkles size={14} className="text-violet-500 animate-spin-slow" />
          <span>Next-Gen AI Workspace</span>
          <span className="h-3 w-px bg-violet-500/30" />
          <span className="text-[11px] font-normal opacity-80">GPT-4o, Claude 3.5, Gemini 1.5</span>
        </div>

        {/* Hero Main Headline with Dynamic Gradient */}
        <h1 className="mx-auto max-w-5xl text-center text-5xl font-black tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
          Think faster with{" "}
          <span className="animate-gradient-text inline-block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            every AI model.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="muted mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed sm:text-xl">
          EchoGPT unifies cutting-edge frontier models, persistent conversation history, 
          and workflow shortcuts into one lightning-fast, distraction-free environment.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/chat"
            className="group btn-primary relative w-full overflow-hidden px-7 py-3.5 text-base sm:w-auto"
          >
            {/* Hover shine effect */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <WandSparkles size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            <span>Try EchoGPT Free</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/extension"
            className="btn-secondary w-full px-6 py-3.5 text-base sm:w-auto"
          >
            <Chrome size={18} className="text-violet-500" />
            <span>Add Chrome Extension</span>
          </Link>
        </div>

        {/* Feature Badges Row */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 size={14} className="text-emerald-500" />
            No API key required
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Command size={13} className="text-violet-500" />
            Command palette shortcuts
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Zap size={14} className="text-amber-500" />
            Sub-second latency
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Layers size={14} className="text-cyan-500" />
            Parallel model compare
          </span>
        </div>

        {/* Interactive Floating Preview Card in Hero */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Ambient back glow behind the preview card */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-cyan-500/30 opacity-70 blur-xl" />

          {/* Floating Pill - Top Left */}
          <div className="animate-float absolute -left-4 -top-6 z-20 hidden items-center gap-2 rounded-2xl border border-white/20 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur-xl sm:flex dark:border-white/10 dark:bg-black/60 dark:text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
              <Zap size={14} />
            </div>
            <span>Fast Multi-Model Router</span>
          </div>

          {/* Floating Pill - Bottom Right */}
          <div className="animate-float-slow absolute -bottom-5 -right-4 z-20 hidden items-center gap-2 rounded-2xl border border-white/20 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur-xl sm:flex dark:border-white/10 dark:bg-black/60 dark:text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/15 text-violet-500">
              <Cpu size={14} />
            </div>
            <span>GPT-4o & Claude 3.5 Sonnet</span>
          </div>

          {/* Window Mockup Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition duration-500 hover:shadow-violet-500/10 dark:border-white/10 dark:bg-[#0c0d12]">
            {/* Window title bar */}
            <div className="flex h-11 items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 dark:border-white/[0.07] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-medium text-slate-400 dark:text-white/40">echogpt.app/chat</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-white/40">
                <span className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>
            </div>

            {/* Mock Chat Area inside hero preview */}
            <div className="p-6 sm:p-8">
              <div className="space-y-4">
                {/* User Prompt */}
                <div className="flex justify-end">
                  <div className="max-w-md rounded-2xl rounded-tr-sm bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-xs leading-relaxed text-white shadow-md sm:text-sm">
                    Compare the trade-offs between Claude 3.5 Sonnet and GPT-4o for complex UI architecture.
                  </div>
                </div>

                {/* AI Response Card */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-md shadow-violet-500/20">
                    <Bot size={16} />
                  </div>

                  <div className="flex-1 rounded-2xl rounded-tl-sm border border-slate-200/60 bg-slate-50/70 p-4 text-xs leading-relaxed text-slate-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 sm:text-sm">
                    <div className="mb-2 flex items-center justify-between border-b border-slate-200/50 pb-2 text-[11px] text-slate-500 dark:border-white/5 dark:text-white/40">
                      <span className="font-semibold text-violet-600 dark:text-violet-400">EchoGPT Dual-Engine</span>
                      <span>0.42s latency</span>
                    </div>
                    <p className="mb-2">
                      <strong className="text-violet-600 dark:text-violet-300">Claude 3.5 Sonnet</strong> excels at precise artifact-level UI code reasoning and semantic design tokens, while <strong className="text-cyan-600 dark:text-cyan-300">GPT-4o</strong> offers rapid state lifecycle orchestration and native multimodal tooling.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-violet-500/10 px-2 py-1 text-[11px] font-medium text-violet-600 dark:text-violet-300">
                        ⚡ Artifacts Ready
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-600 dark:text-cyan-300">
                        ✨ 2 Variations Generated
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input simulator */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-white/40">
                  <Sparkles size={15} className="text-violet-500" />
                  <span>Ask anything across any model... (Press ⌘K)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-white/60">
                    Enter ↵
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}