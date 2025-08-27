"use client";

import { Card, CardBody, Chip, Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
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
    <Card className="min-h-[500px] rounded-3xl border-none bg-white p-2.5">
      <CardBody className="p-0">
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
            <Chip
              className={`${categoryColor} mt-4 rounded-full px-3 py-1 text-xs font-medium`}
            >
              {category}
            </Chip>
            <h3 className="text-xl leading-tight font-semibold text-balance text-gray-800">
              {title}
            </h3>
          </div>

          <div className="mt-auto mb-4 ml-auto">
            <Button className="h-12 w-12 rounded-full bg-red-500 hover:bg-gray-50">
              Delete
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
