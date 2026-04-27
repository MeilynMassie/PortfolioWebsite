import { allProjects } from "@/data/projects";
import { Project } from "@/types/project";
import { EnvelopeShape } from "./EnvelopeShape";

// Group all projects by year, descrending order
function groupByYear(projects: Project[]) {
  const map = new Map<number, Project[]>();
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  for (const p of sorted) {
    if (!map.has(p.year)) map.set(p.year, []);
    map.get(p.year)!.push(p);
  }
  return map;
}


export function TimelinePage({
  onBack,
  onOpen,
}: {
  onBack: () => void;
  onOpen: (p: Project) => void;
}) {
  const grouped = groupByYear(allProjects);
  const years = Array.from(grouped.keys());

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 font-sans dark:bg-black">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-10 flex items-center gap-2 font-mono text-[11px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          ← back
        </button>

        <h1 className="mb-1 font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">All projects</h1>
        <p className="mb-12 font-mono text-[11px] tracking-wide text-zinc-400 dark:text-zinc-500">A history of work, in order</p>

        <div className="relative">
          {/* Spine */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />

          {years.map((year, yearIndex) => {
            const projects = grouped.get(year)!;
            // All projects in the same year share the same side; side flips per year
            const side = yearIndex % 2 === 0 ? "left" : "right";
            return (
              <div key={year}>
                {/* Year marker */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 font-mono text-[11px] font-medium tracking-widest text-zinc-400 dark:border-zinc-700 dark:bg-black dark:text-zinc-500">
                    {year}
                  </span>
                </div>

                {projects.map((project) => {
                  return (
                    <div key={project.id} className="relative mb-8 flex items-center">
                      {/* Left slot */}
                      <div className="flex flex-1 justify-end pr-8">
                        {side === "left" && (
                          <button onClick={() => onOpen(project)} className="focus:outline-none">
                            <EnvelopeShape
                              size="sm"
                              title={project.title}
                              seal={project.id}
                              peekContent={
                                <p className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500">{project.peekStack}</p>
                              }
                            />
                          </button>
                        )}
                      </div>

                      {/* Node on spine */}
                      <div className="absolute left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-600 dark:bg-black" />

                      {/* Right slot */}
                      <div className="flex flex-1 justify-start pl-8">
                        {side === "right" && (
                          <button onClick={() => onOpen(project)} className="focus:outline-none">
                            <EnvelopeShape
                              size="sm"
                              title={project.title}
                              seal={project.id}
                              peekContent={
                                <p className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500">{project.peekStack}</p>
                              }
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}