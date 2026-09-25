"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bell,
  Check,
  ChevronRight,
  Command,
  Download,
  Flame,
  Home,
  Menu,
  Moon,
  MoreHorizontal,
  Share2,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";

interface ChatHeaderProps {
  onMenu: () => void;
}

export default function ChatHeader({ onMenu }: ChatHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = () => {
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <header className="relative flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-xl transition-colors duration-200 sm:px-6 dark:border-white/10 dark:bg-[#0c0d14]/80 z-20">
      {/* Left: Mobile Sidebar Trigger & Breadcrumb Thread Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenu}
          className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-50 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-white lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={18} />
        </button>

        {/* Back to Home Link */}
        <Link
          href="/"
          className="hidden sm:grid h-9 w-9 place-items-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:scale-105 hover:border-violet-500/40 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/60 dark:hover:text-white"
          title="Return to Home"
        >
          <Home size={16} />
        </Link>

        {/* Breadcrumb & Live Active Thread Title */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-slate-400 dark:text-white/30">
            Threads
          </span>
          <ChevronRight size={13} className="hidden sm:inline text-slate-300 dark:text-white/20" />

          <div className="flex items-center gap-2">
            <span className="truncate text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Landing page ideas
            </span>

            {/* Live Model Stream Pulse Badge */}
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>GPT-4o Stream</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right: Quick Action Buttons & Profile */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Command shortcut pill */}
        <button
          className="hidden xl:flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm transition hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/50"
          title="Search or prompt commands"
        >
          <Command size={12} />
          <span>⌘K Palette</span>
        </button>

        {/* Share Button with Animated Copied Feedback */}
        <button
          onClick={handleShare}
          className="flex h-9 items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-violet-400 hover:text-violet-600 active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:text-white"
          title="Share thread link"
        >
          {copiedShare ? (
            <>
              <Check size={14} className="text-emerald-500 animate-in zoom-in-50" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Share2 size={14} />
              <span className="hidden sm:inline">Share</span>
            </>
          )}
        </button>

        {/* Theme Toggle with Rotation Micro-Animation */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:text-violet-600 active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
        >
          {!mounted ? (
            <Moon size={16} />
          ) : theme === "dark" ? (
            <Sun
              size={16}
              className="text-amber-400 transition-transform duration-500 hover:rotate-90"
            />
          ) : (
            <Moon
              size={16}
              className="text-violet-600 transition-transform duration-500 hover:-rotate-45"
            />
          )}
        </button>

        {/* User Profile Avatar with Glowing Active Ring */}
        <div className="group relative flex cursor-pointer items-center">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-400 text-xs font-bold text-white shadow-md shadow-violet-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-violet-500/40">
            Y
            {/* Online Green Indicator Dot */}
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0c0d14]" />
          </div>
        </div>
      </div>
    </header>
  );
}