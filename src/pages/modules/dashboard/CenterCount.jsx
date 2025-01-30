import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { centerCountItems } from "../mockData/centerCountItems";
import { useDashboardContext } from "../../../context/dashboardContext";

const CenterCount = () => {
  const { activeIndex, setActiveIndex } = useDashboardContext();

  // Toggle accordion open/close state
  const toggleAccordion = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === "centerCount" ? null : "centerCount"
    );
  };

  // Check if this accordion is active
  const isActive = activeIndex === "centerCount";

  // Conditionally determine the items to display
  const displayedItems = isActive
    ? centerCountItems // Show all items if active
    : centerCountItems.slice(0, 4); // Show only the first 5 items if inactive

  return (
    <div
      className={`absolute z-10 md:w-[400px] md:min-h-[200px]   md:mx-3 md:p-2 md:my-1 
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
            {displayedItems.map(({ id, SrNo, companyName, date, count }) => (
              <tr key={id} className="text-xs font-poppins">
                <td className="md:px-3 md:py-2">{SrNo}</td>
                <td className="md:px-3 md:py-2">{companyName}</td>
                <td className="md:px-3 md:py-2">{date}</td>
                <td className="md:px-3 md:py-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CenterCount;
