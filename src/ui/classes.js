// Reusable Tailwind class strings. Keeps markup files short and the look consistent.
export const wrap = 'mx-auto w-full max-w-[88rem] px-5 sm:px-8'

const btn =
  'inline-flex items-center justify-center gap-2 border-2 border-fg px-5 py-3 font-mono text-sm font-bold tracking-wide shadow-hardsm transition-[transform,box-shadow,background-color,color] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
export const btnPrimary = `${btn} bg-accent text-onaccent`
export const btnGhost = `${btn} bg-bg text-fg hover:bg-fg hover:text-bg`

// Ink-wipe link: an underline that floods to a full highlight on hover.
export const inkLink =
  'bg-[linear-gradient(rgb(var(--accent)),rgb(var(--accent)))] bg-[length:100%_2px] bg-bottom bg-no-repeat transition-[background-size,color] duration-200 hover:bg-[length:100%_100%] hover:text-onaccent'

export const field =
  'w-full border-0 bg-transparent px-3 py-3 font-mono text-base text-fg placeholder:text-muted/70 focus:bg-surface focus-visible:outline-offset-[-3px]'
export const fieldLabel = 'block px-3 pt-2 font-mono text-sm font-bold'

export const stampBox = 'border-4 border-accent px-3 py-1 font-display font-black uppercase leading-none tracking-wide text-accent shadow-stamp'
export const hatch =
  'bg-[repeating-linear-gradient(135deg,transparent_0_8px,rgb(var(--fg)/.18)_8px_9px)]'
