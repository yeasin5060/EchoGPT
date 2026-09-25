"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  FileText,
  Languages,
  Loader2,
  PenLine,
  Sparkles,
} from "lucide-react";

interface ActionItem {
  id: string;
  label: string;
  shortcut: string;
  icon: typeof FileText;
  color: string;
  bg: string;
  glow: string;
}

const actions: ActionItem[] = [
  {
    id: "summarize",
    label: "Summarize Page",
    shortcut: "⌘ 1",
    icon: FileText,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    glow: "from-cyan-500/15 to-transparent",
  },
  {
    id: "rewrite",
    label: "Rewrite Selection",
    shortcut: "⌘ 2",
    icon: PenLine,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    glow: "from-amber-500/15 to-transparent",
  },
  {
    id: "translate",
    label: "Translate Tab",
    shortcut: "⌘ 3",
    icon: Languages,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    glow: "from-emerald-500/15 to-transparent",
  },
  {
    id: "explain",
    label: "Explain Code",
    shortcut: "⌘ 4",
    icon: Code2,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    glow: "from-violet-500/15 to-transparent",
  },
];

export default function QuickActions() {
  const [triggeredId, setTriggeredId] = useState<string | null>(null);

  const handleActionClick = (id: string) => {
    setTriggeredId(id);
    setTimeout(() => {
      setTriggeredId(null);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map(({ id, label, shortcut, icon: Icon, color, bg, glow }) => {
        const isTriggered = triggeredId === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => handleActionClick(id)}
            className={`group relative flex items-center justify-between overflow-hidden rounded-xl border p-2.5 text-left text-xs font-semibold shadow-xs backdrop-blur-md transition-all duration-300 ${
              isTriggered
                ? "border-violet-500/50 bg-violet-500/10 text-violet-700 shadow-sm ring-1 ring-violet-500/20 scale-[0.98] dark:border-violet-400 dark:text-violet-300"
                : "border-slate-200/90 bg-white/80 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-white hover:shadow-md active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.08]"
            }`}
          >
            {/* Ambient Background Gradient on Hover */}
            <div
              className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br ${glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="flex items-center gap-2 min-w-0 pr-1">
              <div
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${bg} ${color}`}
              >
                {isTriggered ? (
                  <Check size={14} className="text-emerald-500 animate-in zoom-in-50" />
                ) : (
                  <Icon size={14} />
                )}
              </div>

              <span className="truncate text-slate-800 transition-colors group-hover:text-violet-600 dark:text-slate-200 dark:group-hover:text-violet-300">
                {isTriggered ? "Processing..." : label}
              </span>
            </div>

            {/* Shortcut Badge / Arrow */}
            <div className="shrink-0 flex items-center">
              <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] font-normal text-slate-400 transition-opacity group-hover:opacity-60 dark:bg-white/10 dark:text-white/40">
                {shortcut}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}