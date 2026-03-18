| If it is…            | Put it in     |
| -------------------- | ------------- |
| A page               | `/app`        |
| A reusable UI piece  | `/components` |
| Static data          | `/data`       |
| Helper function      | `/lib`        |
| Image/file           | `/public`     |
| CSS                  | `/styles`     |
| TypeScript interface | `/types`      |


/types
export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
}