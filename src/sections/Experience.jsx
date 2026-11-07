import Section from '../components/Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Work experience" lead="Most recent role first.">
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="relative border-2 border-fg bg-surface p-6 shadow-hard odd:lg:mr-16 odd:lg:-rotate-[.5deg] even:lg:ml-16 even:lg:rotate-[.5deg] sm:p-8">
            <span aria-hidden className="absolute -top-3 left-6 h-6 w-20 bg-accent/80" />
            <p className="font-mono text-sm text-muted">{job.meta}</p>
            <h3 className="mt-1 font-display text-5xl font-black uppercase leading-[.9]">{job.company}</h3>
            <p className="mt-1 font-display text-2xl font-bold uppercase text-accent">{job.role}</p>
            <ul className="mt-6 space-y-2.5 border-t-2 border-dashed border-fg/60 pt-5">
              {job.points.map((p) => (
                <li key={p} className="flex max-w-[70ch] gap-3"><span aria-hidden className="font-mono text-accent">–</span>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
