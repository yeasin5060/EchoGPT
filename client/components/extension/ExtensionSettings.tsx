"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  ExternalLink,
  Flame,
  Globe,
  Keyboard,
  Moon,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";

interface SettingItem {
  id: string;
  title: string;
  text: string;
  icon: typeof Moon;
  activeStatus: string;
  color: string;
  bg: string;
}

const settingsData: SettingItem[] = [
  {
    id: "appearance",
    title: "Appearance & Theme",
    text: "Dark mode, glass intensity, and compact UI density",
    icon: Moon,
    activeStatus: "Auto (System)",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    id: "models",
    title: "Default AI Model Engine",
    text: "Pick frontier default router between GPT-4o & Claude 3.5",
    icon: SlidersHorizontal,
    activeStatus: "EchoGPT Pro Dual",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    id: "shortcuts",
    title: "Keyboard Quick Actions",
    text: "Configure ⌘+K triggers, inline floating tooltips & macros",
    icon: Keyboard,
    activeStatus: "⌘ + Shift + E",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    text: "Control local storage retention and zero-telemetry rules",
    icon: Shield,
    activeStatus: "Encrypted Zero-log",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "notifications",
    title: "Notifications & Audio",
    text: "Long-running synthesis alerts & sound feedback",
    icon: Bell,
    activeStatus: "Muted in focus",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

export default function ExtensionSettings() {
  const [activeItem, setActiveItem] = useState<string>("appearance");
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({
    quickTrigger: true,
    telemetry: false,
    autoParse: true,
  });

  const handleToggle = (key: string) => {
    setToggleState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-3.5">
      {settingsData.map((item) => {
        const Icon = item.icon;
        const isSelected = activeItem === item.id;

        return (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 ${
              isSelected
                ? "border-violet-500/50 bg-white shadow-xl shadow-violet-500/10 ring-1 ring-violet-500/20 -translate-y-0.5 dark:border-violet-400 dark:bg-[#11121a]"
                : "border-slate-200/80 bg-white/70 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
            }`}
          >
            {/* Left Column: Icon and Info */}
            <div className="flex items-center gap-3.5 min-w-0 pr-3">
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${item.bg} ${item.color}`}
              >
                <Icon size={19} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-300">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>

            {/* Right Column: Status pill and Chevron */}
            <div className="flex shrink-0 items-center gap-2.5">
              <span className="hidden sm:inline-block rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-1 text-[11px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {item.activeStatus}
              </span>

              <div
                className={`grid h-7 w-7 place-items-center rounded-lg text-slate-400 transition-all duration-300 ${
                  isSelected
                    ? "bg-violet-500/10 text-violet-600 translate-x-0.5 dark:text-violet-300"
                    : "group-hover:text-slate-700 group-hover:translate-x-0.5 dark:group-hover:text-white"
                }`}
              >
                <ChevronRight size={17} />
              </div>
            </div>
          </div>
        );
      })}

      {/* Mini Extension Live Quick Toggles Box */}
      <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1016]">
        <div className="mb-3.5 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-white/5">
          <div className="flex items-center gap-2">
            <Zap size={15} className="text-amber-500" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              Instant Toggles
            </span>
          </div>
          <span className="text-[10px] text-slate-400 dark:text-white/40">
            Saved automatically
          </span>
        </div>

        <div className="space-y-3">
          {/* Toggle 1 */}
          <div className="flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Auto-parse active web pages
              </p>
              <p className="text-[11px] text-slate-400 dark:text-white/40">
                Generate instant summaries when extension opens
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleToggle("autoParse")}
              className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 ${
                toggleState.autoParse
                  ? "bg-violet-600"
                  : "bg-slate-200 dark:bg-white/10"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  toggleState.autoParse ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Toggle 2 */}
          <div className="flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Zero-telemetry privacy guard
              </p>
              <p className="text-[11px] text-slate-400 dark:text-white/40">
                Never transmit browser tab URLs to telemetry logs
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleToggle("telemetry")}
              className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 ${
                toggleState.telemetry
                  ? "bg-violet-600"
                  : "bg-slate-200 dark:bg-white/10"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  toggleState.telemetry ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}