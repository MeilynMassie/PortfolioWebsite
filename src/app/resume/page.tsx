import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-4 bg-white dark:bg-black">
        <Header />

        <div className=" pt-25 sm:pt-12 w-full flex flex-col items-center gap-6">
          <a
            href="/MeilynMassieResume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            Download Resume (PDF)
          </a>

          <div className="w-full flex flex-col items-center gap-1">
            <img
              src="/images/resume/MeilynMassieResume-1.jpg"
              alt="Meilyn Massie Resume Page 1"
              className="w-full max-w-2xl shadow-md"
            />
            <img
              src="/images/resume/MeilynMassieResume-2.jpg"
              alt="Meilyn Massie Resume Page 2"
              className="w-full max-w-2xl shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}