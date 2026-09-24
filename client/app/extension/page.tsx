import Link from "next/link";
import { ArrowLeft, Chrome } from "lucide-react";

import ExtensionPopup from "@/components/extension/ExtensionPopup";
import ExtensionSettings from "@/components/extension/ExtensionSettings";

export default function ExtensionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 dark:bg-[#08090c] sm:py-12">
      <div className="container-x">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-500"
        >
          <ArrowLeft size={15} />
          Back to website
        </Link>

        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/10 text-violet-500">
            <Chrome />
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            EchoGPT in your browser.
          </h1>

          <p className="muted mx-auto mt-4 max-w-2xl">
            A redesigned extension focused on quick actions,
            contextual prompts and fast access to conversations.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="flex justify-center rounded-[32px] border border-black/5 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-6 dark:border-white/5 sm:p-12">
            <ExtensionPopup />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Settings that stay understandable.
            </h2>

            <p className="muted mt-3 text-sm leading-6">
              Daily actions remain compact while deeper controls stay
              discoverable.
            </p>

            <div className="mt-6">
              <ExtensionSettings />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}