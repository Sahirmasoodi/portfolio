import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" lead="Things I’ve built end to end.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </Section>
  )
}
