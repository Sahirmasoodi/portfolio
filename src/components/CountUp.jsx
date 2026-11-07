import { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [v, setV] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    let raf, start
    const tick = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / 1200, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return <span ref={ref}>{prefix}{v}{suffix}</span>
}
