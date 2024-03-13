import clsx from "clsx";
import React from "react";
import styles from "./statcard.module.css";

export enum StatCardType {
  Dark = "dark",
  Gradient = "gradient",
}

interface StatCardProps {
  id: string;
  title: string;
  number: number;
  type: StatCardType;
}

export default function StatCard({ title, number, type, id }: StatCardProps) {
  return (
    <div
      className={clsx(
        "rounded",
        type === StatCardType.Dark &&
          `${
            Number(id) % 2 === 0 ? "text-purple-200" : "text-lime-200"
          } pt-3 px-3 bg-gray-900  text-right`,
        type === StatCardType.Gradient && [
          styles[`bg${1}`],
          "p-7 bg-no-repeat text-gray-900 text-left",
        ]
      )}
    >
      <p
        className={clsx(
          "text-left before:w-4 before:h-0.5 before:rounded",
          type === StatCardType.Dark &&
            "text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50",
          type === StatCardType.Gradient &&
            "text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900"
        )}
      >
        {title}
      </p>
      <h2 className=" font-semibold text-6xl">{number}</h2>
    </div>
  );
}
