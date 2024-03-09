import DashboardItem from "@/components/Dashboard/DashboardItem";
import DashboardTable from "@/components/Dashboard/Table/DashboardTable";
import DashboardTableBody from "@/components/Dashboard/Table/DashboardTableBody";
import DashboardTableHeaders from "@/components/Dashboard/Table/DashboardTableHeaders";
import React from "react";

interface PromotionsProps {}

export default function Promotions({}: PromotionsProps) {
  const promotions = [
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-40%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-25%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-5%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-24%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-80%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-10%" },
    { title: "Rozetka", name: "Norem ipsum dolor", income: "-80%" },
  ];
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
              {promotion.name}
            </DashboardTableBody>
            <DashboardTableBody align="center">
              {promotion.income}
            </DashboardTableBody>
          </tr>
        ))}
      </DashboardTable>
    </DashboardItem>
  );
}
