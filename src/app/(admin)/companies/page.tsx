import Header from "@/components/Header/Header";
import Toolbar from "@/components/Company/Toolbar";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import React from "react";
import SearchInput from "@/components/Company/SearchInput";
import CompanyTable from "@/components/Company/CompanyTable";
import CompanyRow from "@/components/Company/CompanyRow";
import { getCompanies } from "@/lib/actions";
import { getQueryClient } from "@/lib/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies({ cache: "no-cache" }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable />
    </HydrationBoundary>
  );
}
