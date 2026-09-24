import {
  Command,
  History,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { features } from "@/data/features";
import SectionHeading from "../ui/SectionHeading";

const icons = {
  Layers,
  Zap,
  History,
  Command,
  ShieldCheck,
  Sparkles,
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Built for flow"
          title="Everything you need, without the clutter."
          text="A modular interface designed around the way people actually use AI every day."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon =
              icons[feature.icon as keyof typeof icons];

            return (
              <article
                key={feature.title}
                className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/10 text-violet-500 transition group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="muted mt-2 text-sm leading-6">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}