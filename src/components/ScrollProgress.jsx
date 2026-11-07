import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return <div aria-hidden style={{ transform: `scaleX(${p})` }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-accent" />
}
