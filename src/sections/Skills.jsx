import Section from '../components/Section'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" lead="The languages, frameworks and tools I use day to day.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent"><Icon size={20} aria-hidden /></span>
              <h3 className="font-display text-lg font-bold">{title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((s) => <li key={s} className="badge">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
