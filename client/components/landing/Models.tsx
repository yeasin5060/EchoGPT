import { models } from "@/data/models";
import SectionHeading from "../ui/SectionHeading";

export default function Models() {
  return (
    <section
      id="models"
      className="border-y border-black/5 bg-slate-50/70 py-20 dark:border-white/5 dark:bg-white/[0.02] sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Your model stack"
          title="Choose the right intelligence for the task."
          text="Keep model switching close to the prompt so the interface stays focused on the work."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {models.map((model) => (
            <div
              key={model.name}
              className="glass rounded-2xl p-4 transition hover:-translate-y-1"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${model.color} font-bold text-white`}
              >
                {model.icon}
              </div>

              <h3 className="mt-4 text-sm font-bold">
                {model.name}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {model.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}