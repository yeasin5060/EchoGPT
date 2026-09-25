"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Bot,
  Check,
  CheckCircle2,
  Copy,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Paperclip,
  Plus,
  RefreshCw,
  Settings,
  Sidebar,
  Sparkles,
  Zap,
} from "lucide-react";

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"chat" | "artifacts" | "split">(
    "chat"
  );
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const sampleChats = [
    {
      title: "Landing page concept",
      tag: "UI Architecture",
      prompt:
        "Help me architect a high-converting, keyboard-first landing page for an AI productivity tool.",
      response:
        "Focus on immediate utility: place a functional interactive preview in the hero, showcase model latency benchmarks, and eliminate cognitive clutter with seamless keyboard accelerators.",
      codeSnippet: `// EchoGPT Command Palette Router
export const routePrompt = async (query: string, model: ModelId) => {
  return await dispatchFrontierEngine({
    stream: true,
    telemetry: false,
    preferredLatency: "sub-400ms"
  });
};`,
    },
    {
      title: "React performance tips",
      tag: "Optimization",
      prompt:
        "How can I eliminate re-renders in a streaming LLM markdown token response stream?",
      response:
        "Use selective chunk buffer state decoupling: isolate token parsing inside a dedicated RAF canvas or unbuffered leaf node to keep your main workspace component tree dormant.",
      codeSnippet: `// Token Buffer Streamer
const useTokenStream = (streamId: string) => {
  const bufferRef = useRef("");
  return useSyncExternalStore(subscribe, () => bufferRef.current);
};`,
    },
    {
      title: "Model benchmarking",
      tag: "Dual-Engine",
      prompt:
        "Compare Claude 3.5 Sonnet vs GPT-4o on large-scale refactoring tasks.",
      response:
        "Claude 3.5 maintains superior architectural consistency across 200k tokens of codebase context, while GPT-4o renders instant one-shot script patches with lower token overhead.",
      codeSnippet: `const comparison = await dualExecute({
  prompt: refactorQuery,
  engines: ["claude-3.5-sonnet", "gpt-4o"]
});`,
    },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentChat = sampleChats[selectedPrompt];

  return (
    <section id="preview" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-violet-600/10 blur-[140px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Column: Descriptions & Interactive Feature Highlights */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">
              <Sparkles size={13} className="text-violet-500" />
              <span>Interactive Product Preview</span>
            </div>

            <h2 className="section-title">
              A chat interface that stays entirely out of your way.
            </h2>

            <p className="muted text-base leading-relaxed">
              Conversation threads, instantaneous model switching, and code
              artifacts stay cleanly positioned where you expect them. No
              confusing multi-level menus or distracting side banners.
            </p>

            {/* Interactive Chat Scenario Selector */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Switch Live Scenarios:
              </p>
              <div className="flex flex-col gap-2">
                {sampleChats.map((chat, idx) => (
                  <button
                    key={chat.title}
                    onClick={() => setSelectedPrompt(idx)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-xs transition-all duration-300 ${
                      selectedPrompt === idx
                        ? "border-violet-500 bg-violet-500/10 text-violet-700 shadow-sm dark:border-violet-400/50 dark:bg-violet-500/15 dark:text-white"
                        : "border-slate-200/80 bg-white/60 text-slate-600 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="font-semibold">{chat.title}</span>
                    <span className="rounded-md bg-slate-200/60 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300">
                      {chat.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <Link href="/chat" className="btn-primary">
                <span>Open Redesigned App</span>
                <ArrowRight size={15} />
              </Link>

              <Link href="/extension" className="btn-secondary">
                <span>View Extension</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Fidelity Animated Workspace Window Mockup */}
          <div className="relative">
            {/* Ambient Behind Glow */}
            <div className="pointer-events-none absolute -inset-2 rounded-[36px] bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-cyan-500/30 opacity-70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0d0e14]">
              {/* Window Header Bar */}
              <div className="flex h-12 items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="ml-2 text-xs font-semibold text-slate-600 dark:text-white/60">
                    EchoGPT Studio v2.4
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="hidden sm:flex items-center gap-1 rounded-lg bg-slate-200/60 p-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/10 dark:text-white/70">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activeTab === "chat"
                        ? "bg-white font-bold text-violet-600 shadow-sm dark:bg-white/15 dark:text-white"
                        : "hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Chat View
                  </button>
                  <button
                    onClick={() => setActiveTab("artifacts")}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activeTab === "artifacts"
                        ? "bg-white font-bold text-violet-600 shadow-sm dark:bg-white/15 dark:text-white"
                        : "hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Code & Artifacts
                  </button>
                </div>

                <div className="flex items-center gap-2 text-slate-400 dark:text-white/40">
                  <span className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                  <Sidebar size={15} />
                </div>
              </div>

              {/* Workspace Inner Grid */}
              <div className="grid min-h-[460px] grid-cols-[180px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-slate-100 bg-slate-50/50 p-3 sm:flex sm:flex-col justify-between dark:border-white/10 dark:bg-white/[0.01]">
                  <div>
                    <button className="flex w-full items-center justify-between rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-500">
                      <span className="flex items-center gap-1.5">
                        <Plus size={14} />
                        New thread
                      </span>
                      <span className="rounded bg-violet-700/60 px-1 py-0.5 text-[9px]">
                        ⌘N
                      </span>
                    </button>

                    <div className="mt-5 space-y-1 text-xs">
                      <p className="px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/30">
                        Recent Threads
                      </p>
                      {sampleChats.map((chat, idx) => (
                        <div
                          key={chat.title}
                          onClick={() => setSelectedPrompt(idx)}
                          className={`cursor-pointer truncate rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition ${
                            selectedPrompt === idx
                              ? "bg-violet-500/10 text-violet-600 dark:bg-white/10 dark:text-white"
                              : "text-slate-600 hover:bg-slate-100 dark:text-white/50 dark:hover:bg-white/5"
                          }`}
                        >
                          {chat.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-200/60 pt-3 text-[11px] text-slate-400 dark:border-white/5 dark:text-white/30">
                    <div className="flex items-center justify-between">
                      <span>Pro Storage</span>
                      <span className="font-bold text-slate-600 dark:text-white/60">
                        72%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-violet-500" />
                    </div>
                  </div>
                </aside>

                {/* Main Chat/Artifact Canvas */}
                <div className="relative flex flex-col justify-between">
                  {/* Top Canvas Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 text-xs dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="grid h-5 w-5 place-items-center rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[10px] font-bold text-white">
                        E
                      </div>
                      <span className="font-semibold text-slate-800 dark:text-white">
                        EchoGPT Pro Dual-Engine
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-600 transition hover:bg-slate-50 dark:border-white/10 dark:text-white/60 dark:hover:bg-white/5"
                      >
                        {copied ? (
                          <>
                            <Check size={12} className="text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400">
                              Copied
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy response</span>
                          </>
                        )}
                      </button>
                      <Settings size={14} className="text-slate-400 dark:text-white/40" />
                    </div>
                  </div>

                  {/* Middle Messages / Artifacts */}
                  <div className="flex-1 space-y-4 p-5 text-xs sm:text-sm">
                    {/* User Prompt Bubble */}
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-white shadow-md">
                      {currentChat.prompt}
                    </div>

                    {/* AI Response Card */}
                    {activeTab === "chat" ? (
                      <div className="flex items-start gap-3">
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-md shadow-violet-500/20">
                          <Bot size={16} />
                        </div>

                        <div className="flex-1 rounded-2xl rounded-tl-sm border border-slate-200/80 bg-slate-50/80 p-4 text-xs leading-relaxed text-slate-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 sm:text-sm">
                          <p>{currentChat.response}</p>

                          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 font-mono text-[11px] text-slate-800 dark:border-white/10 dark:bg-black/40 dark:text-emerald-400">
                            <pre className="overflow-x-auto">
                              <code>{currentChat.codeSnippet}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Artifacts Code View */
                      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-emerald-400 shadow-inner dark:border-white/10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-white/50">
                          <span>artifact_preview.ts</span>
                          <span>Ready for export</span>
                        </div>
                        <pre className="mt-3 overflow-x-auto text-[11px] leading-relaxed">
                          <code>{currentChat.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  {/* Bottom Interactive Composer Simulator */}
                  <div className="m-3 sm:m-4 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="flex items-center gap-2 px-2 text-slate-400 dark:text-white/40">
                      <Paperclip size={15} />
                      <span className="text-xs">
                        Message EchoGPT across all models...
                      </span>

                      <button
                        className="ml-auto grid h-8 w-8 place-items-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/30 transition hover:bg-violet-500"
                        aria-label="Send message"
                      >
                        <ArrowUp size={15} />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-[10px] text-slate-400 dark:border-white/5 dark:text-white/40">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-violet-500/10 px-2 py-0.5 font-semibold text-violet-600 dark:text-violet-300">
                          EchoGPT Pro
                        </span>
                        <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          320ms Latency
                        </span>
                      </div>
                      <span className="hidden sm:inline">⌘ + Enter to send</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}