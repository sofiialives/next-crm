"use client";
import Header from "@/components/Header/Header";
import React, { useEffect } from "react";
import { notFound } from "next/navigation";

interface CompanyProps {
  params: { id: string };
}

export default function Company({ params }: CompanyProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
