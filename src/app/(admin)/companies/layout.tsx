import React from "react";

interface LayoutProps {
  header: React.ReactNode;
  toolbar: React.ReactNode;
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({
  header,
  toolbar,
  children,
  modal,
}: LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
