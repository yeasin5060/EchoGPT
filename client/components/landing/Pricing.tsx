import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For trying the workspace",
    features: [
      "Core AI chat",
      "Conversation history",
      "Quick actions",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "For everyday AI work",
    features: [
      "More model access",
      "Priority responses",
      "Advanced workflows",
      "Extension tools",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "$24",
    description: "For collaborative teams",
    features: [
      "Shared workspace",
      "Team controls",
      "Usage insights",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Pick the workspace that fits your flow."
          text="Illustrative pricing for this redesign concept."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-6 ${
                plan.featured
                  ? "border-violet-500 bg-violet-500/[0.06] shadow-xl shadow-violet-500/10"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-violet-500 px-2.5 py-1 text-[10px] font-bold text-white">
                  POPULAR
                </span>
              )}

              <h3 className="text-lg font-bold">{plan.name}</h3>

              <p className="muted mt-1 text-sm">
                {plan.description}
              </p>

              <div className="mt-7 text-4xl font-black">
                {plan.price}

                {plan.price !== "$0" && (
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                )}
              </div>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check
                      size={16}
                      className="text-violet-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/chat"
                className={`mt-8 w-full ${
                  plan.featured
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}