import Image from "next/image";
import { Star } from "lucide-react";

interface FeaturedRecipeCardProps {
  title: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: string;
  description: string;
}

export default function FeaturedRecipeCard({
  title,
  image,
  category,
  rating,
  reviewCount,
  description,
}: FeaturedRecipeCardProps) {
  return (
    <div className="group overflow-hidden rounded-sm bg-emerald-900 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-emerald-400 px-2 py-1 text-xs font-bold text-emerald-950">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>

        <div className="mb-3 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-emerald-400 text-emerald-400"
            />
          ))}
          <span className="ml-2 text-xs text-gray-400">
            ({reviewCount} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}
