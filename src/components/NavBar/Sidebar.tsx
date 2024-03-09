"use client";
import Image from "next/image";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const items = [
    {
      path: "/dashboard",
      img: "/icons/squares.svg",
      alt: "dashboard page",
      text: "Dashboard",
    },
    {
      path: "/companies",
      img: "/icons/briefcase.svg",
      alt: "companies page",
      text: "Companies",
    },
  ];

  const router = useRouter();
  const handleExitClick = () => {
    router.push("/");
  };

  const pathname = usePathname();
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          {items.map((item, index) => (
            <SidebarItem
              pathname={item.path}
              src={item.img}
              alt={item.alt}
              key={index}
              current={pathname === item.path}
            >
              {item.text}
            </SidebarItem>
          ))}
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
