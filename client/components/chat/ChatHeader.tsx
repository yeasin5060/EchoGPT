"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ChatHeaderProps {
  onMenu: () => void;
}

export default function ChatHeader({
  onMenu,
}: ChatHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 items-center justify-between border-b border-black/10 px-4 dark:border-white/10 sm:px-6">
      <button
        onClick={onMenu}
        className="grid h-9 w-9 place-items-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5 lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu size={18} />
      </button>

      <div className="hidden text-sm font-semibold sm:block">
        Landing page ideas
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          aria-label="Toggle theme"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="grid h-9 w-9 place-items-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
        >
          {theme === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </button>

        <div className="grid h-9 w-9 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white">
          Y
        </div>
      </div>
    </header>
  );
}