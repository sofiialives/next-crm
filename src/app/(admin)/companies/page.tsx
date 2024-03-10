import React from "react";
import CompanyTable from "@/components/Company/CompanyTable";
import { getCompanies } from "@/lib/actions";
import { getQueryClient } from "@/lib/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies({ cache: "no-store" }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
