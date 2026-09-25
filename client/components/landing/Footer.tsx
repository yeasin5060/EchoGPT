"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Chrome,
  Github,
  Heart,
  Linkedin,
  Radio,
  Send,
  Sparkles,
  Twitter,
} from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/50 pt-16 pb-12 dark:border-white/10 dark:bg-[#07080b]">
      {/* Background Ambient Glow & Light Ray */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -top-24 right-1/4 -z-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container-x">
        {/* Main Grid: Brand + Newsletter + Navigation Columns */}
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Info & Newsletter */}
          <div className="space-y-5">
            <Logo />
            <p className="muted max-w-sm text-sm leading-relaxed">
              EchoGPT unites frontier AI models, cross-platform extensions, and keyboard-driven workflows into one seamless workspace.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>All Systems Operational</span>
            </div>

            {/* Mini Newsletter Input */}
            <div className="pt-2">
              <label htmlFor="footer-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Get model updates & features
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex max-w-sm items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-violet-500 focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-white/30"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:bg-violet-500 active:scale-95"
                  aria-label="Subscribe"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Column 1: Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/chat"
                  className="group inline-flex items-center gap-1.5 text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  <span>Chat Workspace</span>
                  <span className="rounded-md bg-violet-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-violet-600 dark:text-violet-300">
                    Pro
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/extension"
                  className="group inline-flex items-center gap-1.5 text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  <span>Chrome Extension</span>
                  <ArrowUpRight size={13} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <a
                  href="#models"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Supported Models
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Feature Overview
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Resources & Community */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#faq"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  FAQs & Help
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  <span>API Documentation</span>
                  <ArrowUpRight size={13} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Changelog & Releases
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Interactive Preview
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Legal & Assignment Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              About
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-slate-600 dark:text-slate-400">
                Created for{" "}
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  AppifyDevs
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Terms of Service
                </a>
              </li>
              <li className="pt-2">
                {/* Back to top button */}
                <button
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:border-violet-400"
                >
                  <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
                  <span>Back to top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Buttons */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row dark:border-white/10 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} EchoGPT. Crafted with</span>
            <Heart size={13} className="fill-rose-500 text-rose-500 animate-pulse" />
            <span>for seamless AI productivity.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70 dark:hover:border-violet-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70 dark:hover:border-cyan-400 dark:hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="/extension"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:text-amber-500 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70 dark:hover:border-amber-400 dark:hover:text-white"
              aria-label="Chrome Extension"
            >
              <Chrome size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}