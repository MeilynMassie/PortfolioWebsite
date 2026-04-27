import { EnvelopeShape } from "./EnvelopeShape";
import type { MoreEnvelopeProps } from "./envelope.types";

export function MoreEnvelope({
  onClick,
}: MoreEnvelopeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        aria-label="View all projects timeline"
        className="focus:outline-none"
      >
        <EnvelopeShape
          title="More Projects"
          seal="→"
          peekContent={
            <div className="flex h-full items-center justify-center gap-1.5">
              {[0,1,2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"
                />
              ))}
            </div>
          }
        />
      </button>

      <p className="font-mono text-[10px] tracking-wide text-zinc-400 dark:text-zinc-500">
        all projects — click to open
      </p>
    </div>
  );
}