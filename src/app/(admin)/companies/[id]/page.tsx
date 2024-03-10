import React from "react";
import { notFound } from "next/navigation";
import { getQueryClient } from "@/lib/utils/getQueryClient";
import { getCompany, getPromotions } from "@/lib/actions";
import { CompanyI } from "@/lib/interface";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import CompanyInfo from "@/components/Promotions/CompanyInfo";
import CompanyPromotions from "@/components/Promotions/CompanyPromotions";

interface CompanyProps {
  params: { id: string };
}

export default async function Company({ params }: CompanyProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["companies", params.id],
    queryFn: () => getCompany(params.id, { cache: "no-store" }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ["promotions", params.id],
    queryFn: () =>
      getPromotions({ companyId: params.id }, { cache: "no-store" }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData([
    "companies",
    params.id,
  ]) as CompanyI;

  if (!company) notFound();

  const dehybratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehybratedState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={params.id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
