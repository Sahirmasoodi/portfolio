import { wrap } from '../ui/classes'

// Sheet number comes from a CSS counter reset on <main>, so no data or props changed.
export default function Section({ id, title, lead, children, className = '', layout = 'side' }) {
  const side = layout === 'side' && !!title
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`[counter-increment:sheet] border-t-2 border-fg py-16 sm:py-24 ${className}`}>
      <div className={`${wrap} ${side ? 'grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[21rem_minmax(0,1fr)] xl:gap-16' : ''}`}>
        {title && (
          <header className={side ? 'lg:sticky lg:top-24 lg:self-start' : 'mb-12 max-w-4xl'}>
            <span aria-hidden className="block font-display text-[6.5rem] font-black leading-[.78] text-transparent [-webkit-text-stroke:2px_rgb(var(--accent))] before:content-[counter(sheet,decimal-leading-zero)] sm:text-[8.5rem]" />
            <h2 id={`${id}-title`} className={`mt-4 font-display font-extrabold uppercase leading-[.92] tracking-[-.005em] ${side ? 'text-[2rem] sm:text-4xl' : 'text-[clamp(2.4rem,6vw,5rem)]'}`}>{title}</h2>
            {lead && <p className="mt-4 max-w-[34ch] border-l-4 border-accent pl-4 italic text-muted">{lead}</p>}
          </header>
        )}
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
