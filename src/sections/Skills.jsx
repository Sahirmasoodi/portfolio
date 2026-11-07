import Section from '../components/Section'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" lead="The languages, frameworks and tools I use day to day.">
      <dl className="border-b-2 border-fg">
        {skillCategories.map(({ title, items }) => (
          <div key={title} className="group grid gap-x-8 gap-y-2 border-t-2 border-fg py-5 transition-colors hover:bg-surface md:grid-cols-[14rem_1fr]">
            <dt className="font-display text-3xl font-black uppercase leading-none transition-colors group-hover:text-accent">{title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-base">
                {items.map((s) => <li key={s} className="after:ml-2 after:text-accent after:content-['/'] last:after:content-['']">{s}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
