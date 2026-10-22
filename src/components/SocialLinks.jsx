import { Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'

export default function SocialLinks({ className = '' }) {
  const items = [
    { href: site.socials.github, label: 'GitHub', Icon: Github },
    { href: site.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  ].filter((i) => i.href)
  if (!items.length) return null
  return (
    <div className={`flex gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile`}
          className="grid h-11 w-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent">
          <Icon size={18} aria-hidden />
        </a>
      ))}
    </div>
  )
}
