import Section from '../components/Section'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" title="Education" className="!pt-4">
      <div className="ml-auto max-w-2xl -rotate-1 border-[3px] border-dashed border-fg p-6 sm:p-8">
        <h3 className="font-display text-3xl font-black uppercase leading-[.95] sm:text-4xl">{education.degree}</h3>
        <p className="mt-3 font-mono text-muted">{education.period}</p>
      </div>
    </Section>
  )
}
