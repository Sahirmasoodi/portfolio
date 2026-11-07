import { site } from '../data/site'

export default function SocialLinks({ className = '' }) {
  const items = [
    { href: site.socials.github, label: 'GitHub' },
    { href: site.socials.linkedin, label: 'LinkedIn' },
  ].filter((i) => i.href)
  if (!items.length) return null
  return (
    <div className={`flex gap-4 font-mono text-sm font-bold ${className}`}>
      {items.map(({ href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile`}
          className="border-b-2 border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent">
          {label}
        </a>
      ))}
    </div>
  )
}
