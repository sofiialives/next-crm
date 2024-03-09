import Header from "@/components/Header/Header";
import Toolbar from "@/components/Company/Toolbar";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import React from "react";
import SearchInput from "@/components/Company/SearchInput";
import CompanyTable from "@/components/Company/CompanyTable";
import CompanyRow from "@/components/Company/CompanyRow";
import { getCompanies } from "@/lib/actions";

interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
  const companies = await getCompanies();
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        {companies.map((company) => (
          <CompanyRow
            id={company.id}
            category={company.categoryTitle}
            company={company.title}
            status={company.status}
            promotion={company.hasPromotions}
            country={company.countryTitle}
            joinedDate={company.joinedDate}
          />
        ))}
      </CompanyTable>
    </>
  );
}
