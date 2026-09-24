"use client";

import {
  ArrowUp,
  Clock3,
  Copy,
  MoreHorizontal,
  Paperclip,
  Settings,
  Sparkles,
} from "lucide-react";

import QuickActions from "./QuickActions";
import ModelSelector from "../chat/ModelSelector";

export default function ExtensionPopup() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#101116]">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
            <Sparkles size={15} />
          </span>

          <div>
            <b className="text-sm">EchoGPT</b>
            <p className="text-[10px] text-slate-500">
              Browser assistant
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
            <Clock3 size={15} />
          </button>

          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
            <Settings size={15} />
          </button>

          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold">
            Quick actions
          </span>

          <span className="text-[10px] text-slate-500">
            ⌘ K
          </span>
        </div>

        <QuickActions />

        <div className="mt-4 rounded-2xl border border-black/10 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.03]">
          <textarea
            rows={4}
            placeholder="Ask anything about this page..."
            className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-slate-500"
          />

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                <Paperclip size={15} />
              </button>

              <ModelSelector />
            </div>

            <button className="grid h-8 w-8 place-items-center rounded-lg bg-violet-500 text-white">
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4 text-[10px] text-slate-500 dark:border-white/5">
          <span>Recent: Landing page summary</span>
          <Copy size={13} />
        </div>
      </div>
    </div>
  );
}