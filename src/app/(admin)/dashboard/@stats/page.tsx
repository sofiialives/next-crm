import StatCard, { StatCardType } from "@/components/Dashboard/StatCard";
import clsx from "clsx";
import React from "react";

interface StatsProps {}

export default function Stats({}: StatsProps) {
  const stats = [
    { title: "Total promotions", number: "432" },
    { title: "Total category", number: "8" },
    { title: "New companies", number: "28" },
    { title: "Total active companies", number: "670" },
  ];
  return (
    <ul className="grid grid-cols-12 gap-5">
      {stats.map((stat, index) => (
        <li key={index} className="col-span-3 ">
          <StatCard
            id={index}
            title={stat.title}
            number={stat.number}
            type={StatCardType.Gradient}
          />
        </li>
      ))}
    </ul>
  );
}
