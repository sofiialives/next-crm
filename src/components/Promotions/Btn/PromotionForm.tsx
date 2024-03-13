"use client";
import Button from "@/components/addCompany/Button";
import InputField from "@/components/addCompany/InputField";
import LogoUploader from "@/components/addCompany/LogoUploader";
import { createPromotion, getCompany } from "@/lib/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";

interface PromotionFieldValues {
  title: string;
  description: string;
  discount: string | number;
}

const initialValues: PromotionFieldValues = {
  title: "",
  description: "",
  discount: "",
};

export interface PromotionFormProps {
  companyId: string;
  onSubmit: (values: PromotionFieldValues) => void | Promise<void>;
}

export default async function PromotionForm({
  onSubmit,
  companyId,
}: PromotionFormProps) {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ["companies", companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["promotions", companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ["promotions"],
        exact: true,
      });
    },
  });

  const handleSubmit = async (values: PromotionFieldValues) => {
    if (company) {
      await mutateAsync({
        ...values,
        discount: Number(values.discount || 0),
        companyId: company.id,
        companyTitle: company.title,
      });
    }

    if (onSubmit) onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <h2 className="mb-0.5 text-xl">Add new company</h2>
        <div className="flex flex-col gap-5">
          <InputField required label="Title" placeholder="Title" name="title" />
          <InputField
            required
            label="Description"
            placeholder="Description"
            name="description"
          />
          <InputField
            required
            type="number"
            label="Discount"
            placeholder="Discount"
            name="discount"
          />
          <LogoUploader square label="Image" placeholder="Upload photo" />
        </div>
        <Button disabled={isPending}>Add promotion</Button>
      </Form>
    </Formik>
  );
}
