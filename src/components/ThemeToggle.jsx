import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}
      className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent">
      {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  )
}
