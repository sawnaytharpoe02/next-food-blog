import React from "react";
import BlogCard from "@/components/dashboard/BlogCard";
import FoodImage from "../../../public/assets/1.jpg";

const DashboardPage = () => {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <BlogCard
              key={idx}
              category="INCHEQ PRODUCT"
              title="How InCheq's Employee Engagement Survey Enhances Workplace Success"
              backgroundColor="bg-cyan-50"
              categoryColor="bg-cyan-100 text-cyan-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
