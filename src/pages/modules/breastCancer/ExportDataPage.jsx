import React, { useState } from 'react';
import Filter from '../../../assets/Filter.svg';
import filterPointer from '../../../assets/filterPointer.png';
import Search from '../../../assets/vector.png';
import DownArrow from '../../../assets/DownArrow.svg';
import Download from '../../../assets/Download.svg';
import MyDatePicker from './datePicker';

const ExportData = () => {
    // Sample data
    const [tableData] = useState([
        { id: 1, uniqueId: "1234a", centerName: "Center A", location: "New York", sex: "M", age: 25, date: "2025-01-01" },
        { id: 2, uniqueId: "1234b", centerName: "Center B", location: "Los Angeles", sex: "F", age: 30, date: "2025-01-02" },
        { id: 3, uniqueId: "1234c", centerName: "Center C", location: "Chicago", sex: "M", age: 22, date: "2025-01-03" },
        { id: 4, uniqueId: "1234d", centerName: "Center D", location: "Houston", sex: "F", age: 27, date: "2025-01-04" },
        // Add more data as needed
    ]);

    const [filterOptions, setFilterOptions] = useState(false);
    const [filters, setFilters] = useState({
        centerName: "",
        dateFrom: null,
        dateTo: null,
        location: "",
        sex: "All",
        ageFrom: "",
        ageTo: "",
    });

    const [filteredData, setFilteredData] = useState(tableData);
    const [toggleCenterName, settoggleCenterName] = useState(false)
    const [toggleAge, settoggleAge] = useState(false)

    const handleFilterChange = (field, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
    };

    const applyFilters = () => {
        let filtered = tableData;

        // Apply filter by center name
        if (filters.centerName) {
            filtered = filtered.filter((row) =>
                row.centerName.toLowerCase().includes(filters.centerName.toLowerCase())
            );
        }

        // Apply filter by location
        if (filters.location) {
            filtered = filtered.filter((row) =>
                row.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        // Apply filter by date range
        if (filters.dateFrom && filters.dateTo) {
            filtered = filtered.filter((row) => {
                const rowDate = new Date(row.date);
                return rowDate >= new Date(filters.dateFrom) && rowDate <= new Date(filters.dateTo);
            });
        }

        // Apply filter by sex
        if (filters.sex !== "All") {
            filtered = filtered.filter((row) => row.sex === filters.sex);
        }

        // Apply filter by age range
        if (filters.ageFrom) {
            filtered = filtered.filter((row) => row.age >= parseInt(filters.ageFrom));
        }
        if (filters.ageTo) {
            filtered = filtered.filter((row) => row.age <= parseInt(filters.ageTo));
        }

        setFilteredData(filtered);
        setFilterOptions(false); // Close the filter dialog after applying
    };

    return (
        <div className="Lower">
            <div className="h-[100vh] w-[80vw] mx-2 my-1 relative">
                <div className="heading px-6 py-4 flex gap-6 justify-between items-center">
                    <div className="btns flex gap-4 text-[12px] items-center">
                        <button
                            onClick={() => setFilterOptions(!filterOptions)}
                            className="Filterdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md"
                        >
                            <span className="font-semibold">Filter Data</span>
                            <img src={Filter} alt="Filter Icon" className="size-5" />
                        </button>
                        <button
                            className="bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md"
                        >
                            <img src={Download} alt="Filter Icon" className="size-5" />
                            <span className="font-semibold">Export into Excel</span>
                        </button>
                    </div>
                    <div className="totatNumber">
                        <h6 className='text-[0.65rem]'><span className="text-[#004fea]">Number of lists :</span> {tableData.length}</h6>
                    </div>
                </div>

                {filterOptions && (
                    <div className="absolute w-[60vw] min-h-[70vh] top-[6.5vh] left-[5%] border-2 border-black rounded-lg bg-[#dfeeff] m-2 p-3">
                        <img src={filterPointer} alt="" className="relative top-[-3.3vh] left-[0.8vw] size-3" />
                        <div className="heading flex justify-between items-center px-11 py-6">
                            <h1 className="font-bold text-xl">Filters</h1>
                            <div className="btns flex gap-4">
                                <button onClick={() => { setFilterOptions(false) }} className="cancelBtn font-semibold text-xs">Cancel</button>
                                <button onClick={applyFilters} className="cancelBtn text-[#0057FF] font-semibold text-xs">Apply</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col gap-4">
                                {/* Location Filter */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="mx-12 text-md font-semibold flex items-center gap-3">
                                        <img src={DownArrow} alt="" className="size-6" />
                                        <span>Search Location</span>
                                    </h2>
                                    <div className="rounded-md w-[25vw] bg-[#FFFFFF] mx-12 flex flex-col items-start justify-center">
                                        <label htmlFor="location">
                                            <div className="mx-4 py-2 rounded-sm relative">
                                                <img src={Search} alt="" className="absolute z-10 top-[35%] right-[0.8vw] size-4" />
                                                <input
                                                    id="location"
                                                    type="text"
                                                    placeholder="Search Location"
                                                    className="pr-8 pl-2 py-1 w-[20vw] rounded-md border placeholder:text-[#BCBCBC]"
                                                    value={filters.location}
                                                    onChange={(e) => handleFilterChange("location", e.target.value)}
                                                />
                                            </div>
                                        </label>
                                        <div className="checkboxes">
                                            {['Wadi', 'Hingna', 'Chhatrapati', 'Kamathi', 'Ramtek'].map((items, index) => {
                                                return <div key={index} className=" mx-4 flex gap-2 py-1 rounded-sm relative">
                                                    <input
                                                        type="checkbox"
                                                        className="px-2 py-2 rounded-md border"
                                                    />
                                                    <span>{items}</span>
                                                </div>
                                            })}
                                        </div></div>
                                </div>

                                {/* Center Name Filter */}
                                <div className="name mx-12 flex flex-col gap-2">
                                    <h2 onClick={()=>{
                                        settoggleCenterName(!toggleCenterName)
                                    }} className="text-md font-semibold flex items-center gap-3 cursor-pointer">
                                        <img src={DownArrow} alt="" className="size-6" />
                                        <span>Center Name</span>
                                    </h2>
                                    {toggleCenterName?<label htmlFor="enterCenter">
                                        <div className="bg-[#FFFFFF] w-[25vw] mx-4 px-4 py-2 rounded-md relative right-4">
                                            <input
                                                id="enterCenter"
                                                type="text"
                                                placeholder="Enter Center Name"
                                                className="pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]"
                                                value={filters.centerName}
                                                onChange={(e) => handleFilterChange("centerName", e.target.value)}
                                            />
                                        </div>
                                    </label>:null}
                                </div>

                                {/* Age Group Filter */}
                                <div className="ageGroup mx-12 flex flex-col gap-2">
                                    <h2 onClick={()=>{
                                        settoggleAge(!toggleAge)
                                    }}  className="text-md font-semibold flex items-center gap-3 cursor-pointer">
                                        <img src={DownArrow} alt="" className="size-6" />
                                        <span>Age Group</span>
                                    </h2>
                                    {toggleAge?<div className="flex px-2 gap-2">
                                        <input
                                            type="number"
                                            placeholder="Min Age"
                                            className="bg-[#FFFFFF] w-[15vw] mx-2 px-4 py-2 rounded-md relative right-4"
                                            value={filters.ageFrom}
                                            onChange={(e) => handleFilterChange("ageFrom", e.target.value)}
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max Age"
                                            className="bg-[#FFFFFF] w-[15vw] mx-2 px-4 py-2 rounded-md relative right-4"
                                            value={filters.ageTo}
                                            onChange={(e) => handleFilterChange("ageTo", e.target.value)}
                                        />
                                    </div>:null}
                                </div>
                            </div>
                            <div className="name mx-12 flex flex-col gap-2">
                                <h2 className="text-md font-semibold flex items-center gap-3">
                                    <img src={DownArrow} alt="" className="size-6" />
                                    <span>Serial Number</span>
                                </h2>
                                <label htmlFor="enterCenter">
                                    <div className="bg-[#FFFFFF] w-[21vw] mx-4 px-4 py-2 rounded-md relative right-4">
                                        <input
                                            id="enterCenter"
                                            type="text"
                                            placeholder="Enter Serial Number"
                                            className="pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]"
                                            value={filters.serialNumber}
                                            onChange={(e) => handleFilterChange("serialNumber", e.target.value)}
                                        />
                                    </div>
                                </label>
                            <div className="selectDate flex flex-col gap-2 relative right-4">
                                <h2 className='text-md font-semibold flex gap-2 px-3'>
                                    <img src={DownArrow} alt="" className="" />
                                    <span>Select Date</span></h2>
                                <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-md relative">
                                    <div className="flex gap-1 items-start justify-center">
                                        <span className='text-md '>From</span> <MyDatePicker />
                                        <span className='text-md'>To</span><MyDatePicker />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Table Content */}
                <div className="table bg-[#FFFFFF] min-h-[90vh] shadow-md rounded-md border-collapse">
                    <table className=" w-[80vw]">
                        <thead>
                            <tr className="border-b-2 py-2 px-2 border-gray-300">
                                <th className="py-2 px-9 border-b-2 border-gray-300">Sr No</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Unique Id</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Center Name</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Location</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Sex</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Age</th>
                                <th className="py-2 px-9 border-b-2 border-gray-300">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dynamically render rows from data */}
                            {filteredData.map((row, index) => (
                                <tr key={index} className="w-full text-center text-[15px]">
                                    <td className="py-2 pr-2 text-center">{row.id}</td>
                                    <td className="py-2 pr-2 text-center">{row.uniqueId}</td>
                                    <td className="py-2 px-4 text-center">{row.centerName}</td>
                                    <td className="py-2 px-4 text-center">{row.location}</td>
                                    <td className="py-2 px-4 text-center">{row.sex}</td>
                                    <td className="py-2 px-4 text-center">{row.age}</td>
                                    <td className="py-2 px-4 text-center">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    );
};

export default ExportData;