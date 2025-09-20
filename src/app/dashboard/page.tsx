import React from "react";
import BlogCard from "@/components/dashboard/BlogCard";
import FoodImage from "../../../public/assets/1.jpg";
import Container from "@/components/dashboard/Container";

const DashboardPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <BlogCard
            key={idx}
            id={String(idx)}
            category="INCHEQ PRODUCT"
            title="How InCheq's Employee Engagement Survey Enhances Workplace Success"
            backgroundColor="bg-cyan-50"
            categoryColor="bg-cyan-100 text-cyan-800"
          />
        ))}
      </div>
    </Container>
  );
};

export default DashboardPage;
