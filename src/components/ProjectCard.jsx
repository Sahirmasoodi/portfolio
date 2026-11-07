import { btnPrimary, btnGhost, hatch, stampBox } from '../ui/classes'

// `flip` only mirrors the composition; project data and content are unchanged.
export default function ProjectCard({ project, flip = false }) {
  const { title, description, screenshot, tech, features, github, live, featured } = project
  return (
    <article className={`group relative grid grid-cols-[minmax(0,1fr)] items-start gap-y-8 lg:grid-cols-12`}>
      {/* Preview: a mounted print that straightens and lifts on hover */}
      <figure className={`relative lg:col-span-8 ${flip ? 'lg:col-start-5' : 'lg:col-start-1'} lg:row-start-1`}>
        <div className={`border-2 border-fg bg-surface p-2.5 shadow-hard transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:rotate-0 sm:p-4 ${flip ? 'rotate-[.8deg]' : '-rotate-[.8deg]'}`}>
          {screenshot ? (
            <img src={screenshot} alt={`Screenshot of ${title}`} loading="lazy" decoding="async" className="aspect-[16/9] w-full border border-fg object-cover object-top" />
          ) : (
            <div className={`grid aspect-[16/9] place-items-center border border-fg font-mono text-muted ${hatch}`} role="img" aria-label={`Screenshot placeholder for ${title}`}>No image</div>
          )}
        </div>
        {featured && <span className={`absolute -top-4 ${flip ? 'left-3' : 'right-3'} rotate-[-6deg] bg-bg text-lg ${stampBox}`}>Featured</span>}
      </figure>

      {/* Specification sheet: overlaps the preview and breaks the column edge */}
      <div className={`relative z-10 border-2 border-fg bg-bg p-6 shadow-hard sm:p-8 lg:col-span-6 lg:row-start-1 lg:mt-40 ${flip ? 'lg:col-start-1 lg:-mr-12' : 'lg:col-start-7 lg:-ml-12'}`}>
        <h3 className="font-display text-4xl font-black uppercase leading-[.9] sm:text-5xl">{title}</h3>
        <p className="mt-4 max-w-[52ch] text-lg">{description}</p>
        <ul className="mt-5 space-y-1 border-t-2 border-dashed border-fg/60 pt-4 font-mono text-sm">
          {features.map((f) => (
            <li key={f} className="flex gap-3"><span aria-hidden className="text-accent">&gt;</span>{f}</li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-x-1 font-mono text-sm font-bold" aria-label="Technologies">
          {tech.map((t) => <li key={t} className="after:ml-1 after:text-accent after:content-['/'] last:after:content-['']">{t}</li>)}
        </ul>
        {(github || live) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className={btnGhost}>Code</a>}
            {live && <a href={live} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Live demo</a>}
          </div>
        )}
      </div>
    </article>
  )
}
