"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { featuredProjects } from "@/data/projects";
import { Project } from "@/types/project";
import { EnvelopeCard } from "./EnvelopeCard";
import { MoreEnvelope } from "./MoreEnvelope";
import { LetterModal } from "./Letter";
import { TimelinePage } from "./Timeline";

type View = "home" | "timeline";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <>
      {view === "home" && (
        <div className="pt-60 sm:pt-24 w-full flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex flex-col items-center gap-12">
            <Header />
            <div className="flex flex-wrap justify-center gap-8">
              {featuredProjects.map((p) => (
                <EnvelopeCard key={p.id} project={p} onClick={() => setOpenProject(p)} />
              ))}
              <MoreEnvelope onClick={() => setView("timeline")} />
            </div>
          </main>
        </div>
      )}

      {view === "timeline" && (
        <TimelinePage onBack={() => setView("home")} onOpen={setOpenProject} />
      )}

      {openProject && (
        <LetterModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  );
}