import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

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
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg transition hover:brightness-110">
      <ArrowUp size={18} aria-hidden />
    </button>
  )
}
