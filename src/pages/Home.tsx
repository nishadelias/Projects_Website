import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div className="container page">
      <section className="page-header">
        <h1>Projects I&apos;ve Built</h1>
        <p className="page-header__subtitle">
          A collection of software projects I&apos;ve worked on, with detailed walkthroughs and demos.
        </p>
      </section>
      <section className="project-grid" aria-label="Project list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  )
}
