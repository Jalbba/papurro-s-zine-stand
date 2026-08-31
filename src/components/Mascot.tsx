type MascotProps = {
  className?: string;
  title?: string;
};

/**
 * Hand-drawn lopsided dog-potato. Deliberately asymmetric.
 */
export function Mascot({ className, title = "Papurro, el perro-papa" }: MascotProps) {
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
        {/* scraggly hairs */}
        <path d="M86 34c-3-11 1-16 5-22" />
        <path d="M100 29c1-12 5-15 12-21" />
        <path d="M114 33c4-9 9-11 16-13" />

        {/* left floppy ear (bigger, droopier) */}
        <path
          d="M56 52c-16-6-30 6-28 24 2 22 12 38 26 44 8-14 8-40 2-68z"
          fill="var(--pink)"
        />
        {/* right ear (smaller, sticking up crooked) */}
        <path
          d="M150 46c14-10 27-2 26 14-1 14-8 26-19 32-6-12-8-32-7-46z"
          fill="var(--pink)"
        />

        {/* head blob - potato-ish, uneven */}
        <path
          d="M52 66c2-26 22-42 51-43 31-1 51 14 55 39 4 25-2 47-14 60-13 14-36 20-58 17-24-3-38-16-41-33-2-13 5-24 7-40z"
          fill="var(--yellow)"
        />

        {/* eyes: left big, right small */}
        <ellipse cx="83" cy="92" rx="13" ry="14" fill="var(--paper)" />
        <circle className="mascot-pupil" cx="85" cy="94" r="5.5" fill="var(--ink)" />
        <ellipse cx="126" cy="95" rx="8" ry="8.5" fill="var(--paper)" />
        <circle className="mascot-pupil" cx="127" cy="96" r="4" fill="var(--ink)" />
        {/* eyelids for blink */}
        <path className="mascot-lid" d="M69 92h28" />
        <path className="mascot-lid" d="M117 95h18" />

        {/* snout + nose */}
        <path d="M96 118c4 6 14 7 19 1" />
        <path d="M104 108c2-5 9-5 11 0-1 5-9 6-11 0z" fill="var(--ink)" />

        {/* goofy sideways tongue */}
        <path
          d="M112 120c9 2 18 9 17 19-1 9-11 13-17 8-5-4-6-15-0-27z"
          fill="var(--pink)"
        />
        <path d="M120 128c2 5 2 10 1 14" />

        {/* crooked cheek scribble */}
        <path d="M62 108c4 3 5 8 3 12" />
      </g>
    </svg>
  );
}

export const mascotFaviconHref =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 190"><g stroke="#141110" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M86 34c-3-11 1-16 5-22"/><path d="M100 29c1-12 5-15 12-21"/><path d="M114 33c4-9 9-11 16-13"/><path d="M56 52c-16-6-30 6-28 24 2 22 12 38 26 44 8-14 8-40 2-68z" fill="#FF4E88"/><path d="M150 46c14-10 27-2 26 14-1 14-8 26-19 32-6-12-8-32-7-46z" fill="#FF4E88"/><path d="M52 66c2-26 22-42 51-43 31-1 51 14 55 39 4 25-2 47-14 60-13 14-36 20-58 17-24-3-38-16-41-33-2-13 5-24 7-40z" fill="#FFD029"/><ellipse cx="83" cy="92" rx="13" ry="14" fill="#FFF6E5"/><circle cx="85" cy="94" r="6" fill="#141110"/><ellipse cx="126" cy="95" rx="8" ry="9" fill="#FFF6E5"/><circle cx="127" cy="96" r="4.5" fill="#141110"/><path d="M104 108c2-5 9-5 11 0-1 5-9 6-11 0z" fill="#141110"/><path d="M112 120c9 2 18 9 17 19-1 9-11 13-17 8-5-4-6-15 0-27z" fill="#FF4E88"/></g></svg>`,
  );
