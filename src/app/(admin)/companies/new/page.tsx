"use client";
import CompanyForm from "@/components/addCompany/CompanyForm";
import React from "react";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}
