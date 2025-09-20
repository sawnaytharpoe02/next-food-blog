import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/Badge";
import FoodImage from "../../../public/assets/1.jpg";
import { PencilIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { DeleteBlogItem, EditBlogItem } from "./BlogActions";

interface BlogCardProps {
  id: string;
  image?: string;
  category: string;
  title: string;
  backgroundColor: string;
  categoryColor: string;
}
const BlogCard = ({
  id,
  image,
  category,
  title,
  categoryColor,
}: BlogCardProps) => {
  return (
    <div className="cursor-pointer rounded-3xl border-none bg-white/20 p-2.5 backdrop-blur-[5px]">
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
            <h3 className="leading-tight font-semibold text-balance text-gray-800">
              {title}
            </h3>
          </div>

          <div className="absolute top-5 right-5 mt-auto mb-4 ml-auto flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <DotsVerticalIcon />
                <span className="sr-only">Actions</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DeleteBlogItem id={id} />
                <EditBlogItem id={id}/>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
