// export interface Project {
//   title: string
//   description?: string
//   tech: string[]
//   github: string
//   demo?: string
// }

// TODO: Add github, optional demo links/videos/screenshots, and optional website link 
export type Project = {
  id: string;
  year: number;
  date: string;
  title: string;
  techStack?: string[];
  peekStack: string;
  body?: string;
  status?: string;
  statusColor?: string;
  github: string;
  videoDemo?: string;
  videoPoster?: string;
  imagesDemo?: string[];
  websiteDemo?: string;
};