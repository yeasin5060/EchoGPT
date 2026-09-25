"use client";

import Link from "next/link";
import { ArrowRight, Chrome, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["Features", "#features"],
    ["Models", "#models"],
    ["Preview", "#preview"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="container-x pt-3 sm:pt-4">
        <nav
          className={`flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? "border border-slate-200/90 bg-white/85 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-[#090a10]/85"
              : "border border-slate-200/50 bg-white/60 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/[0.03]"
          }`}
        >
          {/* Logo with Hover Animation */}
          <Link href="/" className="group flex items-center transition-transform hover:scale-105">
            <Logo />
          </Link>

          {/* Desktop Navigation Links with animated hover pill indicator */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-200/60 bg-slate-50/60 p-1 backdrop-blur-md md:flex dark:border-white/5 dark:bg-white/[0.03]">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-white hover:text-violet-600 hover:shadow-sm dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 md:flex">
            {/* Theme Toggle Button with Rotation Micro-animation */}
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-violet-500/40 hover:text-violet-600 active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            >
              {!mounted ? (
                <Moon size={17} />
              ) : theme === "dark" ? (
                <Sun size={17} className="text-amber-400 rotate-0 transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon size={17} className="text-violet-600 rotate-0 transition-transform duration-500 hover:-rotate-45" />
              )}
            </button>

            {/* Extension Link Icon */}
            <Link
              href="/extension"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-amber-400/50 hover:text-amber-500 active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
              title="Chrome Extension"
            >
              <Chrome size={17} />
            </Link>

            {/* CTA Button with Shine */}
            <Link
              href="/chat"
              className="group/cta btn-primary relative overflow-hidden px-4 py-2.5 text-xs font-bold"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
              <span>Launch Studio</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Button with Animated Transformation */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
            >
              {!mounted ? (
                <Moon size={16} />
              ) : theme === "dark" ? (
                <Sun size={16} className="text-amber-400" />
              ) : (
                <Moon size={16} className="text-violet-600" />
              )}
            </button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X size={20} className="transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu with Smooth Slide & Glow */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden dark:border-white/10 dark:bg-[#0a0b12]/95">
            <div className="grid gap-1">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-500/10 hover:text-violet-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <span>{label}</span>
                  <ArrowRight size={14} className="opacity-40" />
                </a>
              ))}

              <div className="mt-2 border-t border-slate-100 pt-3 dark:border-white/10">
                <Link
                  href="/extension"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-500/10 hover:text-violet-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Chrome size={16} className="text-amber-500" />
                    Chrome Extension
                  </span>
                  <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                    New
                  </span>
                </Link>

                <Link
                  href="/chat"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-3 flex w-full items-center justify-center gap-2 py-3 text-sm"
                >
                  <Sparkles size={16} />
                  <span>Launch Studio Free</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}