import React from "react";
import StatusLabel from "../Status/StatusLabel";
import Image from "next/image";
import clsx from "clsx";
import { CompanyStatus } from "@/lib/interface";

interface CompanyRowProps {
  id: string;
  category: string;
  company: string;
  status: CompanyStatus;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

const labelStatus = {
  [CompanyStatus.Active]: "Active",
  [CompanyStatus.NotActive]: "Not Active",
  [CompanyStatus.Pending]: "Pending",
  [CompanyStatus.Suspended]: "Suspended",
};

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-l font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {category}
      </td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? "check.svg" : "x-mark.svg"}`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              "text sm font-medium",
              promotion ? "text-green-700" : "text-red-700"
            )}
          >
            {promotion ? "Yes" : "No"}
          </span>
        </div>
      </td>
      <td>{country}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString("uk-UA")}
      </td>
    </tr>
  );
}
