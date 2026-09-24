import { Bot, Copy, RotateCcw, User } from "lucide-react";

interface MessageProps {
  role: "user" | "assistant";
  children: React.ReactNode;
}

export default function Message({
  role,
  children,
}: MessageProps) {
  const user = role === "user";

  return (
    <div
      className={`flex gap-3 ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      {!user && (
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
          <Bot size={16} />
        </div>
      )}

      <div
        className={`max-w-[88%] sm:max-w-[720px] ${
          user
            ? "rounded-2xl rounded-tr-md bg-violet-500 px-4 py-3 text-white"
            : ""
        }`}
      >
        <div className="text-sm leading-7">
          {children}
        </div>

        {!user && (
          <div className="mt-3 flex gap-1 text-slate-400">
            <button
              aria-label="Copy response"
              className="rounded-lg p-1.5 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Copy size={14} />
            </button>

            <button
              aria-label="Regenerate response"
              className="rounded-lg p-1.5 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        )}
      </div>

      {user && (
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-black/10 dark:border-white/10">
          <User size={16} />
        </div>
      )}
    </div>
  );
}