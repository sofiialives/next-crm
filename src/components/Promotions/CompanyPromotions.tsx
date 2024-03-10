"use client"
import { getPromotions } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Promotion from "./Promotion";

interface CompanyPromotionsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companyId,
}: CompanyPromotionsProps) {
  const { data } = useQuery({
    queryKey: ["promotions", companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });
  return (
    <ul className="grid grid-cols-12 gap-5">
      {data?.map((promotion) => (
        <li key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </li>
      ))}
    </ul>
  );
}
