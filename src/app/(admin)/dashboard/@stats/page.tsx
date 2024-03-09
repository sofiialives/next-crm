import StatCard, { StatCardType } from "@/components/Dashboard/StatCard";
import { getStats } from "@/lib/actions";
import { StatsI } from "@/lib/interface";
import { revalidatePath } from "next/cache";
import React from "react";

interface StatsProps {}

const label: Record<keyof StatsI, string> = {
  promotions: "Total promotions",
  categories: "Total category",
  newCompanies: "New companies",
  activeCompanies: "Total active companies",
};

export default async function Stats({}: StatsProps) {
  const data = await getStats({
    next: {
      revalidate: 5,
    },
  });
  return (
    <ul className="grid grid-cols-12 gap-5">
      {(Object.keys(label) as (keyof StatsI)[]).map((key) => (
        <li key={key} className="col-span-3 ">
          <StatCard
            id={key}
            title={label[key]}
            number={data[key]}
            type={StatCardType.Gradient}
          />
        </li>
      ))}
    </ul>
  );
}
