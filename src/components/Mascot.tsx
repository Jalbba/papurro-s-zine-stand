type MascotProps = {
  className?: string;
  title?: string;
};

/**
 * Hand-drawn potato-creature with wobbly antennae and stubby legs.
 * Deliberately lopsided: nothing here is symmetric on purpose.
 */
export function Mascot({ className, title = "Papurro, la papa con antenas" }: MascotProps) {
  return (
    <svg
      viewBox="0 0 200 190"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        className="mascot-body"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* antennae: left long & curly, right short & crooked */}
        <path d="M74 48c-6-14-14-20-10-32" />
        <circle cx="63" cy="12" r="9" fill="var(--pink)" />
        <path d="M126 44c7-9 15-11 19-19" />
        <circle cx="150" cy="20" r="6.5" fill="var(--cyan)" />

        {/* legs (uneven, one wider apart) */}
        <path d="M78 148v20" />
        <path d="M64 170c6-5 16-4 21 1" fill="var(--pink)" />
        <path d="M124 150v16" />
        <path d="M112 168c6-5 17-4 22 2" fill="var(--pink)" />

        {/* potato body - bumpy, uneven blob */}
        <path
          d="M52 88c-4-24 10-42 34-45 22-3 32 4 48 2 18-2 30 12 28 34-2 20 4 36-8 50-13 15-38 19-60 15-22-4-34-14-38-30-3-11-2-17-4-26z"
          fill="var(--yellow)"
        />

        {/* potato eyes/sprout dents */}
        <path d="M64 118c3 2 4 6 2 9" />
        <path d="M148 108c-4 1-6 5-5 9" />
        <path d="M92 62c3 1 4 4 3 6" />

        {/* eyeballs on stalks-ish: left huge, right squinty */}
        <ellipse cx="84" cy="96" rx="16" ry="17" fill="var(--paper)" />
        <circle className="mascot-pupil" cx="87" cy="99" r="6.5" fill="var(--ink)" />
        <ellipse cx="127" cy="99" rx="10" ry="9" fill="var(--paper)" />
        <circle className="mascot-pupil" cx="129" cy="101" r="4.5" fill="var(--ink)" />
        {/* eyelids for blink */}
        <path className="mascot-lid" d="M68 96h32" />
        <path className="mascot-lid" d="M117 99h20" />

        {/* lopsided grin + one tooth */}
        <path d="M92 126c8 12 24 12 32 0" />
        <path d="M106 134v7" />

        {/* cheek scribble */}
        <path d="M60 104c4 2 6 6 5 10" />
      </g>
    </svg>
  );
}

export const mascotFaviconHref =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 190"><g stroke="#141110" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M74 48c-6-14-14-20-10-32"/><circle cx="63" cy="12" r="9" fill="#FF4E88"/><path d="M126 44c7-9 15-11 19-19"/><circle cx="150" cy="20" r="6.5" fill="#37D5D6"/><path d="M78 148v20"/><path d="M64 170c6-5 16-4 21 1"/><path d="M124 150v16"/><path d="M112 168c6-5 17-4 22 2"/><path d="M52 88c-4-24 10-42 34-45 22-3 32 4 48 2 18-2 30 12 28 34-2 20 4 36-8 50-13 15-38 19-60 15-22-4-34-14-38-30-3-11-2-17-4-26z" fill="#FFD029"/><ellipse cx="84" cy="96" rx="16" ry="17" fill="#FFF6E5"/><circle cx="87" cy="99" r="7" fill="#141110"/><ellipse cx="127" cy="99" rx="10" ry="9" fill="#FFF6E5"/><circle cx="129" cy="101" r="5" fill="#141110"/><path d="M92 126c8 12 24 12 32 0"/></g></svg>`,
  );
