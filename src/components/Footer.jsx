import { site } from '../data/site'
export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
