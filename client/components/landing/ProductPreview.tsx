import Link from "next/link";
import {
  ArrowUp,
  Bot,
  Paperclip,
  Plus,
  Settings,
  Sidebar,
} from "lucide-react";

export default function ProductPreview() {
  return (
    <section id="preview" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Product preview
            </p>

            <h2 className="section-title">
              A chat interface that stays out of your way.
            </h2>

            <p className="muted mt-5 leading-7">
              Conversation history, model choice and quick actions stay
              exactly where users expect them.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/chat" className="btn-primary">
                Open redesigned app
              </Link>

              <Link href="/extension" className="btn-secondary">
                View extension
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101116] shadow-2xl shadow-violet-500/10">
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <div className="text-xs text-white/50">
                EchoGPT Workspace
              </div>

              <Sidebar size={16} className="text-white/50" />
            </div>

            <div className="grid min-h-[420px] grid-cols-[170px_1fr]">
              <aside className="hidden border-r border-white/10 p-3 sm:block">
                <button className="flex w-full items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                  <Plus size={13} />
                  New chat
                </button>

                <div className="mt-6 space-y-2 text-[11px] text-white/40">
                  <p className="px-2">TODAY</p>

                  <div className="rounded-lg bg-white/5 px-2 py-2 text-white/70">
                    Landing page ideas
                  </div>

                  <div className="px-2 py-2">
                    React performance
                  </div>
                </div>
              </aside>

              <div className="relative flex flex-col">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/70">
                  <span>EchoGPT Pro</span>
                  <Settings size={14} />
                </div>

                <div className="flex-1 space-y-5 p-5 text-xs">
                  <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-violet-500 px-4 py-3 text-white">
                    Help me plan a clean landing page for an AI product.
                  </div>

                  <div className="flex gap-3">
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                      <Bot size={14} />
                    </div>

                    <div className="max-w-[80%] leading-6 text-white/75">
                      Start with a clear value proposition, show the product
                      early, then explain the features.
                    </div>
                  </div>
                </div>

                <div className="m-4 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                  <div className="flex items-center gap-2 px-2 py-2 text-white/30">
                    <Paperclip size={14} />
                    <span>Message EchoGPT...</span>

                    <button className="ml-auto grid h-7 w-7 place-items-center rounded-lg bg-violet-500 text-white">
                      <ArrowUp size={14} />
                    </button>
                  </div>

                  <div className="mt-1 flex gap-1 text-[10px] text-white/40">
                    <span className="rounded-md bg-white/5 px-2 py-1">
                      EchoGPT Pro
                    </span>

                    <span className="rounded-md bg-white/5 px-2 py-1">
                      Fast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}