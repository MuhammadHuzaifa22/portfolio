import type { Project } from "./types"

export function filterProjects(projects: Project[], filter: string) {
  if (filter === "all") {
    return projects
  }

  return projects.filter((project) => project.technologies.includes(filter))
}
