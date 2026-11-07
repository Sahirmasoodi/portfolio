import Section from '../components/Section'
import CountUp from '../components/CountUp'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" layout="top" className="!pt-4">
      <ul className="grid border-y-[6px] border-double border-fg sm:grid-cols-2 lg:grid-cols-5">
        {achievements.map((a, i) => (
          <li key={a.label} className={`border-b-2 border-dashed border-fg/60 px-4 py-6 last:border-b-0 sm:border-b-0 lg:border-l-2 lg:border-dashed lg:first:border-l-0 ${i % 2 ? 'lg:pt-14' : ''}`}>
            <p className="font-display text-[5.5rem] font-black leading-[.8] text-accent"><CountUp to={a.to} prefix={a.prefix} suffix={a.suffix} /></p>
            <p className="mt-3 max-w-[22ch] italic">{a.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
