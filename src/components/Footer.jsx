import { site } from '../data/site'
import { wrap } from '../ui/classes'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-dashed border-fg py-8 font-mono text-sm text-muted">
      <div className={`${wrap} flex flex-col justify-between gap-2 sm:flex-row`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
