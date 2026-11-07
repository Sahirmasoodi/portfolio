import { useEffect, useState } from 'react'

// token colors: k keyword, v variable, a attribute, s string, b boolean, p punctuation
const color = { k: 'rgb(var(--accent))', v: 'rgb(var(--fg))', a: 'rgb(var(--tint))', s: 'rgb(var(--fg))', b: 'rgb(var(--accent))', p: 'rgb(var(--muted))' }
const lines = [
  [['const ', 'k'], ['sahir', 'v'], [' = {', 'p']],
  [['  name', 'a'], [': ', 'p'], ['"Sahir Ul Islam"', 's'], [',', 'p']],
  [['  role', 'a'], [': ', 'p'], ['"MERN Stack Developer"', 's'], [',', 'p']],
  [['  stack', 'a'], [': [', 'p'], ['"MongoDB"', 's'], [', ', 'p'], ['"Express"', 's'], [', ', 'p'], ['"React"', 's'], [', ', 'p'], ['"Node"', 's'], ['],', 'p']],
  [['  location', 'a'], [': ', 'p'], ['"Srinagar, India"', 's'], [',', 'p']],
  [['  experience', 'a'], [': [', 'p'], ['"Student Diwan"', 's'], [', ', 'p'], ['"Webkraft IT Solutions"', 's'], ['],', 'p']],
  [['  openToOpportunities', 'a'], [': ', 'p'], ['true', 'b'], [',', 'p']],
  [['};', 'p']],
]
const total = lines.reduce((n, l) => n + l.reduce((m, [t]) => m + t.length, 0) + 1, 0)

export default function CodeWindow() {
  const [n, setN] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0
  )
  useEffect(() => {
    if (n >= total) return
    const id = setTimeout(() => setN((x) => x + 1), n === 0 ? 700 : 24)
    return () => clearTimeout(id)
  }, [n])

  let budget = n
  return (
    <div role="img" aria-label="Code snippet describing Sahir Ul Islam: a MERN Stack Developer based in Srinagar, open to opportunities"
      className="border-2 border-fg bg-surface text-left shadow-hard">
      <div className="flex items-center gap-3 border-b-2 border-dashed border-fg px-4 py-2.5" aria-hidden>
        <span className="size-3 rounded-full border-2 border-fg bg-bg" />
        <span className="font-mono text-sm text-muted">sahir.js</span>
      </div>
      <pre aria-hidden className="min-h-[15.5rem] overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
        {lines.map((line, i) => {
          const out = []
          line.forEach(([text, c], j) => {
            if (budget <= 0) return
            const shown = text.slice(0, budget)
            budget -= text.length
            out.push(<span key={j} style={{ color: color[c] }}>{shown}</span>)
          })
          const lineDone = budget > 0
          if (lineDone) budget -= 1
          const typing = out.length > 0 && !lineDone
          return (
            <div key={i}>
              {out}
              {typing && <span className="ml-px inline-block h-4 w-[8px] translate-y-0.5 animate-pulse bg-accent motion-reduce:animate-none" />}
              {!out.length && '\u00a0'}
            </div>
          )
        })}
      </pre>
    </div>
  )
}
