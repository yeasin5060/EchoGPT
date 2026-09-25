"use client";

import { useState } from "react";
import {
  Bot,
  Check,
  CheckCheck,
  Copy,
  RotateCcw,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  User,
  Zap,
} from "lucide-react";

interface MessageProps {
  role: "user" | "assistant";
  children: React.ReactNode;
  modelName?: string;
  timestamp?: string;
}

export default function Message({
  role,
  children,
  modelName = "EchoGPT Pro",
  timestamp = "Just now",
}: MessageProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const user = role === "user";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => setIsRegenerating(false), 1200);
  };

  return (
    <div
      className={`group relative flex gap-3.5 transition-all duration-300 ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      {/* Assistant Avatar with dynamic pulse gradient */}
      {!user && (
        <div className="relative mt-0.5 shrink-0">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-400 text-white shadow-md shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
            <Bot size={17} />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-white bg-emerald-500 dark:border-[#08090c]" />
        </div>
      )}

      {/* Message Bubble Container */}
      <div
        className={`relative flex flex-col ${
          user ? "items-end max-w-[88%] sm:max-w-[620px]" : "items-start max-w-[92%] sm:max-w-[720px]"
        }`}
      >
        {/* Meta Header for Assistant Response */}
        {!user && (
          <div className="mb-1.5 flex items-center gap-2 px-1 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="font-bold text-violet-600 dark:text-violet-400">
              {modelName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              <Zap size={11} />
              320ms streamed
            </span>
            <span>•</span>
            <span className="text-[10px] opacity-75">{timestamp}</span>
          </div>
        )}

        {/* Message Card Bubble */}
        <div
          className={`relative rounded-2xl px-5 py-4 text-sm leading-relaxed transition-all duration-300 ${
            user
              ? "rounded-tr-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20"
              : "rounded-tl-sm border border-slate-200/90 bg-white/90 text-slate-800 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
          } ${isRegenerating ? "animate-pulse" : ""}`}
        >
          {children}
        </div>

        {/* User Timestamp & Status */}
        {user && (
          <div className="mt-1 flex items-center gap-1.5 px-1 text-[10px] text-slate-400 dark:text-white/40">
            <span>{timestamp}</span>
            <span>•</span>
            <CheckCheck size={13} className="text-violet-500" />
          </div>
        )}

        {/* Assistant Action Toolbar (Copy, Regenerate, Thumbs) with Smooth Hover Fade */}
        {!user && (
          <div className="mt-2 flex items-center gap-1 text-slate-400 opacity-90 transition-opacity sm:opacity-60 sm:group-hover:opacity-100">
            <button
              onClick={handleCopy}
              aria-label="Copy response"
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs transition-colors hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handleRegenerate}
              aria-label="Regenerate response"
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs transition-colors hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              title="Regenerate response"
            >
              <RotateCcw
                size={13}
                className={isRegenerating ? "animate-spin text-violet-500" : ""}
              />
              <span className="text-[11px]">Retry</span>
            </button>

            <div className="h-3 w-px bg-slate-200 dark:bg-white/10 mx-1" />

            <button
              onClick={() => setLiked(liked === true ? null : true)}
              aria-label="Helpful"
              className={`rounded-lg p-1.5 transition-colors ${
                liked === true
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
              title="Good response"
            >
              <ThumbsUp size={13} />
            </button>

            <button
              onClick={() => setLiked(liked === false ? null : false)}
              aria-label="Not helpful"
              className={`rounded-lg p-1.5 transition-colors ${
                liked === false
                  ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                  : "hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
              title="Bad response"
            >
              <ThumbsDown size={13} />
            </button>
          </div>
        )}
      </div>

      {/* User Avatar with Profile Icon & Border Glow */}
      {user && (
        <div className="mt-0.5 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-600 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white/[0.05] dark:text-violet-400">
            <User size={16} />
          </div>
        </div>
      )}
    </div>
  );
}