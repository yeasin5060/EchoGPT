import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Keyboard,
  Moon,
  Shield,
  User,
} from "lucide-react";

const settings = [
  ["Account", "Manage profile and workspace preferences", User],
  ["Appearance", "Theme and interface density", Moon],
  ["Shortcuts", "Configure keyboard commands", Keyboard],
  ["Privacy", "Conversation history and data controls", Shield],
  ["Notifications", "Manage product notifications", Bell],
] as const;

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#08090c]">
      <div className="container-x py-8 sm:py-12">
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-500"
        >
          <ArrowLeft size={15} />
          Back to chat
        </Link>

        <div className="mx-auto mt-10 max-w-3xl">
          <h1 className="text-3xl font-black">Settings</h1>

          <p className="muted mt-2">
            Manage your EchoGPT workspace.
          </p>

          <div className="mt-8 space-y-3">
            {settings.map(([title, description, Icon]) => (
              <div
                key={title}
                className="glass flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Icon size={18} />
                </span>

                <div>
                  <b className="text-sm">{title}</b>

                  <p className="muted mt-1 text-xs">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}