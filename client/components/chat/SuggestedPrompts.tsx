import {
  FileText,
  Languages,
  Lightbulb,
  PenLine,
} from "lucide-react";

const prompts = [
  ["Summarize this document", FileText],
  ["Brainstorm product ideas", Lightbulb],
  ["Improve my writing", PenLine],
  ["Translate this text", Languages],
] as const;

interface SuggestedPromptsProps {
  onPick: (value: string) => void;
}

export default function SuggestedPrompts({
  onPick,
}: SuggestedPromptsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {prompts.map(([text, Icon]) => (
        <button
          key={text}
          onClick={() => onPick(text)}
          className="flex items-center gap-2 rounded-xl border border-black/10 p-3 text-left text-xs transition hover:border-violet-500/40 hover:bg-violet-500/5 dark:border-white/10"
        >
          <Icon
            size={15}
            className="shrink-0 text-violet-500"
          />

          <span>{text}</span>
        </button>
      ))}
    </div>
  );
}