import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

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
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? 'border-line bg-bg/90 backdrop-blur' : 'border-transparent'}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold">{site.name}</a>
        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-fg ${active === n.id ? 'text-accent' : 'text-muted'}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden !py-2.5 sm:inline-flex">Contact me</a>
          <ThemeToggle />
          <button className="grid h-10 w-10 place-items-center rounded-lg border border-line xl:hidden" onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg xl:hidden">
          <ul className="container-x flex flex-col py-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? 'true' : undefined}
                  className={`block rounded-md px-2 py-3 font-medium ${active === n.id ? 'text-accent' : 'text-fg'}`}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
