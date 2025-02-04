import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDashboardContext } from "../../../context/dashboardContext";

const CenterCount = () => {
  const { activeIndex, setActiveIndex } = useDashboardContext();
  const [centerData, setCenterData] = useState([]); // Default state as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Center Count Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hpos-admi-pannel-node-js-jhga.onrender.com/admin/getCenterCountsByCenterAndDate"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        
        // Check if the `totalData` property is available and is an array
        if (Array.isArray(data.totalData)) {
          setCenterData(data.totalData); // Store the fetched data in state
        } else {
          throw new Error("Data.totalData is not an array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Toggle accordion open/close state
  const toggleAccordion = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === "centerCount" ? null : "centerCount"
    );
  };

  // Check if this accordion is active
  const isActive = activeIndex === "centerCount";

  // Ensure `centerData` is an array before calling `.slice()`
  const displayedItems = isActive ? centerData : Array.isArray(centerData) ? centerData.slice(0, 4) : [];

  return (
    <div
      className={`absolute z-10 md:w-[400px] md:min-h-[230px] md:mx-3 md:p-2 md:my-1 
      rounded-lg border border-gray-300 bg-white shadow-md ${isActive ? 'md:h-screen' : 'md:h-auto'}`}
    >
      <div className="flex items-center justify-between md:mx-4 md:my-2">
        <p className="font-semibold text-sm">Center Count</p>
        <button
          className="flex items-center text-blueDark"
          onClick={toggleAccordion}
        >
          {isActive ? (
            <>
              View Less <IoIosArrowUp />
            </>
          ) : (
            <>
              View More <IoIosArrowDown />
            </>
          )}
        </button>
      </div>
      <hr className="text-gray-600 md:mb-2" />

      <div className="md:mx-3">
        {/* Show loading state */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : centerData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-[14px] font-poppins">
                <th className="md:px-3 md:py-1">Sr. No.</th>
                <th className="md:px-3 md:py-1">Company Name</th>
                <th className="md:px-3 md:py-1">Date</th>
                <th className="md:px-3 md:py-1">Count</th>
              </tr>
            </thead>
            <tbody>
              {displayedItems.map(({ centerName, date, totalCount }, index) => (
                <tr key={index} className="text-xs font-poppins">
                  <td className="md:px-3 md:py-2">{index + 1}</td>
                  <td className="md:px-3 md:py-2">{centerName}</td>
                  <td className="md:px-3 md:py-2">{date}</td>
                  <td className="md:px-3 md:py-2">{totalCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CenterCount;
