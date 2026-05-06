"use client";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useState } from "react";

const DashboardShell = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full">
      <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 min-w-0 w-full transition-all duration-350">
        <DashboardHeader isOpen={isOpen} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardShell;
