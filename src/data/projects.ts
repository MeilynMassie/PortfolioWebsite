import { Project } from "@/types/project";


export const featuredProjects: Project[] = [
  {
    id: "01",
    year: 2025,
    date: "January 2025",
    title: "Singo Bingo V1",
    peekStack: "Python · React · Spotify API",
    body: "Web application that generates music bingo cards from Spotify playlists and plays short song previews "  +
          "for interactive gameplay. Integrated Spotify Web API for dynamic track retrieval and deployed the application" + 
          "on AWS Elastic Beanstalk.",
    techStack: ["Python", "React", "Spotify API", "JavaScript", "AWS Elastic Beanstalk"],
    status: "Live",
    statusColor: "bg-green-500",
    github: "https://github.com/MeilynMassie/SingoBingo_V1",
    videoDemo: "/videos/SingoBingoDemo.mp4",
    videoPoster: "/images/posters/SingoBingoDemoPoster.png",
  },
  {
    id: "02",
    year: 2026,
    date: "April 2026",
    title: "Trivia API",
    peekStack: "Java · Spring Boot · PostgreSQL",
    body: "Spring Boot REST API for trivia questions, user management, and leaderboard scoring with PostgreSQL " +
    "persistence. Deployed using Docker on Render.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Render"],
    github: "https://github.com/MeilynMassie/TriviaApi",
    status: "In progress",
    statusColor: "bg-amber-500",
  },
];

// All projects used in the timeline (includes featured + older ones)
export const allProjects: Project[] = [
  {
    id: "03",
    year: 2025,
    date: "August 2025",
    title: "Singo Bingo V2",
    peekStack: "Python · Flask · Spotify API",
    body: "Singo Bingo V1 rewritten to use Flask and implement multiplayer.",
    techStack: ["Python", "Flask", "Spotify API", "JavaScript", "Vercel"],
    status: "Live",
    statusColor: "bg-green-500",
    github: "https://github.com/MeilynMassie/SingoBingo_V2",
    websiteDemo: "singo-bingo-v2-git-main-animei11s-projects.vercel.app",
  },
  
  ...featuredProjects,
];