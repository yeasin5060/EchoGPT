"use client";

import Link from "next/link";
import {
  Archive,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";

import Logo from "../ui/Logo";

interface ChatSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatSidebar({
  open,
  onClose,
}: ChatSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-[285px] border-r border-black/10 bg-white p-4 transition-transform dark:border-white/10 dark:bg-[#0b0c10] lg:static lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <button
          onClick={onClose}
          className="lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      <button className="btn-primary mt-6 w-full">
        <Plus size={16} />
        New chat
      </button>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 dark:border-white/10">
        <Search size={15} />

        <input
          aria-label="Search conversations"
          placeholder="Search chats"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        />
      </div>

      <div className="mt-7 space-y-6 text-sm">
        <div>
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Today
          </p>

          <div className="rounded-xl bg-violet-500/10 px-3 py-2.5 text-violet-600 dark:text-violet-300">
            Landing page ideas
          </div>

          <div className="mt-1 rounded-xl px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
            React performance
          </div>

          <div className="mt-1 rounded-xl px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
            SaaS architecture
          </div>
        </div>

        <div>
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Earlier
          </p>

          <div className="rounded-xl px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
            Portfolio feedback
          </div>

          <div className="mt-1 rounded-xl px-3 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
            Next.js routing
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4 space-y-1">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-black/5 dark:hover:bg-white/5"
        >
          <Settings size={16} />
          Settings
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-black/5 dark:hover:bg-white/5"
        >
          <Archive size={16} />
          Back to website
        </Link>
      </div>
    </aside>
  );
}