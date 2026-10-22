import Section from '../components/Section'
import CountUp from '../components/CountUp'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" className="!pt-0">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {achievements.map((a) => (
          <li key={a.label} className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent">
            <p className="font-display text-5xl font-extrabold tracking-tight text-accent"><CountUp to={a.to} prefix={a.prefix} suffix={a.suffix} /></p>
            <p className="mt-2 text-sm text-muted">{a.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
