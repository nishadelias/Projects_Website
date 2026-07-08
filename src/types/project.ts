export interface VideoSection {
  number: number
  title: string
  suggestedTitle: string
  summary: string
  videoUrl?: string
}

export interface BonusVideo {
  title: string
  summary: string
  videoUrl?: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  slug: string
  name: string
  shortDescription: string
  image: string
  githubUrl: string
  overview: string[]
  techStack: string[]
  videoSections: VideoSection[]
  bonusVideo: BonusVideo
  links: ProjectLink[]
}
