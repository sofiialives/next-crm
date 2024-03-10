import React from "react";

interface LayoutProps {
  header: React.ReactNode;
  toolbar: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ header, toolbar, children }: LayoutProps) {
  return (
    <>
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
