import type { Project } from "../../types/project";

export function DemoDisplay({ project }: { project: Project }) {
  if (project.websiteDemo) {
    return (
      <div className="mb-5">
        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Link</p>
        <a href={project.websiteDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    );
  }
  
  if (project.videoDemo) {
    return (
      <div className="mb-5">
        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Video Demo</p>
        <video 
          preload="none" 
          muted 
          playsInline 
          controls
          poster={project.videoPoster}
          >
          <source src={project.videoDemo} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (project.imagesDemo?.length) {
    return (
      <div className="grid gap-2">
        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Images </p>
        {project.imagesDemo.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} screenshot ${i + 1}`}
            className="w-full rounded-sm border border-zinc-200 dark:border-zinc-700"
          />
        ))}
      </div>
    );
  }

  return null;
}