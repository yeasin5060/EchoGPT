import {
  FileText,
  Languages,
  PenLine,
  Sparkles,
} from "lucide-react";

const actions = [
  ["Summarize", FileText],
  ["Rewrite", PenLine],
  ["Translate", Languages],
  ["Explain", Sparkles],
] as const;

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map(([label, Icon]) => (
        <button
          key={label}
          className="flex items-center gap-2 rounded-xl border border-black/10 bg-white p-3 text-left text-xs font-semibold hover:border-violet-500/40 hover:bg-violet-500/5 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <Icon
            size={15}
            className="text-violet-500"
          />
          {label}
        </button>
      ))}
    </div>
  );
}