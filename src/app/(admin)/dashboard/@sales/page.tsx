import DashboardItem from "@/components/Dashboard/DashboardItem";
import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTableBody from "@/components/Dashboard/Table/DashboardTableBody";
import DashboardTableHeaders from "@/components/Dashboard/Table/DashboardTableHeaders";
import { getSales } from "@/lib/actions";
import React from "react";

interface SalesProps {}

export default async function Sales({}: SalesProps) {
  const companies = await getSales();
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
        {companies.map((company) => (
          <tr key={company.companyId}>
            <DashboardTableBody>{company.companyTitle}</DashboardTableBody>
            <DashboardTableBody align="center">
              {company.sold}
            </DashboardTableBody>
            <DashboardTableBody align="center">
              ${company.income}
            </DashboardTableBody>
          </tr>
        ))}
      </DashboardTable>
    </DashboardItem>
  );
}
