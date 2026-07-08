interface VideoEmbedProps {
  videoUrl?: string
  title: string
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
    if (parsed.hostname === 'youtu.be') {
      const videoId = parsed.pathname.slice(1)
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
  } catch {
    return null
  }
  return null
}

export default function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  const embedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null

  if (embedUrl) {
    return (
      <div className="video-embed">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="video-embed video-embed--placeholder" aria-label={`${title} — video coming soon`}>
      <div className="video-embed__placeholder-content">
        <span className="video-embed__icon" aria-hidden="true">
          ▶
        </span>
        <p>Video coming soon</p>
      </div>
    </div>
  )
}
