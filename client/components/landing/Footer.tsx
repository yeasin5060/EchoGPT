import Link from "next/link";
import { Chrome, Github, Twitter } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-10 dark:border-white/10 md:flex-row">
          <div>
            <Logo />

            <p className="muted mt-3 max-w-xs text-sm leading-6">
              A polished EchoGPT frontend redesign concept for the
              AppifyDevs internship assignment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm sm:grid-cols-3">
            <a href="#features" className="muted hover:text-violet-500">
              Features
            </a>

            <a href="#models" className="muted hover:text-violet-500">
              Models
            </a>

            <Link href="/chat" className="muted hover:text-violet-500">
              App
            </Link>

            <Link
              href="/extension"
              className="muted hover:text-violet-500"
            >
              Extension
            </Link>

            <a href="#pricing" className="muted hover:text-violet-500">
              Pricing
            </a>

            <a href="#faq" className="muted hover:text-violet-500">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 EchoGPT redesign concept.</span>

          <div className="flex gap-4">
            <Github size={16} />
            <Chrome size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}