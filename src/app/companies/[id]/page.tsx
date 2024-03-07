import Header from "@/components/Header/Header";
import React from "react";

interface CompanyProps {
  params: { id: string };
}

export default function Company({ params }: CompanyProps) {
  return (
    <>
      <Header>Company Name</Header>
    </>
  );
}
