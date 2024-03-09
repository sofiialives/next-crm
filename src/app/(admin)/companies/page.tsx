import Header from "@/components/Header/Header";
import Toolbar from "@/components/Company/Toolbar";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import React from "react";
import SearchInput from "@/components/Company/SearchInput";
import CompanyTable from "@/components/Company/CompanyTable";
import CompanyRow from "@/components/Company/CompanyRow";
import { Status } from "@/components/Status/StatusLabel";

interface CompaniesProps {}

export default function Companies({}: CompaniesProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Rozetka"
          status={Status.Active}
          promotion={true}
          country="Ukraine"
          joinedDate="11.02.2024"
        />
        <CompanyRow
          id={1}
          category="Technologies"
          company="Netflix"
          status={Status.Pending}
          promotion={false}
          country="USA"
          joinedDate="11.02.2024"
        />
      </CompanyTable>
    </>
  );
}
