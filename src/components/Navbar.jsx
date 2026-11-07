import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { wrap, btnPrimary } from '../ui/classes'

const ids = navItems.map((n) => n.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const links = navItems.filter((n) => n.id !== 'contact')
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b-2 border-fg bg-bg transition-shadow ${scrolled || open ? 'shadow-hardsm' : ''}`}>
      <nav className={`${wrap} flex h-14 items-center justify-between gap-4`} aria-label="Main">
        <a href="#home" className="font-display text-2xl font-black uppercase leading-none tracking-tight">{site.name}</a>
        <ul className="hidden items-stretch xl:flex">
          {links.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                className="block border-x border-transparent px-3 py-2 font-mono text-sm transition-colors hover:border-fg aria-[current=true]:bg-fg aria-[current=true]:text-bg">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className={`${btnPrimary} hidden !py-1.5 sm:inline-flex`}>Contact me</a>
          <ThemeToggle />
          <button className="relative size-10 border-2 border-fg xl:hidden" onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            <span aria-hidden className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-200 ${open ? 'top-1/2 rotate-45' : 'top-3'}`} />
            <span aria-hidden className={`absolute left-2 right-2 top-1/2 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span aria-hidden className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-200 ${open ? 'top-1/2 -rotate-45' : 'bottom-3'}`} />
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t-2 border-fg bg-bg xl:hidden">
          <ul className={`${wrap} py-2`}>
            {navItems.map((n, i) => (
              <li key={n.id} className="border-b border-dashed border-fg/50 last:border-0">
                <a href={`#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? 'true' : undefined}
                  className="flex items-baseline gap-4 py-3 font-display text-3xl font-bold uppercase aria-[current=true]:text-accent">
                  <span aria-hidden className="font-mono text-sm font-normal text-muted">{String(i + 1).padStart(2, '0')}</span>{n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
