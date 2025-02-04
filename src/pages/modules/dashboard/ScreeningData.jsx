import React, { useState } from 'react'
import { GrFilter } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { screeningDataItems } from '../mockData/screeningDataItems';
import userIcon from '../../../assets/userIcon.png';
import FilterData from './FilterData';
import { useDashboardContext } from '../../../context/dashboardContext';
import EditResults from './EditResults';
import { getStatusColor } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';


const ScreeningData = () => {
  const {showFilters,filters, setFilters, setShowFilters, showEditResults , setShowEditResults } = useDashboardContext();
  const navigate = useNavigate(); 

  // Toggle filter form
  const toggleFilters = () => setShowFilters(!showFilters);
  // Toggle editresults form
  const toggleEditResults = () => setShowEditResults(!showEditResults);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Navigate to the EditResults page with ID
  };

  const handleClick = () => {
    toggleEditResults();
    handleEdit(id)
  };

  // Apply filters
  const filteredData = screeningDataItems.filter((item) => {
    return (
      (filters.name ? item.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
      (filters.resultStatus ? item.resultStatus === filters.resultStatus : true) &&
      (filters.date ? item.date === filters.date : true) &&
      (filters.hplc ? item.hplc === filters.hplc : true) &&
      (filters.centerCode ? item.centerCode.includes(filters.centerCode) : true) &&
      (filters.bloodStatus ? item.bloodStatus === filters.bloodStatus : true) &&
      (filters.cardStatus ? item.cardStatus === filters.cardStatus : true)
    );
  });

  // css
  const btnStyle =
    "flex text-sm items-center font-semibold text-[#004FEA] bg-sky-100 md:px-3 md:py-1 border border-blue rounded-lg";

 

  return (
    <div className="relative">
      <div
        className="md:w-auto md:min-h-[200px] md:h-auto md:mx-4 md:p-2 md:my-1 
            rounded-lg border border-gray-300 bg-white shadow-md"
      >
        <div className="flex items-center space-x-7 md:mx-4 md:my-2">
          <p className="font-semibold text-xl text-gray-600">Screening Data</p>
          <button className={btnStyle} onClick={toggleFilters}>
            Filter Data <GrFilter className="md:ml-2 " />
          </button>
          <button className={btnStyle} onClick={handleClick} >
            Edit Result <BiEdit className="md:ml-2 text-[16px]" />
          </button>
        </div>

        {/* Show FilterData component when showFilters is true */}
        {showFilters && <FilterData filters={filters} setFilters={setFilters} 
        toggleFilters={toggleFilters} />}

        <hr className="text-gray-600 md:mb-2" />

        <div className="md:mx-3">
          <table className="w-full text-center">
            <thead>
              <tr className="text-gray-500 text-[14px] ">
                <th className="md:px-3 md:py-1"></th>
                <th className="md:px-3 md:py-1">Name</th>
                <th className="md:px-3 md:py-1">Date</th>
                <th className="md:px-3 md:py-1">Center Code</th>
                <th className="md:px-3 md:py-1">Blood Status</th>
                <th className="md:px-3 md:py-1">Result Status</th>
                <th className="md:px-3 md:py-1">HPCL</th>
                <th className="md:px-3 md:py-1">Card Status</th>
                <th className="md:px-3 md:py-1"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                ({ id, name, date, centerCode, bloodStatus, resultStatus, hplc, cardStatus }) => (
                  <tr key={id} className="text-sm text-gray-600  font-poppins">
                    <td className="">
                      <img src={userIcon} className=" md:h-7 p-2 bg-sky-100" />
                    </td>
                    <td className="md:px-3 md:py-2">{name}</td>
                    <td className="md:px-3 md:py-2">{date}</td>
                    <td className="md:px-3 md:py-2">{centerCode}</td>
                    <td className={`md:px-3 md:py-2 ${getStatusColor(bloodStatus)}`}>
                      {bloodStatus}
                    </td>
                    <td className={`md:px-3 md:py-2 ${getStatusColor(resultStatus)}`}>
                      {resultStatus}
                    </td>
                    <td className={`md:px-3 md:py-2 ${getStatusColor(hplc)}`}>{hplc}</td>
                    <td className={`md:px-3 md:py-2 ${getStatusColor(cardStatus)}`}>
                      {cardStatus}
                    </td>
                    <td className="flex space-x-6 text-xl text-gray-500 md:px-3 md:py-2">
                      <LuDownload className='cursor-pointer' />
                      <BiEdit className="cursor-pointer" />
                      <RiDeleteBin6Line className="text-red-400 cursor-pointer" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showEditResults && <EditResults toggleEditResults={toggleEditResults} /> }
    </div>
  );
};

export default ScreeningData;
