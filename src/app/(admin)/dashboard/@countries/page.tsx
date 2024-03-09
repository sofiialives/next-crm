import DashboardItem from "@/components/Dashboard/DashboardItem";
import { getCompanies, getCountries } from "@/lib/actions";
import { getCountById } from "@/lib/utils/getCountById";
import Image from "next/image";
import React from "react";

interface CountriesProps {}

export default async function Countries({}: CountriesProps) {
  const countries = await getCountries();
  const companies = await getCompanies();
  const counts = getCountById(companies, "countryId");
  return (
    <DashboardItem title="Countries of companies">
      <div className="flex items-end pb-5 px-5 justify-between">
        <ul>
          {countries.map((country, index) => (
            <p
              key={index}
              className="font-medium text-sm text-gray-900 before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200"
            >
              {country.title} - {counts[country.id] || 0}
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
