import { GraduationCap } from 'lucide-react'
import Section from '../components/Section'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" title="Education" className="!pt-0">
      <div className="flex items-start gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><GraduationCap size={24} aria-hidden /></span>
        <div>
          <h3 className="font-display text-xl font-bold">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.period}</p>
        </div>
      </div>
    </Section>
  )
}
