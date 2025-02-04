import { createContext, useContext, useState } from "react";

export const dashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showEditResults , setShowEditResults ] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    resultStatus: "",
    date: "",
    hplc: "",
    centerCode: "",
    bloodStatus: "",
    cardStatus: "",
  });
  const [selectedRows, setSelectedRows] = useState([]); // State to track selected rows
  

  return (
    <dashboardContext.Provider value={{ activeIndex, setActiveIndex, filters, setFilters, showFilters, selectedRows, setSelectedRows,
    setShowFilters, showEditResults , setShowEditResults }}>
      {children}
    </dashboardContext.Provider>
  );
};

// Custom hook for Context
export const useDashboardContext = () => {
  const dashboardContextApi = useContext(dashboardContext);
  if (!dashboardContextApi) {
    throw new Error("useDashboardContext must be used within a DashboardProvider");
  }
  return dashboardContextApi; // Return the correct value
};
