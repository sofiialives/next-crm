import Sidebar from "@/components/NavBar/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
