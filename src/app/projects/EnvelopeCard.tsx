import { EnvelopeShape } from "./EnvelopeShape";
import type { EnvelopeCardProps } from "./envelope.types";

export function EnvelopeCard({
  project,
  onClick,
}: EnvelopeCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        aria-label={`Open ${project.title}`}
        className="focus:outline-none"
      >
        <EnvelopeShape
          title={project.title}
          seal={project.id}
          peekContent={
            <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500">
              {project.peekStack}
            </p>
          }
        />
      </button>

      <p className="font-mono text-[10px] tracking-wide text-zinc-400 dark:text-zinc-500">
        project {project.id} — click to open
      </p>
    </div>
  );
}