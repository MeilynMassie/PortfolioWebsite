import Header from "@/components/Header";
import RotatingSkills from "@/components/RotatingSkills";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Header />
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-8">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              Hi! My name is Meilyn Massie and welcome to my portfolio!
            </h1>
            <h1 className="text-3xl mt-6">
              Education: 
            </h1>
            <h1 className="text-3xl mt-6">
              Work Experience: 
            </h1>
          </div>

          {/* Right: Nav + Rotating Skills */}
          <div className="flex-1 flex flex-col items-center md:items-end gap-4">
            <RotatingSkills />
          </div>
        </div>
      </main>
    </div>
  );
}
