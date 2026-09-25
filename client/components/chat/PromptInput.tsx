"use client";

import {
  ArrowUp,
  CornerDownLeft,
  FileUp,
  Mic,
  Paperclip,
  SlidersHorizontal,
  Sparkles,
  StopCircle,
} from "lucide-react";
import { useState } from "react";

import ModelSelector from "./ModelSelector";
import SuggestedPrompts from "./SuggestedPrompts";

export default function PromptInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Interactive Floating Quick Prompts */}
      <SuggestedPrompts onPick={setValue} />

      {/* Main Composer Box with Dynamic Focus Glow & Ring */}
      <div
        className={`relative mt-3.5 rounded-2xl border transition-all duration-300 ${
          isFocused
            ? "border-violet-500 bg-white shadow-2xl shadow-violet-500/10 ring-2 ring-violet-500/20 dark:border-violet-400 dark:bg-[#111218]"
            : "border-slate-200/90 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1016]"
        }`}
      >
        {/* Text Input Area */}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          rows={value.split("\n").length > 2 ? 3 : 2}
          placeholder="Ask EchoGPT across models... (Shift + Enter for new line)"
          className="w-full resize-none bg-transparent px-4 pt-3.5 pb-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/30"
        />

        {/* Action Controls & Model Switcher Toolbar */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-3 py-2 dark:border-white/5">
          <div className="flex items-center gap-1.5">
            {/* Attachment Button */}
            <button
              type="button"
              aria-label="Attach file"
              className="grid h-8 w-8 place-items-center rounded-xl border border-transparent text-slate-500 transition-all duration-200 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              title="Attach document or image"
            >
              <Paperclip size={16} />
            </button>

            {/* Prompt Tuning / System Directives */}
            <button
              type="button"
              aria-label="Prompt options"
              className="grid h-8 w-8 place-items-center rounded-xl border border-transparent text-slate-500 transition-all duration-200 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              title="Model options & temperature"
            >
              <SlidersHorizontal size={15} />
            </button>

            {/* Audio Voice Input */}
            <button
              type="button"
              onClick={() => setIsRecording(!isRecording)}
              aria-label="Voice input"
              className={`grid h-8 w-8 place-items-center rounded-xl border transition-all duration-200 ${
                isRecording
                  ? "border-rose-500 bg-rose-500/10 text-rose-600 animate-pulse"
                  : "border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
              title="Dictate with voice"
            >
              <Mic size={15} />
            </button>

            {/* In-Line Frontier Model Switcher */}
            <ModelSelector />
          </div>

          {/* Right Action: Send Button with animated hover */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Send message"
              disabled={!value.trim()}
              onClick={() => setValue("")}
              className={`grid h-9 w-9 place-items-center rounded-xl transition-all duration-300 ${
                value.trim()
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/30 hover:scale-105 hover:bg-violet-500 active:scale-95"
                  : "cursor-not-allowed bg-slate-200/80 text-slate-400 dark:bg-white/10 dark:text-white/30"
              }`}
            >
              <ArrowUp size={17} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcut Hints & Disclaimer */}
      <div className="mt-2.5 flex items-center justify-between px-2 text-[10px] text-slate-400 dark:text-white/40">
        <span className="hidden sm:flex items-center gap-1.5">
          <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[9px] dark:border-white/10 dark:bg-white/5">
            Enter ↵
          </kbd>
          <span>to send</span>
          <span className="opacity-60">•</span>
          <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[9px] dark:border-white/10 dark:bg-white/5">
            Shift + Enter
          </kbd>
          <span>for newline</span>
        </span>

        <span className="mx-auto sm:mx-0">
          EchoGPT uses state-of-the-art encrypted inference. Check critical facts.
        </span>
      </div>
    </div>
  );
}