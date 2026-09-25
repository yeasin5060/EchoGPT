"use client";

import {
  FileText,
  Languages,
  PenLine,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    label: "Summarize Page",
    icon: FileText,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    label: "Rewrite Selection",
    icon: PenLine,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    label: "Translate Tab",
    icon: Languages,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Explain Code",
    icon: Sparkles,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
] as const;

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map(({ label, icon: Icon, color, bg }) => (
        <button
          key={label}
          type="button"
          className="group relative flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white p-2.5 text-left text-xs font-semibold shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-slate-50 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.07]"
        >
          <div
            className={`grid h-6 w-6 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${bg} ${color}`}
          >
            <Icon size={14} />
          </div>
          <span className="truncate text-slate-800 transition-colors group-hover:text-violet-600 dark:text-slate-200 dark:group-hover:text-violet-300">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}