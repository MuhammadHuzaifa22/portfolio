"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

const filters = [
  { label: "All", value: "all" },
  { label: "HTML/CSS", value: "html" },
  { label: "JavaScript", value: "javascript" },
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwindcss" },
  { label: "Firebase", value: "firebase" },
  { label: "API", value: "api" },
]

export function ProjectFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentFilter = searchParams.get("filter") || "all"

  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("filter", filter)

    // Reset to page 1 when changing filters
    params.delete("page")

    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? "default" : "outline"}
          onClick={() => handleFilterChange(filter.value)}
          className="rounded-full"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}

