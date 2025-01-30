import React, { useState } from "react";
import SuperAdminSidebar from "../sidebar/SuperAdminSidebar";
import SuperAdminHeader from "../header/SuperAdminHeader";

const SuperAdminLayout = ({
  children,
  setActiveTab,
  hideSidebarAndHeader = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {!hideSidebarAndHeader && (
        <div
          className={`transition-all duration-300 ${
            isCollapsed ? "w-20" : "w-[280px]"
          }`}
        >
          <SuperAdminSidebar
            setActiveTab={setActiveTab}
            isCollapsed={isCollapsed}
          />
        </div>
      )}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          hideSidebarAndHeader ? "w-full" : ""
        }`}
      >
        {!hideSidebarAndHeader && (
          <SuperAdminHeader
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        )}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
