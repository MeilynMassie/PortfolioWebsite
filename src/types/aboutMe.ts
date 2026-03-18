export interface Skill {
  name: string
  imageUrl: string
}

export interface AboutMe {
  name: string
  title: string
  description: string
  skills: Skill[]
  imageUrl: string
}