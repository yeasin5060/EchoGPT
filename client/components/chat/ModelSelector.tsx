"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Cpu, Sparkles, Zap } from "lucide-react";
import { models } from "@/data/models";

const modelSpecs: Record<string, { latency: string; tag: string }> = {
  "EchoGPT Pro": { latency: "320ms", tag: "Auto-routing" },
  "GPT-4o": { latency: "380ms", tag: "Omni-logic" },
  Claude: { latency: "410ms", tag: "Code Artifacts" },
  Gemini: { latency: "350ms", tag: "1M Context" },
  Llama: { latency: "280ms", tag: "Open-weight" },
};

export default function ModelSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof models)[number]>(models[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`group flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
          open
            ? "border-violet-500/50 bg-violet-500/10 text-violet-700 dark:border-violet-400 dark:text-violet-300 ring-2 ring-violet-500/20 shadow-sm"
            : "border-slate-200/90 bg-white text-slate-700 hover:border-violet-400/50 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]"
        }`}
        aria-expanded={open}
        aria-label="Select AI model"
      >
        <span
          className={`grid h-5 w-5 place-items-center rounded-lg bg-gradient-to-br ${selected.color} text-[10px] font-bold text-white shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          {selected.icon}
        </span>

        <span className="font-bold">{selected.name}</span>

        {/* Latency micro indicator */}
        <span className="hidden sm:inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-mono text-slate-500 dark:bg-white/10 dark:text-slate-300">
          <Zap size={9} className="text-amber-500" />
          {modelSpecs[selected.name]?.latency || "320ms"}
        </span>

        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180 text-violet-500" : "group-hover:text-slate-600 dark:group-hover:text-white"
          }`}
        />
      </button>

      {/* Floating Animated Dropdown Menu */}
      {open && (
        <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 absolute bottom-full left-0 z-50 mb-2 w-72 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-2xl transition-all dark:border-white/10 dark:bg-[#12131a]/95">
          <div className="border-b border-slate-100 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:border-white/5 dark:text-white/40">
            Frontier AI Models
          </div>

          <div className="mt-1 space-y-1">
            {models.map((model) => {
              const isSelected = selected.name === model.name;
              const spec = modelSpecs[model.name];

              return (
                <button
                  key={model.name}
                  type="button"
                  onClick={() => {
                    setSelected(model);
                    setOpen(false);
                  }}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition-all duration-200 ${
                    isSelected
                      ? "bg-violet-500/10 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 font-bold"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${model.color} text-xs font-bold text-white shadow-md shadow-violet-500/10 transition-transform duration-200 group-hover:scale-105`}
                  >
                    {model.icon}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-1.5">
                      <b className="truncate">{model.name}</b>
                      {spec?.tag && (
                        <span className="rounded bg-slate-200/60 px-1.5 py-0.2 text-[9px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">
                          {spec.tag}
                        </span>
                      )}
                    </span>
                    <small className="block text-[11px] text-slate-400 dark:text-white/40 font-normal">
                      {model.label} • {spec?.latency}
                    </small>
                  </span>

                  {isSelected && (
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-violet-600 text-white shadow-xs">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Dropdown Footer */}
          <div className="mt-1.5 flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-3 py-1.5 text-[10px] text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white/30">
            <span>Instant hot-swap</span>
            <span>Zero reload</span>
          </div>
        </div>
      )}
    </div>
  );
}