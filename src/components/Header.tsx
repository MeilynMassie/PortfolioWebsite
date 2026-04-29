import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 shadow-md">
      <div className="relative flex flex-col items-center gap-2 sm:absolute sm:top-4 sm:left-4">
        <a
          href="https://linkedin.com/in/meilynmassie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <img src="images/logos/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          <span>linkedin.com/in/meilynmassie</span>
        </a>
        <a
          href="https://github.com/MeilynMassie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <img src="images/logos/github.svg" alt="GitHub" className="w-5 h-5" />
          <span>github.com/MeilynMassie</span>
        </a>
      </div>

      <header>
        <h1 className="text-xl font-bold text-center">Meilyn Massie's Portfolio</h1>
      </header>

      <NavBar />
    </div>
  );
}