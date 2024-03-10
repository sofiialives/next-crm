import React from "react";
import StatusLabel from "../Status/StatusLabel";
import Image from "next/image";
import clsx from "clsx";
import { CompanyI } from "@/lib/interface";
import Link from "next/link";

interface CompanyRowProps {
  company: CompanyI;
}

export default function CompanyRow({ company }: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-l font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {company.categoryTitle}
      </td>
      <td>
        <Link href={`/companies/${company.id}`}>{company.title}</Link>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${company.hasPromotions ? "check.svg" : "x-mark.svg"}`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              "text sm font-medium",
              company.hasPromotions ? "text-green-700" : "text-red-700"
            )}
          >
            {company.hasPromotions ? "Yes" : "No"}
          </span>
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString("uk-UA")}
      </td>
    </tr>
  );
}
