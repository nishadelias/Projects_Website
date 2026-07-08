import { useState } from 'react'
import type { PhotoSection } from '../types/project'

interface PhotoGalleryProps {
  sections: PhotoSection[]
}

function PhotoSlot({ section }: { section: PhotoSection }) {
  const [failed, setFailed] = useState(false)
  const showImage = section.image && !failed

  return (
    <figure className="photo-section">
      <div className="photo-section__header">
        <h3>{section.title}</h3>
        {section.caption && <p className="photo-section__caption">{section.caption}</p>}
      </div>
      {showImage ? (
        <div className="photo-section__image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}${section.image}`}
            alt={section.title}
            className="photo-section__image"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <div className="photo-section__placeholder" aria-label={`${section.title} — photo coming soon`}>
          <span className="photo-section__placeholder-icon" aria-hidden="true">
            🖼
          </span>
          <p>Photo coming soon</p>
        </div>
      )}
    </figure>
  )
}

export default function PhotoGallery({ sections }: PhotoGalleryProps) {
  return (
    <div className="photo-sections">
      {sections.map((section) => (
        <PhotoSlot key={section.title} section={section} />
      ))}
    </div>
  )
}
