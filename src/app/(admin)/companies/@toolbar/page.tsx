import SearchInput from "@/components/Company/SearchInput";
import Toolbar from "@/components/Company/Toolbar";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import React from "react";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyBtn />}>
      <SearchInput />
    </Toolbar>
  );
}
