import type { EnvelopeShapeProps, EnvelopeSize } from "./envelope.types";

const sizeStyles: Record<
  EnvelopeSize,
  {
    h: string;
    w: string;
    title: string;
    seal: string;
    peek: string;
  }
> = {
  sm: {
    h: "h-[120px]",
    w: "w-[170px]",
    title: "text-[10px]",
    seal: "h-[18px] w-[18px] text-[7px]",
    peek: "left-[10px] right-[10px] bottom-[8px] h-[50px]",
  },
  md: {
    h: "h-40",
    w: "w-[200px]",
    title: "text-xs",
    seal: "h-6 w-6 text-[9px]",
    peek: "left-3.5 right-3.5 bottom-3 h-[60px]",
  },
};

export function EnvelopeShape({
  title,
  peekContent,
  seal,
  size = "md",
}: EnvelopeShapeProps) {
  const styles = sizeStyles[size];

  return (
    <div className={`group relative ${styles.h} ${styles.w} cursor-pointer`}>
        {/* {versionCount && versionCount > 1 && (
            <>
                <div className="absolute -left-1 -top-1 h-full w-full rounded-sm border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800" />
                <div className="absolute -left-2 -top-2 h-full w-full rounded-sm border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800" />
            </>
            )} */}
      <div className="absolute inset-0 overflow-hidden rounded-sm border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">

        {/* Folds */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-zinc-100 dark:bg-zinc-800"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />

        <div
          className="absolute bottom-0 left-0 top-0 w-1/2 bg-zinc-50 opacity-60 dark:bg-zinc-800"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />

        <div
          className="absolute bottom-0 right-0 top-0 w-1/2 bg-zinc-50 opacity-60 dark:bg-zinc-800"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        {/* Paper peek */}
        <div
          className={`absolute z-10 rounded-sm border border-zinc-200 bg-white px-2.5 py-2 transition-transform duration-300 group-hover:-translate-y-3.5 dark:border-zinc-700 dark:bg-zinc-900 ${styles.peek}`}
        >
          {peekContent}
        </div>

        {/* Flap */}
        <div
          className="absolute left-0 right-0 top-0 z-20 h-[55%] origin-top border-b border-zinc-200 bg-white transition-transform duration-300 group-hover:[transform:rotateX(40deg)] dark:border-zinc-700 dark:bg-zinc-900"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
        />

        {/* Title */}
        <p
          className={`pointer-events-none absolute inset-x-0 top-2.5 z-30 text-center font-serif font-medium text-zinc-800 dark:text-zinc-200 ${styles.title}`}
        >
          {title}
        </p>

        {/* Seal */}
        <div
          className={`absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 font-mono font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 ${styles.seal}`}
        >
          {seal}
        </div>

      </div>
    </div>
  );
}