"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "@/components/addCompany/Button";
const PromotionFormModal = dynamic(() => import("./PromotionFormModal"), {
  ssr: false,
});

interface AddPromotionBtnProps {
  companyId: string;
}

export default function AddPromotionBtn({ companyId }: AddPromotionBtnProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add promotion</Button>
      <PromotionFormModal
        companyId={companyId}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
