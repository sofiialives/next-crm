import React from "react";

interface DashboardTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

export default function DashboardTable({
  headers,
  children,
}: DashboardTableProps) {
  return (
    <table className=" w-full ">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
}
