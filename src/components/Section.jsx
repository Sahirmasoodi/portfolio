export default function Section({ id, title, lead, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {title && (
          <div className="mb-12 max-w-2xl">
            <h2 id={`${id}-title`} className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
            {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
