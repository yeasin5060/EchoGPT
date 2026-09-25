"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Chrome,
  Command,
  Download,
  Flame,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import ExtensionPopup from "@/components/extension/ExtensionPopup";
import ExtensionSettings from "@/components/extension/ExtensionSettings";

export default function ExtensionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50/70 py-8 dark:bg-[#07080c] sm:py-14">
      {/* Background Animated Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/15 via-fuchsia-500/10 to-cyan-400/15 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 bottom-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-x relative">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-violet-500/40 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-white"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Landing Page</span>
          </Link>

          <Link
            href="/chat"
            className="inline-flex items-center gap-1.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-3.5 py-2 text-xs font-bold text-violet-600 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-violet-500 hover:text-white dark:text-violet-300"
          >
            <span>Open Studio</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          {/* Top Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-600 backdrop-blur-md dark:text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            <Chrome size={14} className="text-amber-500" />
            <span>Chrome Web Store Certified • Manifest V3</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            EchoGPT in your{" "}
            <span className="animate-gradient-text inline-block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              browser viewport.
            </span>
          </h1>

          <p className="muted mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
            Invoke frontier AI models on any tab with one keystroke. Summarize documentation, 
            rewrite emails, and query active websites without leaving your workflow.
          </p>

          {/* Quick CTA row */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="btn-primary group relative w-full overflow-hidden px-6 py-3.5 text-sm sm:w-auto"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download size={16} />
              <span>Install for Chrome</span>
              <span className="rounded bg-violet-700/60 px-1.5 py-0.5 text-[10px] font-mono">
                Free
              </span>
            </button>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Compatible with Chrome, Brave & Edge
            </span>
          </div>

          {/* Specs pills row */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Command size={13} className="text-violet-500" />
              ⌘ + K Instant trigger
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-emerald-500" />
              Zero telemetry logs
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap size={14} className="text-amber-500" />
              Under 10MB memory footprint
            </span>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Extension Interactive Popup Display Card */}
          <div className="relative flex flex-col items-center justify-center rounded-[36px] border border-slate-200/80 bg-gradient-to-br from-violet-500/10 via-white/50 to-cyan-400/10 p-6 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-violet-500/10 dark:via-white/[0.02] dark:to-cyan-400/10 sm:p-10">
            {/* Ambient behind glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-[40px] bg-gradient-to-r from-violet-600/20 to-cyan-500/20 opacity-60 blur-xl" />

            <div className="mb-4 flex items-center gap-2 self-start text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white/40">
              <Sparkles size={13} className="text-violet-500" />
              <span>Live Popup Simulator</span>
            </div>

            <ExtensionPopup />
          </div>

          {/* Right Column: Deep Extension Settings & Features */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-600 dark:text-violet-300">
                <span>Customizable Architecture</span>
              </div>

              <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
                Controls tailored for power users.
              </h2>

              <p className="muted mt-2 text-sm leading-relaxed">
                Configure your keybindings, designate preferred frontier engines, and toggle privacy safeguards with immediate persistence.
              </p>
            </div>

            {/* Interactive Settings Component */}
            <ExtensionSettings />
          </div>
        </div>
      </div>
    </main>
  );
}