import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}
      className="grid size-10 place-items-center border-2 border-fg transition-colors hover:bg-fg hover:text-bg">
      <span aria-hidden className={`size-4 rounded-full border-2 border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)] transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : ''}`} />
    </button>
  )
}
