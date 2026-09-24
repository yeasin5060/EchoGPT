"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const links = [
    ["Features", "#features"],
    ["Models", "#models"],
    ["Preview", "#preview"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x pt-4">
        <nav className="glass flex h-16 items-center justify-between rounded-2xl px-4 shadow-lg shadow-black/[0.03]">
          <Link href="/">
            <Logo />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="grid h-10 w-10 place-items-center rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
            >
              {theme === "dark" ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <Link href="/chat" className="btn-primary">
              Open App
            </Link>
          </div>

          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <div className="grid gap-1">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {label}
                </a>
              ))}

              <Link
                href="/chat"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Open App
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}