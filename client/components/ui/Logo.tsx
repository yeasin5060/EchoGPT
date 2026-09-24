import { Sparkles } from "lucide-react";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/20">
        <Sparkles size={18} />
      </div>

      {!compact && (
        <span className="text-lg font-bold tracking-tight">
          EchoGPT
        </span>
      )}
    </div>
  );
}