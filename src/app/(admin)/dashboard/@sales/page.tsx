import DashboardItem from "@/components/Dashboard/DashboardItem";
import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTableBody from "@/components/Dashboard/Table/DashboardTableBody";
import DashboardTableHeaders from "@/components/Dashboard/Table/DashboardTableHeaders";
import React from "react";

interface SalesProps {}

export default function Sales({}: SalesProps) {
  const companies = [
    { title: "Rozetka", sold: "500", income: "$1000" },
    { title: "Rozetka", sold: "500", income: "$1000" },
    { title: "Rozetka", sold: "500", income: "$1000" },
    { title: "Rozetka", sold: "500", income: "$1000" },
    { title: "Rozetka", sold: "500", income: "$1000" },
    { title: "Rozetka", sold: "500", income: "$1000" },
  ];
  return (
    <DashboardItem title="Sales details">
      <DashboardTable
        headers={
          <>
            <DashboardTableHeaders>Company</DashboardTableHeaders>
            <DashboardTableHeaders align="center">Sold</DashboardTableHeaders>
            <DashboardTableHeaders align="center">Income</DashboardTableHeaders>
          </>
        }
      >
        {companies.map((company, index) => (
          <tr key={index}>
            <DashboardTableBody>{company.title}</DashboardTableBody>
            <DashboardTableBody align="center">
              {company.sold}
            </DashboardTableBody>
            <DashboardTableBody align="center">
              {company.income}
            </DashboardTableBody>
          </tr>
        ))}
      </DashboardTable>
    </DashboardItem>
  );
}
