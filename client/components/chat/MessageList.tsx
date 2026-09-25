"use client";

import { useState } from "react";
import {
  ArrowDown,
  Bot,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Flame,
  Layers,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Message from "./Message";

export default function MessageList() {
  const [activeCodeCopied, setActiveCodeCopied] = useState(false);

  const copyCode = (code: string) => {
    setActiveCodeCopied(true);
    setTimeout(() => setActiveCodeCopied(false), 2000);
  };

  const sampleCodeSnippet = `// EchoGPT Multi-Model Dispatcher
import { createEngineRouter } from "@echogpt/sdk";

export const aiRouter = createEngineRouter({
  defaultModel: "claude-3-5-sonnet",
  fallbackModel: "gpt-4o",
  latencyBudgetMs: 400,
  zeroTelemetry: true,
});`;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 pb-6">
      {/* Thread Welcome Header Card */}
      <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 p-4 text-center sm:text-left backdrop-blur-md dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/25">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  Landing page architecture session
                </h4>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  Active Thread
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Connected to <strong>GPT-4o</strong> and <strong>Claude 3.5 Sonnet</strong> dual streams.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 dark:text-white/40">
            <Zap size={13} className="text-amber-500" />
            <span>Dual-Router Active</span>
          </div>
        </div>
      </div>

      {/* Message 1: User */}
      <Message role="user" timestamp="10:42 AM">
        Help me design a modern landing page for a multi-model AI platform.
      </Message>

      {/* Message 2: Assistant */}
      <Message
        role="assistant"
        modelName="EchoGPT Pro"
        timestamp="10:42 AM"
      >
        <div className="space-y-3">
          <p>
            Absolutely. I recommend structuring the page around one uncompromising promise:
          </p>

          <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3.5 text-violet-800 dark:text-violet-200">
            <span className="font-bold tracking-tight text-base sm:text-lg block">
              &ldquo;One workspace for every frontier AI model.&rdquo;
            </span>
            <p className="mt-1 text-xs opacity-80 leading-relaxed">
              Eliminate prompt switching friction by showing instantaneous model toggles right at the hero level.
            </p>
          </div>

          <p>
            Start with an interactive preview in the hero, validate performance with sub-second latency benchmarks, and demonstrate keyboard-first shortcuts before leading into pricing.
          </p>
        </div>
      </Message>

      {/* Message 3: User */}
      <Message role="user" timestamp="10:44 AM">
        What sections should I prioritize for maximum conversion?
      </Message>

      {/* Message 4: Assistant with Interactive Code Artifact */}
      <Message
        role="assistant"
        modelName="Claude 3.5 Sonnet"
        timestamp="10:44 AM"
      >
        <div className="space-y-4">
          <p>
            For maximum developer and enterprise adoption, follow this validated progression:
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="text-[10px] font-bold text-violet-500">01. Hook</span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">Hero & Preview</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="text-[10px] font-bold text-cyan-500">02. Proof</span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">Model Stack</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="text-[10px] font-bold text-fuchsia-500">03. Utility</span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">Features & Flow</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="text-[10px] font-bold text-emerald-500">04. Action</span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">Pricing & FAQ</p>
            </div>
          </div>

          <p>
            Here is the TypeScript router pattern to integrate on the client side:
          </p>

          {/* Interactive Code Snippet Box */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0d0f17] text-slate-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal size={14} className="text-violet-400" />
                <span className="font-mono text-[11px]">echogpt-router.ts</span>
              </div>

              <button
                onClick={() => copyCode(sampleCodeSnippet)}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                {activeCodeCopied ? (
                  <>
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="overflow-x-auto p-4 font-mono text-[11px] sm:text-xs leading-relaxed text-emerald-400">
              <code>{sampleCodeSnippet}</code>
            </pre>
          </div>
        </div>
      </Message>

      {/* Suggested Follow-up Prompts Pills */}
      <div className="pt-2">
        <p className="mb-2.5 px-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40">
          Suggested follow-ups:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Write the Hero section copy",
            "Generate Tailwind styles for model cards",
            "How do I set up the Chrome extension?",
          ].map((suggestion) => (
            <button
              key={suggestion}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
            >
              <Sparkles size={12} className="text-violet-500" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}