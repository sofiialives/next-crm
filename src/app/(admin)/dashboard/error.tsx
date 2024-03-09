"use client";
import Button from "@/components/addCompany/Button";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
