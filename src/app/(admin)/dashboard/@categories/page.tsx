import DashboardItem from "@/components/Dashboard/DashboardItem";
import StatCard, { StatCardType } from "@/components/Dashboard/StatCard";
import React from "react";

interface CategoriesProps {}

export default function Categories({}: CategoriesProps) {
  const categories = [
    { title: "Products", number: "4" },
    { title: "Products", number: "8" },
    { title: "Products", number: "26" },
    { title: "Products", number: "1" },
    { title: "Products", number: "37" },
    { title: "Products", number: "22" },
    { title: "Products", number: "4" },
    { title: "Products", number: "11" },
  ];
  return (
    <DashboardItem title="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 px-5 pb-5">
        {categories.map((category, index) => (
          <li key={index} className="col-span-3 ">
            <StatCard
              id={index}
              title={category.title}
              number={category.number}
              type={StatCardType.Dark}
            />
          </li>
        ))}
      </ul>
    </DashboardItem>
  );
}
