"use client";

import PromotionFormModal from "@/components/Promotions/Btn/PromotionFormModal";
import { useRouter } from "next/navigation";
import React from "react";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
