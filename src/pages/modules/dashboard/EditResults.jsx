import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDashboardContext } from "../../../context/dashboardContext";
import { GrFilter } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import userIcon from "../../../assets/userIcon.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { initialData } from "../mockData/screeningDataItems";
import { getStatusColor } from "../../../utils/constant";
import FilterData from "./FilterData";

const EditResults = () => {
  const {
    showFilters,
    setShowFilters,
    filters,
    setFilters,
    setShowEditResults,
    selectedRows,
    setSelectedRows,
  } = useDashboardContext();

  // Toggle filter form
  const toggleFilters = () => setShowFilters(!showFilters);

  // CSS
  const btnStyle =
    "flex text-sm items-center font-semibold text-[#004FEA] bg-sky-100 md:px-3 md:py-1 border border-blue rounded-lg";

  const tableHeading = "p-2 border-none font-semibold md:w-[97px]";

  const tableData = "p-2 border rounded-md w-full";

  const [formData, setFormData] = useState(initialData);

  // Handle Checkbox Selection
  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Handle Input Change
  const handleInputChange = (id, field, value) => {
    setFormData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className="fixed inset-0 bg-white p-6 overflow-auto z-20">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowEditResults(false)}
            className="text-xl text-gray-600"
          >
            <IoArrowBack />
          </button>
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>

        {/* Cancel and Save Buttons */}
        <div className="space-x-4">
          <button
            className="px-4 py-2 border rounded text-gray-700"
            onClick={() => setShowEditResults(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#98BBFF] text-[#0057FF] rounded hover:bg-blue-700"
            onClick={() => setShowEditResults(false)}
          >
            Save
          </button>
        </div>
      </div>
      {/* Show FilterData component when showFilters is true */}
      {showFilters && (
       <div className="absolute top-36 left-1">
         <FilterData
          filters={filters}
          setFilters={setFilters}
          toggleFilters={toggleFilters}
        />
       </div>
      )}
      <div className="mt-6 shadow-lg rounded-xl">
        {/* Screening Data with Edit and Filter Buttons */}
        <div className="flex items-center space-x-7 md:mx-4 md:my-3">
          <p className="font-semibold text-xl text-gray-600">Screening Data</p>
          <button className={btnStyle} onClick={toggleFilters}>
            Filter Data <GrFilter className="md:ml-2" />
          </button>
          <button className={btnStyle}>
            Edit Result <BiEdit className="md:ml-2 text-[16px]" />
          </button>
        </div>

        {/* Data Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="text-[14px]">
            <tr>
              <th className={`${tableHeading}`}>Select</th>
              <th className={`${tableHeading}`}>Name</th>
              <th className={`${tableHeading}`}>Marital Status</th>
              <th className={`${tableHeading}`}>Center Code</th>
              <th className={`${tableHeading}`}>Age</th>
              <th className={`${tableHeading}`}>Gender</th>
              <th className={`${tableHeading}`}>Category</th>
              <th className={`${tableHeading}`}>Caste</th>
              <th className={`${tableHeading}`}>Location</th>
              <th className={`${tableHeading}`}>Blood Status</th>
              <th className={`${tableHeading}`}>Result Status</th>
              <th className={`${tableHeading}`}>Card Status</th>
              <th className="p-2 border-none font-semibold md:w-[40px]"></th>
            </tr>
          </thead>

          <tbody>
            {formData.map((row) => (
              <tr
                key={row.id}
                className={`text-center text-[14px] ${
                  selectedRows.includes(row.id) ? "bg-blue-100" : ""
                }`}
              >
                <td className="p-2 border flex items-center justify-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                    className="cursor-pointer"
                  />
                  <img src={userIcon} alt="User Icon" className="w-5 h-5 " />
                </td>
                <td className="p-1 border">{row.name}</td>
                <td className="p-2 border">
                  <select value={row.maritalStatus} onChange={(e) =>
                      handleInputChange(row.id, "maritalStatus", e.target.value)
                    } className={`${tableData}`}>
                    <option value="">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    value={row.centerCode}
                    className={`${tableData}`}
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={row.age}
                    className={`${tableData}`}
                  />
                </td>
                <td className="p-2 border">
                  <select value={row.gender} onChange={(e) =>
                      handleInputChange(row.id, "gender", e.target.value)
                    }
                   className={`${tableData}`}>
                    <option value="">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <select
                    type="text"
                    value={row.category}
                    
                    className={`${tableData}`}
                  >
                    <option value="">NT-B</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <select value={row.caste} className={`${tableData}`}>
                    <option value="">NT-B</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    value={row.location}
                    className={`${tableData}`}
                  />
                </td>
                <td className="p-2 border  w-[100px] font-semibold">
                  <select
                    type="text"
                    value={row.bloodStatus}
                    onChange={(e) =>
                      handleInputChange(row.id, "bloodStatus", e.target.value)
                    }
                    className={`${tableData} ${getStatusColor(
                      row.bloodStatus
                    )}`}
                  >
                    <option value="Submitted">Submitted</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
                <td className="p-2 border font-semibold w-[100px]">
                  <select
                    type="text"
                    value={row.resultStatus}
                    onChange={(e) =>
                      handleInputChange(row.id, "resultStatus", e.target.value)
                    }
                    className={`${tableData} ${getStatusColor(
                      row.resultStatus
                    )}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Submitted">Submitted</option>
                  </select>
                </td>
                <td className="p-2 border  font-semibold">
                  <select
                    value={row.cardStatus}
                    onChange={(e) =>
                      handleInputChange(row.id, "cardStatus", e.target.value)
                    }
                    className={`${tableData} ${getStatusColor(row.cardStatus)}`}
                  >
                    <option value="Handout">Handout</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
                <td className="p-2 border text-xl">
                  {" "}
                  <RiDeleteBin6Line className="text-red-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditResults;
