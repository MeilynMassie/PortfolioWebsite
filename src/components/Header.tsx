import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 shadow-md">
      <header>
        <h1 className="text-xl font-bold text-center">Meilyn Massie Portfolio</h1>
      </header>
      <NavBar />
    </div>
  );
}