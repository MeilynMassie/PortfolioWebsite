export function LinedPaper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, #e5e7eb 27px, #e5e7eb 28px)",
      }}
    >
      {children}
    </div>
  );
}