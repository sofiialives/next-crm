import DashboardItem from "@/components/Dashboard/DashboardItem";
import Image from "next/image";
import React from "react";

interface CountriesProps {}

export default function Countries({}: CountriesProps) {
  const countries = [
    { name: "Canada", number: "4" },
    { name: "USA", number: "4" },
    { name: "Italia", number: "2" },
    { name: "Ukraine", number: "2" },
    { name: "Spain", number: "2" },
  ];
  return (
    <DashboardItem title="Countries of companies">
      <div className="flex items-end pb-5 px-5 justify-between">
        <ul>
          {countries.map((country, index) => (
            <p
              key={index}
              className="font-medium text-sm text-gray-900 before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200"
            >
              {country.name} - {country.number}
            </p>
          ))}
        </ul>
        <Image
          src="/images/world.svg"
          alt="world map"
          width={395}
          height={260}
        />
      </div>
    </DashboardItem>
  );
}
