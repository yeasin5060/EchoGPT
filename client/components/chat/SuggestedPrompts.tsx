"use client";

import {
  FileText,
  Languages,
  Lightbulb,
  PenLine,
  Sparkles,
} from "lucide-react";

const prompts = [
  {
    text: "Summarize this document",
    icon: FileText,
    tag: "Analysis",
    color: "text-cyan-500",
  },
  {
    text: "Brainstorm product ideas",
    icon: Lightbulb,
    tag: "Ideation",
    color: "text-amber-500",
  },
  {
    text: "Improve & polish writing",
    icon: PenLine,
    tag: "Writing",
    color: "text-violet-500",
  },
  {
    text: "Translate & localize text",
    icon: Languages,
    tag: "Language",
    color: "text-emerald-500",
  },
] as const;

interface SuggestedPromptsProps {
  onPick: (value: string) => void;
}

export default function SuggestedPrompts({ onPick }: SuggestedPromptsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {prompts.map(({ text, icon: Icon, tag, color }) => (
        <button
          key={text}
          type="button"
          onClick={() => onPick(text)}
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">
            <div className={`grid h-6 w-6 place-items-center rounded-lg bg-slate-100 transition-transform duration-300 group-hover:scale-110 dark:bg-white/10 ${color}`}>
              <Icon size={14} />
            </div>
            <span className="text-[9px] font-semibold text-slate-400 dark:text-white/30">
              {tag}
            </span>
          </div>

          <span className="mt-2 text-xs font-semibold text-slate-800 transition-colors group-hover:text-violet-600 dark:text-slate-200 dark:group-hover:text-violet-300">
            {text}
          </span>
        </button>
      ))}
    </div>
  );
}