import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import polygoneImg from "../../../assets/polypone.png";
import { useDashboardContext } from "../../../context/dashboardContext";

const FilterData = ({ filters, setFilters, toggleFilters }) => {
  
    const {showFilters, setShowFilters } = useDashboardContext();
  // Handle filter input changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="absolute left-[250px] border-2 border-black bg-[#DFEEFF] 
      md:w-[700px] md:h-auto p-6 rounded-md shadow-md"
    >
      <img src={polygoneImg} className="absolute z-10 -top-3 left-[30px]" />
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700 text-lg">Filters</h3>
        <div className="flex space-x-6 font-semibold">
          <button className="text-gray-600" onClick={() => setShowFilters(false)}>Cancel</button>
          <button className="text-[#0057FF]"  onClick={() => setShowFilters(false)}>Save View</button>
        </div>
      </div>

      {/* Filter Fields Section */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {/* Left Section - 3 Fields */}
        <div className="flex flex-col space-y-4">
          {/* Employee Name */}
          <div>
            <label className="flex items-center font-semibold text-[16px]  md:mb-2 ">
              <IoIosArrowDown className="md:mr-2" />
              Enter Employee Name
            </label>
            <div className="bg-white md:w-[325px] flex items-center justify-center rounded-[5px] md:h-[55px]  ">
              <input
                type="text"
                name="Enter emp name"
                placeholder="Enter Employee Name"
                value={filters.name}
                onChange={handleFilterChange}
                className="relative text-sm items-center p-4 border border-[#BCBCBC] text-[#BCBCBC] md:w-[200px] md:h-[30px] rounded-md"
              />
              <LuSearch className="absolute z-10 left-[250px]" />
            </div>
          </div>

          {/* Select Date */}
          <div>
            <label className="font-semibold text-[16px] flex items-center md:mb-2">
              <IoIosArrowDown className="md:mr-2 " /> Select Date
            </label>
            <div className="flex space-x-2 items-center">
              <p>From</p>

              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
                className="p-2 border text-xs rounded-md md:w-[80px]"
              />
              <p className="">To</p>
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
                className="p-2 border text-xs rounded-md w-[80px] "
              />
            </div>
          </div>

          {/* Center Code */}
          <div>
            <label className="font-semibold text-[16px] flex items-center  md:mb-2">
              <IoIosArrowDown className="mr-2" /> Enter Center Code
            </label>
            <input
              type="text"
              name="centerCode"
              placeholder="Enter Center Code"
              value={filters.centerCode}
              onChange={handleFilterChange}
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* Blood Status */}
          <div>
            <label className="font-semibold text-[16px] flex items-center  md:mb-2">
              <IoIosArrowDown className="mr-2" /> Blood Status
            </label>
            <select
              name="bloodStatus"
              value={filters.bloodStatus}
              onChange={handleFilterChange}
              className="p-3 border rounded-md w-full"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Submitted">Submitted</option>
            </select>
          </div>
        </div>

        {/* Right Section - 4 Fields */}
        <div className="flex flex-col space-y-4">
          {/* Result Status */}
          <div>
            <label className="font-semibold text-[16px] flex items-center  md:mb-2">
              <IoIosArrowDown className="mr-2" /> Select Result Status
            </label>
            <select
              name="resultStatus"
              value={filters.resultStatus}
              onChange={handleFilterChange}
              className="p-3 border rounded-md w-full"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Submitted">Submitted</option>
            </select>
          </div>

          {/* HPLC Status */}
          <div>
            <label className="font-semibold text-[16px] flex items-center  md:mb-2">
              <IoIosArrowDown className="mr-2" /> Select HPLC Status
            </label>
            <select
              name="hplc"
              value={filters.hplc}
              onChange={handleFilterChange}
              className="p-3 border rounded-md w-full"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Submitted">Submitted</option>
            </select>
          </div>

          {/* Card Status */}
          <div>
            <label className="font-semibold text-[16px] flex items-center  md:mb-2">
              <IoIosArrowDown className="mr-2" /> Select Card Status
            </label>
            <select
              name="cardStatus"
              value={filters.cardStatus}
              onChange={handleFilterChange}
              className="p-3 border rounded-md w-full"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Handout">Handout</option>
            </select>
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      {/* <div className="flex justify-end mt-4">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={toggleFilters}
        >
          Apply Filters
        </button>
      </div> */}
    </div>
  );
};

export default FilterData;
