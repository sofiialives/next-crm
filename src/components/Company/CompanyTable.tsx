import React from "react";

interface CompanyTableProps {
  children: React.ReactNode;
}

export default function CompanyTable({ children }: CompanyTableProps) {
  const headers = [
    "Category",
    "Company",
    "Status",
    "Promotion",
    "Country",
    "Joined date",
  ];

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
