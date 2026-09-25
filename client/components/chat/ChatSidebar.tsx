"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Archive,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  HelpCircle,
  MessageSquare,
  MoreVertical,
  Plus,
  Search,
  Settings,
  Sparkles,
  Trash2,
  X,
  Zap,
} from "lucide-react";

import Logo from "../ui/Logo";

interface ChatSidebarProps {
  open: boolean;
  onClose: () => void;
}

interface ChatItem {
  id: string;
  title: string;
  model: string;
  badgeColor: string;
  date: string;
}

export default function ChatSidebar({ open, onClose }: ChatSidebarProps) {
  const [activeChat, setActiveChat] = useState("chat-1");
  const [searchQuery, setSearchQuery] = useState("");

  const chatItems: { category: string; items: ChatItem[] }[] = [
    {
      category: "Today",
      items: [
        {
          id: "chat-1",
          title: "Landing page ideas",
          model: "GPT-4o",
          badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          date: "10m ago",
        },
        {
          id: "chat-2",
          title: "React performance",
          model: "Claude",
          badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
          date: "1h ago",
        },
        {
          id: "chat-3",
          title: "SaaS architecture",
          model: "EchoGPT",
          badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
          date: "3h ago",
        },
      ],
    },
    {
      category: "Yesterday & Earlier",
      items: [
        {
          id: "chat-4",
          title: "Portfolio feedback",
          model: "Gemini",
          badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
          date: "Yesterday",
        },
        {
          id: "chat-5",
          title: "Next.js 15 App router",
          model: "Claude",
          badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
          date: "2d ago",
        },
        {
          id: "chat-6",
          title: "Database schema design",
          model: "GPT-4o",
          badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          date: "4d ago",
        },
      ],
    },
  ];

  const filteredItems = chatItems
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[295px] flex-col justify-between border-r border-slate-200/80 bg-white/95 p-4 backdrop-blur-2xl transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#0c0d14]/95 lg:static lg:translate-x-0 ${
        open ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      }`}
    >
      {/* Top Header Section */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Link href="/" className="transition-transform hover:scale-105">
            <Logo />
          </Link>

          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={17} />
          </button>
        </div>

        {/* New Chat Primary Action Button */}
        <button
          className="group relative mt-5 flex w-full items-center justify-between overflow-hidden rounded-xl bg-violet-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-violet-500/40 active:scale-[0.98]"
        >
          {/* Subtle shine on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="flex items-center gap-2">
            <Plus size={16} className="transition-transform group-hover:rotate-90 duration-300" />
            New conversation
          </span>
          <span className="rounded bg-violet-700/60 px-1.5 py-0.5 text-[10px] font-mono opacity-80">
            ⌘N
          </span>
        </button>

        {/* Search Bar with live filter */}
        <div className="mt-3.5 flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 transition-all focus-within:border-violet-500 focus-within:bg-white focus-within:shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:focus-within:border-violet-400 dark:focus-within:bg-white/[0.06]">
          <Search size={14} className="text-slate-400 dark:text-white/40" />

          <input
            aria-label="Search conversations"
            placeholder="Search threads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/30"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-slate-400 hover:text-slate-600 dark:text-white/40 dark:hover:text-white"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Middle Thread List with Animated Hover & Selection */}
      <div className="my-4 flex-1 space-y-5 overflow-y-auto pr-1 text-xs">
        {filteredItems.map((group) => (
          <div key={group.category}>
            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/30">
              {group.category}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = activeChat === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveChat(item.id)}
                    className={`group relative flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 ${
                      isActive
                        ? "border border-violet-500/30 bg-violet-500/10 font-bold text-violet-700 shadow-sm dark:bg-violet-500/15 dark:text-violet-300"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <MessageSquare
                        size={14}
                        className={`shrink-0 transition-colors ${
                          isActive
                            ? "text-violet-600 dark:text-violet-400"
                            : "text-slate-400 group-hover:text-slate-600 dark:text-white/30 dark:group-hover:text-white/60"
                        }`}
                      />
                      <span className="truncate">{item.title}</span>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-semibold transition-opacity ${item.badgeColor}`}
                      >
                        {item.model}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="py-8 text-center text-xs text-slate-400 dark:text-white/40">
            No conversations match &ldquo;{searchQuery}&rdquo;
          </div>
        )}
      </div>

      {/* Bottom User & Navigation Dock */}
      <div className="space-y-1 border-t border-slate-200/80 pt-3 dark:border-white/10">
        <Link
          href="/settings"
          className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
        >
          <div className="flex items-center gap-2.5">
            <Settings size={15} className="text-slate-400 dark:text-white/40" />
            <span>Workspace Settings</span>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-white/30">⌘,</span>
        </Link>

        <Link
          href="/"
          className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
        >
          <div className="flex items-center gap-2.5">
            <Archive size={15} className="text-slate-400 dark:text-white/40" />
            <span>Return to Landing</span>
          </div>
          <ExternalLink size={12} className="opacity-50" />
        </Link>

        {/* Plan Upgrade Pill */}
        <div className="mt-2 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-300">
              <Sparkles size={13} />
              <span>EchoGPT Pro</span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
              Active
            </span>
          </div>
          <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
            Unlimited GPT-4o & Claude 3.5 access enabled.
          </p>
        </div>
      </div>
    </aside>
  );
}