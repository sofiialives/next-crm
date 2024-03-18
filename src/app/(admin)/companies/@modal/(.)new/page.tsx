"use client";

import CompanyForm from "@/components/addCompany/CompanyForm";
import Modal from "@/components/addCompany/Modal";
import { useRouter } from "next/navigation";
import React from "react";

interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
