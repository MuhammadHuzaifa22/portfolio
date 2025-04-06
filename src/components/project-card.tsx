import type { Project } from "../lib/utils/types"
import Image from "next/image"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow p-[10px]">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="capitalize">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        
        <p className="text-gray-600  text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex gap-3 pt-2">
        {project.links.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-muted-foreground transition-colors"
            title={link.type}
            dangerouslySetInnerHTML={{ __html: link.icon }}
          />
        ))}
      </CardFooter>
    </Card>
  )
}