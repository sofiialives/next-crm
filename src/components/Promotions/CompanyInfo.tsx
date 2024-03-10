"use client";
import { getCompany } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import StatusLabel from "../Status/StatusLabel";

interface CompanyInfoProps {
  companyId: string;
}

export default function CompanyInfo({ companyId }: CompanyInfoProps) {
  const { data: company } = useQuery({
    queryKey: ["companies", companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
  });

  if (!company) return null;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center p-7 gap-5 bg-gray-900 rounded">
        <div className="w-20 h-20 rounded-fill bg-blue-500">
          {company.avatar && <Image src={company.avatar} alt="avatar" fill />}
        </div>
        <p className="pb text-base font-semibold text-white">{company.title}</p>
        <StatusLabel status={company.status} />
      </div>
      <div className="p-7 text-base text-gray-900 bg-gray-100 rounded">
        <h2 className="pb-5 font-semibold text-xl">About company</h2>
        <p className="pb-3">Category: {company.categoryTitle}</p>
        <p className="pb-3">Country: {company.countryTitle}</p>
        <p className="pb-3">
          Joined date: {new Date(company.joinedDate).toLocaleDateString("uk")}
        </p>
        <div className="w-full h-px my-8 bg-gray-300" />
        <p>{company.description}</p>
      </div>
    </div>
  );
}
