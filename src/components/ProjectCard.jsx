import { Github, ExternalLink, Layers, Star } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, description, screenshot, tech, features, github, live, featured } = project
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      {screenshot ? (
        <img src={screenshot} alt={`Screenshot of ${title}`} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
      ) : (
        <div className="grid aspect-[16/9] place-items-center border-b border-line bg-bg text-muted" role="img" aria-label={`Screenshot placeholder for ${title}`}>
          <Layers size={36} aria-hidden />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{title}</h3>
          {featured && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent/15 px-2 py-1 text-xs font-semibold text-accent">
              <Star size={12} aria-hidden /> Featured
            </span>
          )}
        </div>
        <p className="mt-2 text-muted">{description}</p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {features.map((f) => (
            <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />{f}</li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {tech.map((t) => <li key={t} className="badge">{t}</li>)}
        </ul>
        {(github || live) && (
          <div className="mt-6 flex flex-wrap gap-3 pt-1">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2"><Github size={16} aria-hidden /> Code</a>}
            {live && <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2"><ExternalLink size={16} aria-hidden /> Live demo</a>}
          </div>
        )}
      </div>
    </article>
  )
}
