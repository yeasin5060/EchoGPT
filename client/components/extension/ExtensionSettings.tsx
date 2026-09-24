import {
  Bell,
  Keyboard,
  Moon,
  Shield,
  SlidersHorizontal,
} from "lucide-react";

const settings = [
  [
    "Appearance",
    "Theme, density and interface",
    Moon,
  ],
  [
    "AI models",
    "Choose your default model",
    SlidersHorizontal,
  ],
  [
    "Keyboard shortcuts",
    "Customize quick actions",
    Keyboard,
  ],
  [
    "Privacy",
    "History and data preferences",
    Shield,
  ],
  [
    "Notifications",
    "Control extension alerts",
    Bell,
  ],
] as const;

export default function ExtensionSettings() {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {settings.map(([title, text, Icon]) => (
        <button
          key={title}
          className="flex w-full items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 text-left transition hover:border-violet-500/30 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-500">
            <Icon size={18} />
          </span>

          <span className="flex-1">
            <b className="block text-sm">{title}</b>
            <small className="text-xs text-slate-500">
              {text}
            </small>
          </span>

          <span className="text-slate-400">›</span>
        </button>
      ))}
    </div>
  );
}