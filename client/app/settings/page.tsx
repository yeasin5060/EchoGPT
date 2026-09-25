"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Database,
  ExternalLink,
  Flame,
  Globe,
  HardDrive,
  Key,
  Keyboard,
  Lock,
  Moon,
  Save,
  Shield,
  Sliders,
  Sparkles,
  Sun,
  User,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "account" | "appearance" | "models" | "shortcuts" | "privacy" | "data"
  >("account");

  const [savedToast, setSavedToast] = useState(false);

  // Settings states
  const [name, setName] = useState("Alex Morgan");
  const [email, setEmail] = useState("alex@echogpt.app");
  const [defaultModel, setDefaultModel] = useState("EchoGPT Pro Dual-Engine");
  const [streamingSpeed, setStreamingSpeed] = useState("Fast (sub-400ms)");
  const [autoSaveHistory, setAutoSaveHistory] = useState(true);
  const [telemetry, setTelemetry] = useState(false);
  const [compactDensity, setCompactDensity] = useState(false);

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  const navItems = [
    { id: "account", label: "Account & Profile", icon: User, badge: "Pro" },
    { id: "appearance", label: "Appearance & Theme", icon: Moon, badge: null },
    { id: "models", label: "AI Models & Router", icon: Sliders, badge: "5 Ready" },
    { id: "shortcuts", label: "Keyboard Shortcuts", icon: Keyboard, badge: "⌘K" },
    { id: "privacy", label: "Privacy & Security", icon: Shield, badge: "Strict" },
    { id: "data", label: "Data & Storage", icon: HardDrive, badge: "72% used" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50/70 py-8 dark:bg-[#07080c] sm:py-12">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-x">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/chat"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-x-1 hover:border-violet-500/40 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-white"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Chat Workspace</span>
          </Link>

          <button
            type="button"
            onClick={handleSave}
            className="btn-primary flex items-center gap-1.5 px-4 py-2 text-xs font-bold shadow-md shadow-violet-500/25"
          >
            {savedToast ? (
              <>
                <Check size={14} className="animate-in zoom-in-50" />
                <span>Saved successfully!</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>

        {/* Page Title */}
        <div className="mt-8">
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">
            Workspace Settings
          </h1>
          <p className="muted mt-1 text-sm">
            Customize engine routing, display ergonomics, shortcuts, and privacy parameters.
          </p>
        </div>

        {/* Main Settings Grid: Navigation Sidebar + Content Area */}
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[260px_1fr]">
          {/* Navigation Sidebar */}
          <aside className="space-y-1.5 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0d14]/80">
            {navItems.map(({ id, label, icon: Icon, badge }) => {
              const isSelected = activeTab === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id as typeof activeTab)}
                  className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      size={15}
                      className={
                        isSelected
                          ? "text-white"
                          : "text-slate-400 group-hover:text-violet-500 dark:text-white/40"
                      }
                    />
                    <span>{label}</span>
                  </div>

                  {badge && (
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </aside>

          {/* Dynamic Content Panel */}
          <div className="space-y-6 rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0d0e15]/90 sm:p-8">
            {/* Account Panel */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Profile Information
                  </h2>
                  <p className="muted text-xs">
                    Update your account details and display name across workspaces.
                  </p>
                </div>

                <div className="flex items-center gap-4 border-b border-slate-100 pb-6 dark:border-white/5">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-violet-500/20">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{email}</p>
                    <span className="mt-1.5 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      EchoGPT Pro Member
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Panel */}
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Appearance & Theme
                  </h2>
                  <p className="muted text-xs">
                    Choose your preferred color theme, glass intensity and layout density.
                  </p>
                </div>

                {/* Theme Mode Selector Cards */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { mode: "light", label: "Light Mode", icon: Sun },
                    { mode: "dark", label: "Dark Mode", icon: Moon },
                    { mode: "system", label: "System Auto", icon: Globe },
                  ].map(({ mode, label, icon: Icon }) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setTheme(mode)}
                      className={`flex flex-col items-center gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                        theme === mode
                          ? "border-violet-500 bg-violet-500/10 text-violet-700 shadow-md ring-2 ring-violet-500/20 dark:border-violet-400 dark:text-white"
                          : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon size={20} className={theme === mode ? "text-violet-600 dark:text-violet-400" : ""} />
                      <span className="text-xs font-bold">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Compact Density Toggle */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-5 dark:border-white/5">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Compact Spacing Density
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Reduces message paddings and increases visible lines per screen.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCompactDensity(!compactDensity)}
                    className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 ${
                      compactDensity ? "bg-violet-600" : "bg-slate-200 dark:bg-white/10"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        compactDensity ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* AI Models Panel */}
            {activeTab === "models" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Frontier Model Configuration
                  </h2>
                  <p className="muted text-xs">
                    Configure your fallback engines, streaming preferences, and latency limits.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Default Engine
                    </label>
                    <select
                      value={defaultModel}
                      onChange={(e) => setDefaultModel(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#151620] dark:text-white"
                    >
                      <option>EchoGPT Pro Dual-Engine</option>
                      <option>GPT-4o (OpenAI)</option>
                      <option>Claude 3.5 Sonnet (Anthropic)</option>
                      <option>Gemini 1.5 Pro (Google)</option>
                      <option>Llama 3.3 70B (Meta)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Streaming Latency Target
                    </label>
                    <select
                      value={streamingSpeed}
                      onChange={(e) => setStreamingSpeed(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#151620] dark:text-white"
                    >
                      <option>Fast (sub-400ms) - Optimized for typing flow</option>
                      <option>Standard (sub-700ms) - Higher reasoning verification</option>
                      <option>Deep Analysis - Maximum reasoning depth</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Shortcuts Panel */}
            {activeTab === "shortcuts" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Keyboard Shortcuts & Macros
                  </h2>
                  <p className="muted text-xs">
                    Accelerate your workflow with ergonomic keystrokes.
                  </p>
                </div>

                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:divide-white/5 dark:border-white/10 dark:bg-white/[0.02]">
                  {[
                    ["Open Command Palette", "⌘ + K"],
                    ["New Conversation Thread", "⌘ + N"],
                    ["Toggle Browser Extension", "⌘ + Shift + E"],
                    ["Switch Active Model Engine", "⌘ + M"],
                    ["Search Conversation History", "⌘ + F"],
                    ["Focus Chat Composer", "/"],
                  ].map(([action, keys]) => (
                    <div
                      key={action}
                      className="flex items-center justify-between p-3.5 text-xs"
                    >
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {action}
                      </span>
                      <kbd className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-slate-700 shadow-xs dark:border-white/10 dark:bg-white/10 dark:text-white">
                        {keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy Panel */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Privacy & Telemetry Controls
                  </h2>
                  <p className="muted text-xs">
                    Enforce zero-knowledge encryption and local retention rules.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                        Zero-Telemetry Guarantee
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Prompts are never stored on logging disks or used to train foundational weights.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTelemetry(!telemetry)}
                      className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 ${
                        !telemetry ? "bg-emerald-600" : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                          !telemetry ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                        Auto-Save Conversation History
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Persist ongoing threads across sessions with client-side encryption.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAutoSaveHistory(!autoSaveHistory)}
                      className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 ${
                        autoSaveHistory ? "bg-violet-600" : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                          autoSaveHistory ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Data & Storage Panel */}
            {activeTab === "data" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Data Storage & Export
                  </h2>
                  <p className="muted text-xs">
                    Inspect your encrypted local workspace storage and export conversations.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">
                      Encrypted Workspace Cache
                    </span>
                    <span className="font-bold text-violet-600 dark:text-violet-400">
                      72.4 MB / 100 MB
                    </span>
                  </div>

                  <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                    >
                      Export All Chats (JSON)
                    </button>
                    <button
                      type="button"
                      className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-3.5 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-500/20 dark:text-rose-400"
                    >
                      Clear Local Cache
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}