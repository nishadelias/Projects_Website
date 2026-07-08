import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__image-wrap">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.name} preview`}
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <h2 className="project-card__title">{project.name}</h2>
        <p className="project-card__description">{project.shortDescription}</p>
      </div>
    </Link>
  )
}
