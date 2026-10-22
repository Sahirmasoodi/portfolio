import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Route, Server, Database, Pause, Play } from 'lucide-react'
import Section from '../components/Section'

// Every point below comes from the resume / project descriptions.
const nodes = [
  { letter: 'R', name: 'React.js', layer: 'Client', Icon: Monitor,
    lead: 'Where the request starts: the interface people actually use.',
    points: ['Built 20+ responsive, reusable UI components with React, JavaScript and Hooks at Webkraft IT Solutions.',
      'Built and optimized 15+ frontend features with React, Redux Toolkit and Tailwind CSS at Student Diwan.',
      'Cut page load time by about 30% at Student Diwan and about 25% at Webkraft.',
      'Implemented English and Arabic localization across 30+ screens.'] },
  { letter: 'E', name: 'Express.js', layer: 'API', Icon: Route,
    lead: 'The REST layer that receives the request and decides what happens next.',
    points: ['Designed and maintained 10+ REST API endpoints at Student Diwan.',
      'Integrated REST APIs with third-party payment, notification and analytics services at Webkraft.',
      'Role-based access for Patient, Doctor and Admin in the Doctor Appointment Booking app.'] },
  { letter: 'N', name: 'Node.js', layer: 'Runtime', Icon: Server,
    lead: 'The JavaScript runtime that keeps the whole stack in one language.',
    points: ['Runs the server side of the Student Diwan REST API work, alongside Express.js and MongoDB.',
      'Powers the backend of the Doctor Appointment Booking platform.'] },
  { letter: 'M', name: 'MongoDB', layer: 'Database', Icon: Database,
    lead: 'Where the data lives, modeled with Mongoose.',
    points: ['The data layer behind 10+ REST endpoints at Student Diwan.',
      'Stores the data for the Doctor Appointment Booking app, including its three user roles.'] },
]

export default function Stack() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), 4500)
    return () => clearInterval(id)
  }, [playing])

  const pick = (i) => { setActive(i); setPlaying(false) }
  const n = nodes[active]

  return (
    <Section id="stack" title="MERN, end to end." lead="Follow a request from the browser to the database and see what I’ve built at each step.">
      <div role="tablist" aria-label="MERN stack layers" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {nodes.map(({ letter, name, layer, Icon }, i) => (
          <button key={name} role="tab" id={`tab-${i}`} aria-selected={active === i} aria-controls="stack-panel" onClick={() => pick(i)}
            className={`rounded-xl border p-4 text-left transition-colors ${active === i ? 'border-accent bg-accent/10' : 'border-line bg-surface hover:border-accent/60'}`}>
            <div className="flex items-center justify-between">
              <span className={`font-display text-4xl font-extrabold ${active === i ? 'text-accent' : 'text-muted'}`}>{letter}</span>
              <Icon size={20} className={active === i ? 'text-accent' : 'text-muted'} aria-hidden />
            </div>
            <p className="mt-3 font-semibold">{name}</p>
            <p className="text-sm text-muted">{layer}</p>
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-line" aria-hidden>
          <motion.div className="h-full rounded-full bg-accent" animate={{ width: `${((active + 1) / nodes.length) * 100}%` }} transition={{ duration: 0.5 }} />
        </div>
        <button onClick={() => setPlaying((p) => !p)} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent" aria-label={playing ? 'Pause automatic tour' : 'Play automatic tour'}>
          {playing ? <Pause size={14} aria-hidden /> : <Play size={14} aria-hidden />} {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      <div id="stack-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-5 min-h-[17rem] rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div key={n.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <h3 className="font-display text-2xl font-bold">{n.name} <span className="font-medium text-muted">as the {n.layer.toLowerCase()}</span></h3>
            <p className="mt-2 text-muted">{n.lead}</p>
            <ul className="mt-5 space-y-3">
              {n.points.map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />{p}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
