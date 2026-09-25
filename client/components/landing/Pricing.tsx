"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Ideal for exploring models and individual lightweight tasks.",
    badge: "Free forever",
    features: [
      "Access to standard EchoGPT model",
      "Unlimited basic conversations",
      "Standard response streaming speed",
      "Full conversation history retention",
      "Community support access",
    ],
    ctaText: "Start Free",
    featured: false,
    gradient: "from-slate-500/10 to-transparent",
  },
  {
    name: "Pro",
    monthlyPrice: 12,
    annualPrice: 9,
    description: "For professionals requiring premier model access and speed.",
    badge: "MOST POPULAR",
    features: [
      "Frontier models (GPT-4o, Claude 3.5 Sonnet)",
      "Turbo response speed with zero queuing",
      "Chrome extension sync & instant hotkeys",
      "Parallel dual-model comparison",
      "Priority feature updates & direct support",
      "Custom system prompts & workspace presets",
    ],
    ctaText: "Upgrade to Pro",
    featured: true,
    gradient: "from-violet-600/20 via-fuchsia-500/15 to-cyan-500/10",
  },
  {
    name: "Team",
    monthlyPrice: 24,
    annualPrice: 19,
    description: "Built for teams and agencies needing collaboration & analytics.",
    badge: "Collaborative",
    features: [
      "Everything included in Pro plan",
      "Multi-seat shared project workspaces",
      "Team prompt library & template sharing",
      "Consolidated centralized billing & invoices",
      "Admin role management & audit logs",
      "Dedicated 99.9% uptime SLA guarantee",
    ],
    ctaText: "Get Team License",
    featured: false,
    gradient: "from-cyan-500/10 to-transparent",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute -bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="TRANSPARENT PRICING"
          title="Pick the workspace that fits your flow."
          text="Scale seamlessly from solitary prototyping to high-velocity team orchestration."
        />

        {/* Billing Toggle (Monthly vs Yearly with 20% discount badge) */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={`cursor-pointer text-xs font-semibold transition ${
              billingCycle === "monthly"
                ? "text-slate-900 dark:text-white"
                : "text-slate-400 dark:text-slate-500"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly billing
          </span>

          <button
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            className="relative h-7 w-13 rounded-full bg-slate-200 p-0.5 transition-colors duration-300 focus:outline-none dark:bg-white/10"
            role="switch"
            aria-checked={billingCycle === "yearly"}
            aria-label="Toggle annual pricing"
          >
            <div
              className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-violet-500 ${
                billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`flex cursor-pointer items-center gap-1.5 text-xs font-semibold transition ${
              billingCycle === "yearly"
                ? "text-slate-900 dark:text-white"
                : "text-slate-400 dark:text-slate-500"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Annual billing
            <span className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const currentPrice =
              billingCycle === "yearly" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[30px] border p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured
                    ? "border-violet-500 bg-white/90 shadow-2xl shadow-violet-500/20 ring-1 ring-violet-500/50 dark:border-violet-500/60 dark:bg-[#0e0f17] dark:shadow-violet-500/15"
                    : "border-slate-200/80 bg-white/60 hover:border-slate-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                }`}
              >
                {/* Background ambient corner gradient */}
                <div
                  className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-b ${plan.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Popular Pill or Regular Badge */}
                {plan.featured ? (
                  <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-violet-500/30">
                    <Sparkles size={11} className="animate-spin-slow" />
                    <span>{plan.badge}</span>
                  </div>
                ) : (
                  <span className="absolute right-6 top-6 rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>

                  <p className="muted mt-2 text-xs leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price display with animation transition */}
                  <div className="mt-8 flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                      ${currentPrice}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {plan.monthlyPrice === 0 ? "free" : "/ month, billed annually"}
                    </span>
                  </div>

                  {billingCycle === "yearly" && plan.monthlyPrice > 0 && (
                    <p className="mt-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      ${plan.annualPrice * 12}/yr (saved ${(plan.monthlyPrice - plan.annualPrice) * 12}/year)
                    </p>
                  )}

                  {/* Feature list with custom styled checkmarks */}
                  <div className="mt-8 border-t border-slate-100 pt-6 dark:border-white/5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-3">
                      Included with {plan.name}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              plan.featured
                                ? "bg-violet-500 text-white"
                                : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            }`}
                          >
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action button */}
                <div className="mt-9 pt-4">
                  <Link
                    href="/chat"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all duration-300 ${
                      plan.featured
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25 hover:bg-violet-500 hover:shadow-violet-500/40 hover:scale-[1.02]"
                        : "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-violet-400 hover:bg-slate-50 hover:scale-[1.02] dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee & Trust Badges Row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5 font-medium">
            <Zap size={14} className="text-amber-500" />
            Instant access after signup
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Check size={14} className="text-emerald-500" />
            Cancel anytime in 1 click
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles size={14} className="text-violet-500" />
            No hidden setup fees
          </span>
        </div>
      </div>
    </section>
  );
}