"use client";

import {
  ArrowUp,
  Paperclip,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

import ModelSelector from "./ModelSelector";
import SuggestedPrompts from "./SuggestedPrompts";

export default function PromptInput() {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto w-full max-w-3xl">
      <SuggestedPrompts onPick={setValue} />

      <div className="mt-3 rounded-2xl border border-black/10 bg-white p-2 shadow-xl shadow-black/[0.04] dark:border-white/10 dark:bg-[#121319]">
        <textarea
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          rows={2}
          placeholder="Message EchoGPT..."
          className="w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-500"
        />

        <div className="flex items-center justify-between gap-2 border-t border-black/5 pt-2 dark:border-white/5">
          <div className="flex items-center gap-1">
            <button
              aria-label="Attach file"
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Paperclip size={16} />
            </button>

            <button
              aria-label="Prompt options"
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            >
              <SlidersHorizontal size={15} />
            </button>

            <ModelSelector />
          </div>

          <button
            aria-label="Send message"
            disabled={!value.trim()}
            className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500 text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      <p className="mt-2 text-center text-[10px] text-slate-500">
        AI can make mistakes. Check important information.
      </p>
    </div>
  );
}