import DashboardItem from "@/components/Dashboard/DashboardItem";
import StatCard, { StatCardType } from "@/components/Dashboard/StatCard";
import { getCategories, getCompanies } from "@/lib/actions";
import { getCountById } from "@/lib/utils/getCountById";
import React from "react";

interface CategoriesProps {}

export default async function Categories({}: CategoriesProps) {
  const categories = await getCategories();
  const companies = await getCompanies();
  const counts = getCountById(companies, "categoryId");
  return (
    <DashboardItem title="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 px-5 pb-5">
        {categories.map((category) => (
          <li key={category.id} className="col-span-3 ">
            <StatCard
              id={category.id}
              title={category.title}
              number={counts[category.id] || 0}
              type={StatCardType.Dark}
            />
          </li>
        ))}
      </ul>
    </DashboardItem>
  );
}
