import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center border-2 border-fg bg-accent font-mono text-xl font-bold text-onaccent shadow-hardsm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-hard">
      ↑
    </button>
  )
}
