import { Link, Navigate, useParams } from 'react-router-dom'
import PhotoGallery from '../components/PhotoGallery'
import VideoEmbed from '../components/VideoEmbed'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="container page project-detail">
      <Link to="/" className="back-link">
        ← Back to projects
      </Link>

      <header className="project-hero">
        <div className="project-hero__content">
          <h1>{project.name}</h1>
          <p className="project-hero__description">{project.shortDescription}</p>
          <a
            href={project.githubUrl}
            className="button button--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-hero__image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={`${project.name} preview`}
            className="project-hero__image"
          />
        </div>
      </header>

      <section className="project-section">
        <h2>Overview</h2>
        {project.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>

      <section className="project-section">
        <h2>Tech Stack</h2>
        <ul className="tag-list">
          {project.techStack.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {project.photoSections && project.photoSections.length > 0 && (
        <section className="project-section">
          <h2>Photos</h2>
          {project.photoWalkthroughIntro && (
            <p className="section-intro">{project.photoWalkthroughIntro}</p>
          )}
          <PhotoGallery sections={project.photoSections} />
        </section>
      )}

      {project.videoSections && project.videoSections.length > 0 && (
        <section className="project-section">
          <h2>Video Walkthrough</h2>
          <p className="section-intro">
            {project.videoWalkthroughIntro ??
              'Demo videos will be added here as they are published.'}
          </p>
          <div className="video-sections">
            {project.videoSections.map((section) => (
              <div key={section.number} className="video-section">
                <div className="video-section__header">
                  <span className="video-section__number">Video {section.number}</span>
                  <h3>{section.title}</h3>
                  <p className="video-section__suggested-title">{section.suggestedTitle}</p>
                </div>
                <p className="video-section__summary">{section.summary}</p>
                <VideoEmbed videoUrl={section.videoUrl} title={section.suggestedTitle} />
              </div>
            ))}
          </div>
        </section>
      )}

      {project.bonusVideo && (
        <section className="project-section project-section--bonus">
          <h2>Bonus Clip</h2>
          <div className="video-section">
            <h3>{project.bonusVideo.title}</h3>
            <p className="video-section__summary">{project.bonusVideo.summary}</p>
            <VideoEmbed videoUrl={project.bonusVideo.videoUrl} title={project.bonusVideo.title} />
          </div>
        </section>
      )}

      <section className="project-section">
        <h2>Related Links</h2>
        <ul className="link-list">
          {project.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
