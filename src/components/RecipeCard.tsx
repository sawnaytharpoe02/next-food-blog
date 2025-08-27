import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface RecipeCardProps {
  title: string
  image: string
  category: string
  slug: string
  compact?: boolean
}

export default function RecipeCard({ title, image, category, slug, compact = false }: RecipeCardProps) {
  return (
    <Link href={slug} className="group block">
      <div className="relative overflow-hidden">
        <div className={cn("relative overflow-hidden", compact ? "h-48" : "h-64")}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-emerald-400 text-emerald-950 text-xs font-bold px-2 py-1">{category}</span>
        </div>
        <div className={cn("mt-3", compact ? "pr-4" : "pr-8")}>
          <h3 className={cn("text-white font-bold leading-tight", compact ? "text-base" : "text-xl")}>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

