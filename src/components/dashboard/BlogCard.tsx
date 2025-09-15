import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/Badge";
import FoodImage from "../../../public/assets/1.jpg";

interface BlogCardProps {
  image?: string;
  category: string;
  title: string;
  backgroundColor: string;
  categoryColor: string;
}
const BlogCard = ({ image, category, title, categoryColor }: BlogCardProps) => {
  return (
    <div className="rounded-3xl border-none p-2.5">
      <div className="p-0">
        <div className="h-[200px]">
          <div className="relative h-full w-auto overflow-hidden rounded-2xl">
            <Image
              src={FoodImage || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex h-[300px] flex-col px-2">
          <div className="space-y-3">
            <Badge
              className={`${categoryColor} mt-4 rounded-full px-3 py-1 text-xs font-medium`}
            >
              {category}
            </Badge>
            <h3 className="text-lg leading-tight font-semibold text-balance text-gray-800">
              {title}
            </h3>
          </div>

          <div className="mt-auto mb-4 ml-auto flex gap-2">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
