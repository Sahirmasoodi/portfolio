import { useEffect, useState } from 'react'

// token colors: k keyword, v variable, a attribute, s string, b boolean, p punctuation
const color = { k: '#c4b5fd', v: '#e5e7eb', a: '#93c5fd', s: '#86efac', b: '#fca5a5', p: '#8b90a0' }
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
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f13] text-left shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/50">sahir.js</span>
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
              {typing && <span className="ml-px inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-violet-300 motion-reduce:animate-none" />}
              {!out.length && '\u00a0'}
            </div>
          )
        })}
      </pre>
    </div>
  )
}
