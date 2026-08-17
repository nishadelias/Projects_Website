import { useState } from 'react'
import type { PhotoSection, WatchItem } from '../types/project'
import VideoEmbed from './VideoEmbed'

interface WatchCollectionProps {
  watches: WatchItem[]
}

function MediaImage({
  image,
  alt,
  className,
  placeholderClassName,
}: {
  image?: string
  alt: string
  className: string
  placeholderClassName: string
}) {
  const [failed, setFailed] = useState(false)
  const showImage = image && !failed

  if (showImage) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className={placeholderClassName} aria-label={`${alt} — photo coming soon`}>
      <span aria-hidden="true">🖼</span>
      <p>Photo coming soon</p>
    </div>
  )
}

function WatchPhoto({ section }: { section: PhotoSection }) {
  return (
    <figure className="watch-photo">
      <div className="watch-photo__frame">
        <MediaImage
          image={section.image}
          alt={section.title}
          className="watch-photo__image"
          placeholderClassName="watch-photo__placeholder"
        />
      </div>
      <figcaption className="watch-photo__caption">
        <span className="watch-photo__title">{section.title}</span>
        {section.caption && <span className="watch-photo__note">{section.caption}</span>}
      </figcaption>
    </figure>
  )
}

export default function WatchCollection({ watches }: WatchCollectionProps) {
  return (
    <>
      <section className="project-section" aria-label="Watch gallery">
        <h2>The Watches</h2>
        <p className="section-intro">
          Click a watch to jump to its full write-up, video, and photos.
        </p>
        <div className="watch-gallery">
          {watches.map((watch) => (
            <a key={watch.id} href={`#${watch.id}`} className="watch-gallery__card">
              <div className="watch-gallery__image-wrap">
                <MediaImage
                  image={watch.image}
                  alt={watch.name}
                  className="watch-gallery__image"
                  placeholderClassName="watch-gallery__placeholder"
                />
              </div>
              <div className="watch-gallery__body">
                <h3 className="watch-gallery__name">{watch.name}</h3>
                <p className="watch-gallery__description">{watch.shortDescription}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="project-section" aria-label="Watch details">
        <h2>Details</h2>
        <div className="watch-details">
          {watches.map((watch) => (
            <article key={watch.id} id={watch.id} className="watch-detail">
              <header className="watch-detail__header">
                <h3>{watch.name}</h3>
                <p className="watch-detail__lede">{watch.shortDescription}</p>
              </header>

              {watch.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="watch-detail__overview">
                  {paragraph}
                </p>
              ))}

              <div className="watch-detail__video">
                <h4>Video</h4>
                <VideoEmbed
                  videoUrl={watch.videoUrl}
                  title={watch.videoTitle ?? `${watch.name} video`}
                />
              </div>

              <div className="watch-detail__photos">
                <h4>Photos</h4>
                <div className="watch-detail__photo-grid">
                  {watch.photos.map((photo) => (
                    <WatchPhoto key={photo.title} section={photo} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
