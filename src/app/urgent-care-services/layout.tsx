"use client";

import UrgentCareServicesSidebar from "@/components/UrgentCareServicesSidebar";
import { useState } from "react";

export default function UrgentCareServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main
      className={`transition-all duration-300 ease-in-out ${
        sidebarOpen ? "lg:ml-60" : "ml-0"
      }`}
    >
      <div>
        <UrgentCareServicesSidebar setISSidebarOpen={toggleSidebar} />
        {children}
      </div>
    </main>
  );
}
