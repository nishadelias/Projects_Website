export interface PhotoSection {
  title: string
  caption?: string
  image?: string
}

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

export interface WatchItem {
  id: string
  name: string
  shortDescription: string
  overview: string[]
  image?: string
  photos: [PhotoSection, PhotoSection]
  videoUrl?: string
  videoTitle?: string
}

export interface Project {
  slug: string
  name: string
  shortDescription: string
  image: string
  githubUrl?: string
  overview: string[]
  techStack: string[]
  photoWalkthroughIntro?: string
  photoSections?: PhotoSection[]
  videoWalkthroughIntro?: string
  videoSections?: VideoSection[]
  bonusVideo?: BonusVideo
  watches?: WatchItem[]
  links: ProjectLink[]
}
