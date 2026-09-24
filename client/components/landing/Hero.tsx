import Link from "next/link";
import {
  ArrowRight,
  Chrome,
  Command,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute left-1/2 top-10 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="container-x text-center">
        <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-600 dark:text-violet-300">
          <Sparkles size={14} />
          One workspace. Every model.
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-8xl">
          Think faster with{" "}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            every AI.
          </span>
        </h1>

        <p className="muted mx-auto mt-7 max-w-2xl text-base leading-7 sm:text-xl">
          EchoGPT brings models, conversations and productivity tools
          together in one calm, focused AI workspace.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/chat" className="btn-primary">
            <WandSparkles size={17} />
            Try EchoGPT
            <ArrowRight size={16} />
          </Link>

          <Link href="/extension" className="btn-secondary">
            <Chrome size={17} />
            Explore Extension
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Command size={13} />
            Keyboard-first
          </span>

          <span>•</span>
          <span>Responsive</span>

          <span>•</span>
          <span>Dark mode</span>

          <span>•</span>
          <span>Accessible</span>
        </div>
      </div>
    </section>
  );
}