import React from "react";

interface DashboardItemProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardItem({ children, title }: DashboardItemProps) {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <h2 className="text-gray-900 text-xl p-5">{title}</h2>
      {children}
    </div>
  );
}
