"use client";

import { useState } from "react";
import {
  ArrowUp,
  Check,
  Clock3,
  Copy,
  ExternalLink,
  Globe,
  MoreHorizontal,
  Paperclip,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

import QuickActions from "./QuickActions";
import ModelSelector from "../chat/ModelSelector";

export default function ExtensionPopup() {
  const [promptText, setPromptText] = useState("");
  const [copiedRecent, setCopiedRecent] = useState(false);
  const [activeTab, setActiveTab] = useState<"ask" | "inspect">("ask");

  const handleCopyRecent = () => {
    setCopiedRecent(true);
    setTimeout(() => setCopiedRecent(false), 2000);
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/95 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-[#0e0f17]/95">
      {/* Background Top Ambient Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-400/20 blur-2xl" />

      {/* Extension Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-400 text-white shadow-md shadow-violet-500/20">
            <Sparkles size={16} />
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-white bg-emerald-500 dark:border-[#0e0f17]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <b className="text-xs font-bold text-slate-900 dark:text-white">EchoGPT</b>
              <span className="rounded bg-violet-500/10 px-1.5 py-0.2 text-[9px] font-bold text-violet-600 dark:text-violet-300">
                v2.4
              </span>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-white/40">
              Active on current browser tab
            </p>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-1 text-slate-500 dark:text-white/60">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            title="History"
          >
            <Clock3 size={15} />
          </button>

          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            title="Settings"
          >
            <Settings size={15} />
          </button>

          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            title="More actions"
          >
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>

      {/* Main Extension Body */}
      <div className="p-4">
        {/* Active Page Context Pill */}
        <div className="mb-3.5 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-1.5 text-[11px] text-slate-600 dark:border-white/5 dark:bg-white/[0.02] dark:text-white/60">
          <div className="flex items-center gap-1.5 truncate">
            <Globe size={13} className="shrink-0 text-cyan-500" />
            <span className="truncate font-medium">echogpt.app/docs/api</span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
            Parsed
          </span>
        </div>

        {/* Quick Actions Title Bar */}
        <div className="mb-2.5 flex items-center justify-between px-0.5">
          <span className="text-xs font-bold text-slate-800 dark:text-white">
            Quick Actions
          </span>
          <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[9px] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/40">
            ⌘ + K
          </span>
        </div>

        {/* Grid of Quick Prompt Actions */}
        <QuickActions />

        {/* Composer Card with Focus Highlight */}
        <div className="mt-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 shadow-inner transition-all focus-within:border-violet-500/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-500/15 dark:border-white/10 dark:bg-[#12131b] dark:focus-within:border-violet-400">
          <textarea
            rows={3}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ask anything about this page or prompt models..."
            className="w-full resize-none bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/30"
          />

          <div className="mt-2 flex items-center justify-between border-t border-slate-200/60 pt-2 dark:border-white/5">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="grid h-7 w-7 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                title="Attach current snapshot"
              >
                <Paperclip size={14} />
              </button>

              <ModelSelector />
            </div>

            <button
              type="button"
              disabled={!promptText.trim()}
              onClick={() => setPromptText("")}
              className={`grid h-8 w-8 place-items-center rounded-xl transition-all duration-300 ${
                promptText.trim()
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/30 hover:scale-105 hover:bg-violet-500 active:scale-95"
                  : "cursor-not-allowed bg-slate-200 text-slate-400 dark:bg-white/10 dark:text-white/30"
              }`}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Recent Activity Bar with Interactive Copy */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500 dark:border-white/5 dark:text-white/40">
          <span className="truncate pr-2">
            Recent: <strong>3 Key takeaways extracted</strong>
          </span>

          <button
            type="button"
            onClick={handleCopyRecent}
            className="flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-white/10 dark:hover:text-violet-300"
            title="Copy recent output"
          >
            {copiedRecent ? (
              <>
                <Check size={12} className="text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}