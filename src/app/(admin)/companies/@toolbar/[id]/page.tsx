import SearchInput from "@/components/Company/SearchInput";
import Toolbar from "@/components/Company/Toolbar";
import AddPromotionBtn from "@/components/Promotions/Btn/AddPromotionBtn";
import React from "react";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionBtn companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
