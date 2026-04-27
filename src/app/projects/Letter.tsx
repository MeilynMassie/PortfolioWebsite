import { Project } from "@/types/project";
import { LinedPaper } from "./LinedPaper";
import { DemoDisplay } from "./DemoDisplay";

export function LetterModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/45 px-4 py-12"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg rounded-sm border border-zinc-200 bg-white px-10 py-10 font-serif dark:border-zinc-700 dark:bg-zinc-900"
        style={{ animation: "unfold 0.4s cubic-bezier(0.22,1,0.36,1) forwards" }}
      >
        <p className="mb-6 font-mono text-[11px] tracking-wider text-zinc-400 dark:text-zinc-500">{project.date}</p>
        <h2 className="mb-0.5 text-2xl font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h2>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack?.map((tech) => (
            <span key={tech} className="rounded-sm border border-zinc-200 px-2.5 py-0.5 font-mono text-[11px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">{tech}</span>
          ))}
        </div>
        <div className="mb-5 h-px bg-zinc-100 dark:bg-zinc-800" />
        <div className="relative mb-5">
          <LinedPaper>
            <p className="relative text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">{project.body}</p>
          </LinedPaper>
        </div>        
        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">GitHub</p>
        <p className="mb-6 font-mono text-[11px] tracking-wide text-zinc-400 dark:text-zinc-500">{project.github}</p>
        <DemoDisplay project={project} />
        <div className="mb-4 mt-6 h-px bg-zinc-100 dark:bg-zinc-800" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            <span className={`h-2 w-2 rounded-full ${project.statusColor}`} />
            {project.status}
          </div>
          <button onClick={onClose} className="rounded-sm border border-zinc-200 bg-transparent px-4 py-1.5 font-mono text-[11px] text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800">
            ← close
          </button>
        </div>
      </div>
      <style>{`
        @keyframes unfold {
          from { opacity: 0; transform: scaleY(0.6) translateY(-20px); }
          to   { opacity: 1; transform: scaleY(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}