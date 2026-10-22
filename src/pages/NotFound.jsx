import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | Sahir Ul Islam' }, [])
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-display text-8xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">This page doesn’t exist.</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The link may be broken or the page may have moved. Head back to the portfolio.</p>
        <Link to="/" className="btn btn-primary mt-8"><Home size={16} aria-hidden /> Back to home</Link>
      </div>
    </main>
  )
}
