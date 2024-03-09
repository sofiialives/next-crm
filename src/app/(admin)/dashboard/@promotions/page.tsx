import DashboardItem from "@/components/Dashboard/DashboardItem";
import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTableBody from "@/components/Dashboard/Table/DashboardTableBody";
import DashboardTableHeaders from "@/components/Dashboard/Table/DashboardTableHeaders";
import { getPromotions } from "@/lib/actions";
import React from "react";

interface PromotionsProps {}

export default async function Promotions({}: PromotionsProps) {
  const promotions = await getPromotions();
  return (
    <DashboardItem title="Promotions">
      <DashboardTable
        headers={
          <>
            <DashboardTableHeaders>Company</DashboardTableHeaders>
            <DashboardTableHeaders>Name</DashboardTableHeaders>
            <DashboardTableHeaders align="center">%</DashboardTableHeaders>
          </>
        }
      >
        {promotions.map((promotion, index) => (
          <tr key={index}>
            <DashboardTableBody>{promotion.title}</DashboardTableBody>
            <DashboardTableBody align="center">
              {promotion.companyTitle}
            </DashboardTableBody>
            <DashboardTableBody align="center">
              {promotion.discount}%
            </DashboardTableBody>
          </tr>
        ))}
      </DashboardTable>
    </DashboardItem>
  );
}
