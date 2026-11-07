import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" lead="Things I’ve built end to end." layout="top">
      <div className="space-y-24 sm:space-y-32">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} flip={i % 2 === 1} />)}
      </div>
    </Section>
  )
}
