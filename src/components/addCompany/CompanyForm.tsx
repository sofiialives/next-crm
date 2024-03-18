"use client";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "./InputField";
import LogoUploader from "./LogoUploader";
import Button from "./Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCompany, getCategories, getCountries } from "@/lib/actions";
import { CompanyStatus } from "@/lib/interface";

interface CompanyFieldValues {
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  categoryId: string;
  countryId: string;
}

const initialValues: CompanyFieldValues = {
  title: "",
  description: "",
  status: CompanyStatus.Active,
  joinedDate: "",
  categoryId: "",
  countryId: "",
};

export interface CompanyFormProps {
  onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 10 * 1000,
  });

  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    staleTime: 10 * 1000,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
  });

  const handleSubmit = async (values: CompanyFieldValues) => {
    await mutateAsync({
      ...values,
      categoryTitle:
        categories?.find(({ id }) => id === values.categoryId)?.title ?? "",
      countryTitle:
        countries?.find(({ id }) => id === values.countryId)?.title ?? "",
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <h2 className="mb-0.5 text-xl">Add new company</h2>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button>Add company</Button>
      </Form>
    </Formik>
  );
}
