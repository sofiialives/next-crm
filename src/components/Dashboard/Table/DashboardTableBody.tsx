import clsx from "clsx";
import React from "react";

interface DashboardTableBodyProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export default function DashboardTableBody({
  align = "left",
  children,
}: DashboardTableBodyProps) {
  return (
    <td
      className={clsx(
        "py-2 px-5 font-normal text-sm border-r border-gray-100 first-type:border-l",
        `text-${align}`
      )}
    >
      {children}
    </td>
  );
}
