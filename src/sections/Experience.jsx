import { motion } from 'framer-motion'
import Section from '../components/Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Work experience" lead="Most recent role first.">
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experience.map((job) => (
          <motion.li key={job.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45 }}
            className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="absolute -left-[31px] top-9 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[47px]" aria-hidden />
            <h3 className="font-display text-2xl font-bold">{job.role}</h3>
            <p className="mt-1 font-medium text-accent">{job.company}</p>
            <p className="mt-0.5 text-sm text-muted">{job.meta}</p>
            <ul className="mt-5 space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-muted"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
