"use client";
import React from "react";
import Button from "@/components/addCompany/Button";
import { useRouter } from "next/navigation";

interface AddPromotionBtnProps {
  companyId: string;
}

export default function AddPromotionBtn({ companyId }: AddPromotionBtnProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotion
    </Button>
  );
}
