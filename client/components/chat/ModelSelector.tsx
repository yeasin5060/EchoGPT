"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { models } from "@/data/models";

export default function ModelSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(models[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 text-xs font-semibold dark:border-white/10"
      >
        <span
          className={`grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br ${selected.color} text-[9px] text-white`}
        >
          {selected.icon}
        </span>

        <span className="hidden sm:inline">
          {selected.name}
        </span>

        <ChevronDown size={14} />
      </button>

      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-60 overflow-hidden rounded-2xl border border-black/10 bg-white p-1 shadow-2xl dark:border-white/10 dark:bg-[#15161c]">
          {models.map((model) => (
            <button
              key={model.name}
              onClick={() => {
                setSelected(model);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs hover:bg-black/5 dark:hover:bg-white/5"
            >
              <span
                className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${model.color} text-white`}
              >
                {model.icon}
              </span>

              <span className="flex-1">
                <b>{model.name}</b>
                <small className="block text-slate-500">
                  {model.label}
                </small>
              </span>

              {selected.name === model.name && (
                <Check
                  size={14}
                  className="text-violet-500"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}