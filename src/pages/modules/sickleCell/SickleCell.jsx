import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CenterCount from './CenterCount';
import MyDatePicker from './datePicker';
import Chart from './Chart';
import LeftArrow from '../../../assets/LeftArrow.svg';
import DownArrow from '../../../assets/DownArrow.svg';
import UpArrow from '../../../assets/UpArrow.svg';
import Filter from '../../../assets/Filter.svg'
import Delete from '../../../assets/Delete.svg';
import EditData from '../../../assets/EditData.svg';
import Download from '../../../assets/Download.svg';
import Profile from '../../../assets/profile.png';
import Search from '../../../assets/vector.png';
import filterPointer from '../../../assets/filterPointer.png';
import totalPatient from "../../../assets/totalPatient.png";
import malePatient from "../../../assets/malePatient.png";
import Female from "../../../assets/female.png";

const SickleCell = () => {
    const [showReport, setShowReport] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [EditTable, setEditTable] = useState(false);
    const [FilterOptionsEdit, setFilterOptionsEdit] = useState(false);
    const [filterOptions, setFilterOptions] = useState(false);
    const [filters, setFilters] = useState({
        employeeName: "",
        dateFrom: null,
        dateTo: null,
        centerCode: "",
        bloodStatus: "All",
        resultStatus: "All",
        hplcStatus: "All",
        cardStatus: "All",
    });
    const divRef = useRef(null);

    //maximum screening data
    const Editdata = [
        { name: 'John Doe', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Submitted', cardStatus: 'Pending' },
        { name: 'John Doe1', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Pending', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
        { name: 'John Doe2', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
        // Add more data here...
    ];

    //minimum screening data
    const data = [
        { name: 'John Doe', img: ' ', date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Submitted', HPLC: 'Pending', cardStatus: 'Pending' },
        { name: 'John Doe1', img: ' ', date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Pending', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
        { name: 'John Doe2', img: ' ', date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
    ];

    // To toggle the filter dialog
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            console.log("Clicked outside");
            setFilterOptionsEdit(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    const handleEditTable = () => {
        setEditTable(!EditTable)
    }


    const handleFilterChange = (field, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
    };

    const [filteredData, setFilteredData] = useState(data);
    const applyFilters = () => {
        let filtered = data;

        if (filters.employeeName) {
            filtered = filtered.filter((row) =>
                row.name.toLowerCase().includes(filters.employeeName.toLowerCase())
            );
        }
        if (filters.centerCode) {
            filtered = filtered.filter((row) =>
                row.centerCode.toLowerCase().includes(filters.centerCode.toLowerCase())
            );
        }
        if (filters.dateFrom && filters.dateTo) {
            filtered = filtered.filter((row) => {
                const rowDate = new Date(row.date);
                return rowDate >= new Date(filters.dateFrom) && rowDate <= new Date(filters.dateTo);
            });
        }
        if (filters.bloodStatus !== "All") {
            filtered = filtered.filter((row) => row.bloodStatus === filters.bloodStatus);
        }
        if (filters.resultStatus !== "All") {
            filtered = filtered.filter((row) => row.resultStatus === filters.resultStatus);
        }
        if (filters.hplcStatus !== "All") {
            filtered = filtered.filter((row) => row.HPLC === filters.hplcStatus);
        }
        if (filters.cardStatus !== "All") {
            filtered = filtered.filter((row) => row.cardStatus === filters.cardStatus);
        }

        setFilteredData(filtered);
        setFilterOptions(false); // Close the filter dialog after applying
    };


    const handleToggle = (para) => {
        if (para === "candidateReport")
            setShowReport(!showReport)
        else if (para === "chart")
            setShowChart(!showChart);
    }

    return (
        <div className="container mx-auto m-2">
            <div className="Upper flex gap-3">
                <div className="Left w-[48.5vw] flex flex-col">
                    <div className="Leftupper  w-[49vw] h-[20vh] mx-2 my-1 flex justify-center gap-10 ">
                        <div className="bg-white flex-1 p-4 rounded-sm shadow-md">
                            <Link to="/export-data">
                                <div className="w-10 h-10 bg-blue-100 mb-4 flex items-center justify-center">
                                    <img src={totalPatient} className="w-10 h-10 rounded-2xl" alt="Total Patient" />
                                </div>
                                <p className="text-gray-500">Total</p>
                                <p className="text-lg font-semibold">15200</p>
                            </Link>
                        </div>
                        <div className="bg-white flex-1 p-4 rounded-sm shadow-md">
                            <div className="w-10 h-10 bg-red-100 mb-4 flex items-center justify-center">
                                <img src={malePatient} className="w-6 h-6" alt="Male Patient" />
                            </div>
                            <p className="text-gray-500">Male</p>
                            <p className="text-lg font-semibold">8000</p>
                        </div>
                        <div className="bg-white flex-1 p-4 rounded-sm shadow-md">
                            <div className="w-10 h-10 bg-green-100 mb-4 flex items-center justify-center">
                                <img src={Female} className="w-6 h-7" alt="Female Patient" />
                            </div>
                            <p className="text-gray-500">Female</p>
                            <p className="text-lg font-semibold">7000</p>
                        </div>
                    </div>

                    <div className="Leftlower bg-white w-[49vw] h-[5vh] mx-2 my-1 shadow-md rounded-md flex justify-between items-center p-2">
                        <h1>Candidates Report</h1>
                        <div onClick={(e) => handleToggle("candidateReport")} className="flex justify-between items-center gap-1 text-[13px] cursor-pointer">
                            <button className='text-blue-500'>{showReport ? 'Hide Report' : 'View Report'}</button>
                            <img src={showReport ? UpArrow : DownArrow} alt="Toggle Chart" />
                        </div>
                    </div>

                    {showReport && (

                        <div className="flex report w-[49vw] mx-2 gap-4">
                            <div className="sm:w-1/4 p-4 bg-blue-200 rounded-lg shadow-md"><p className="text-gray-500">Normal</p>
                                <p className="text-lg font-semibold mb-2">8000</p></div>
                            <div className="sm:w-1/4 p-4 bg-green-200 rounded-lg shadow-md"><p className="text-gray-500">Sickel Cell Trait</p>
                                <p className="text-lg font-semibold mb-2">8000</p></div>
                            <div className="sm:w-1/4 p-4 bg-orange-200 rounded-lg shadow-md"><p className="text-gray-500">Sickle Cell Disease</p>
                                <p className="text-lg font-semibold mb-2">8000</p></div>
                            <div className="sm:w-1/4 p-4 bg-cyan-100 rounded-lg shadow-md"><p className="text-gray-500">Total Card Distributed</p>
                                <p className="text-lg font-semibold mb-2">8000</p></div>
                        </div>
                    )}


                    <div className="Leftlower bg-white w-[49vw] h-[5vh] mx-2 my-1 shadow-md rounded-md flex justify-between items-center p-2">
                        <h1>Candidate Visit</h1>
                        <div onClick={(e) => handleToggle("chart")} className="flex justify-between items-center gap-1 text-[13px] cursor-pointer">
                            <button className='text-blue-500'>{showChart ? 'Hide Graph' : 'View Graph'}</button>
                            <img src={showChart ? UpArrow : DownArrow} alt="Toggle Chart" />
                        </div>
                    </div>

                    {showChart && (
                        <div className="upperchart min-h-[40vh] w-[49vw] mx-2 bg-white shadow-md rounded-md">
                            <Chart />
                        </div>
                    )}
                </div>

                <div className="rightContainer relative w-[30vw] ml-4">
                    <CenterCount />
                </div>
            </div>
            {/*Lower Section*/}
            <div className="Lower">
                <div className="h-[90vh] max-w-[79vw] mx-2 my-1 bg-[#FFFFFF] shadow-md rounded-md relative">
                    <div className="heading px-6 py-4 flex gap-6 items-center">
                        <h1 className="font-semibold text-xl">Screening Data</h1>
                        <div className="btns flex gap-4 text-[12px] items-center">
                            <button
                                onClick={() => setFilterOptions(!filterOptions)}
                                className="Filterdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md"
                            >
                                <span className="font-semibold">Filter Data</span>
                                <img src={Filter} alt="Filter Icon" className="size-5" />
                            </button>
                            <button onClick={handleEditTable} className='Editdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                                <span className="font-semibold">Edit Data</span>
                                <img src={EditData} alt="." className='size-5' />
                            </button>
                        </div>
                    </div>
                    {filterOptions && (
                        <div className="absolute min-w-[45vw] min-h-[70vh] top-[7vh] left-[14.5%] border-2 border-black rounded-lg bg-[#dfeeff] m-2">
                            <img src={filterPointer} alt="" className="relative top-[-1.8vh] left-[1.8vw] size-3" />
                            <div className="heading flex justify-between items-center px-11 py-6">
                                <h1 className="font-bold text-xl">Filters</h1>
                                <div className="btns flex gap-4">
                                    <button onClick={() => { setFilterOptions(false) }} className="cancelBtn font-semibold text-xs">Cancel</button>
                                    <button onClick={applyFilters} className="cancelBtn text-[#0057FF] font-semibold text-xs">Apply</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex flex-col gap-4">
                                    <div className="EnterName flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Enter Employee Name</span>
                                        </h2>
                                        <label htmlFor="enterName">
                                            <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                                <img src={Search} alt="" className="absolute z-10 top-[2.5vh] right-[6vw] size-4" />
                                                <input
                                                    id="enterName"
                                                    type="text"
                                                    placeholder="Enter Your Name"
                                                    className="pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]"
                                                    value={filters.employeeName}
                                                    onChange={(e) => handleFilterChange("employeeName", e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="selectDate from flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Select Date</span>
                                        </h2>
                                        <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs pl-2">From</span> <MyDatePicker />
                                                <span className="text-xs pl-2">To</span><MyDatePicker />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="name flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Enter Center</span>
                                        </h2>
                                        <label htmlFor="enterCenter">
                                            <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                                <input
                                                    id="enterCenter"
                                                    type="text"
                                                    placeholder="Enter Your Center"
                                                    className="pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]"
                                                    value={filters.centerCode}
                                                    onChange={(e) => handleFilterChange("centerCode", e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="BloodStatus flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Blood Status</span>
                                        </h2>
                                        <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex flex-col gap-2 text-sm">
                                            {["All", "Submitted", "Pending"].map((status) => (
                                                <label
                                                    key={status}
                                                    className={`flex items-center gap-2 cursor-pointer 
                                                    ${filters.bloodStatus === status ? "border-2 border-blue-500" : "border border-gray-300"} 
                                                    rounded-md px-2 py-1 hover:border-[#007bff94]`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="bloodStatus"
                                                        value={status}
                                                        checked={filters.bloodStatus === status}
                                                        onChange={(e) => handleFilterChange("bloodStatus", e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <span>{status}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="resultStatus flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Result Status</span>
                                        </h2>
                                        <div className="resultSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex flex-col gap-2 text-sm">
                                            {["All", "Submitted", "Pending"].map((status) => (
                                                <label
                                                    key={status}
                                                    className={`flex items-center gap-2 cursor-pointer ${filters.resultStatus === status ? "border-2 border-blue-500" : "border border-gray-300"} 
                                                    rounded-md px-2 py-1 hover:border-[#007bff94]`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="resultStatus"
                                                        value={status}
                                                        checked={filters.resultStatus === status}
                                                        onChange={(e) => handleFilterChange("resultStatus", e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <span className="text-start">{status}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="hpclStatus flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>HPCL Status</span>
                                        </h2>
                                        <div className="hplcStatus bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex flex-col gap-2 text-sm">
                                            {["All", "Submitted", "Pending"].map((status) => (
                                                <label
                                                    key={status}
                                                    className={`flex items-center gap-2 cursor-pointer ${filters.hplcStatus === status ? "border-2 border-blue-500" : "border border-gray-300"} 
                                                    rounded-md px-2 py-1 hover:border-[#007bff94]`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="hplcStatus"
                                                        value={status}
                                                        checked={filters.hplcStatus === status}
                                                        onChange={(e) => handleFilterChange("hplcStatus", e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <span className="text-start">{status}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="CardStatus flex flex-col gap-2">
                                        <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                            <img src={DownArrow} alt="" className="size-5" />
                                            <span>Card Status</span>
                                        </h2>
                                        <div className="cardSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex flex-col gap-2 text-sm">
                                            {["All", "Submitted", "Pending"].map((status) => (
                                                <label
                                                    key={status}
                                                    className={`flex items-center gap-2 cursor-pointer ${filters.cardStatus === status ? "border-2 border-blue-500" : "border border-gray-300"} 
                                                    rounded-md px-2 py-1 hover:border-[#007bff94]`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="cardStatus"
                                                        value={status}
                                                        checked={filters.cardStatus === status}
                                                        onChange={(e) => handleFilterChange("cardStatus", e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <span className="text-start">{status}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}


                    <div className="table">
                        <table className="min-w-full bg-white border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="py-2 px-9 border-b-2 border-gray-300"></th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Name</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Date</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Center Code</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Blood Status</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Result Status</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">HPLC</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300">Card Status</th>
                                    <th className="py-2 px-9 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Dynamically render rows from data */}
                                {filteredData.map((row, index) => (
                                    <tr key={index} className="w-full text-center text-[15px]">
                                        <td className="flex justify-end">
                                            <img src={Profile} alt="" className="bg-[#EEF3FF] w-7 p-2 my-1" />
                                        </td>
                                        <td className="py-2 pr-2 text-center">{row.name}</td>
                                        <td className="py-2 px-4 text-center">{row.date}</td>
                                        <td className="py-2 px-4 text-center">{row.centerCode}</td>
                                        <td
                                            className={`py-2 px-4 text-center ${row.bloodStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'
                                                }`}
                                        >
                                            {row.bloodStatus}
                                        </td>
                                        <td
                                            className={`py-2 px-4 text-center ${row.resultStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'
                                                }`}
                                        >
                                            {row.resultStatus}
                                        </td>
                                        <td
                                            className={`py-2 px-4 text-center ${row.HPLC === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'
                                                }`}
                                        >
                                            {row.HPLC}
                                        </td>
                                        <td
                                            className={`py-2 px-4 text-center ${row.cardStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'
                                                }`}
                                        >
                                            {row.cardStatus}
                                        </td>
                                        <td className="py-2 px-4 text-center flex gap-4 justify-center"><img src={Download} alt='.' className='h-5 w-5' />
                                            <img src={EditData} alt='.' />
                                            <img src={Delete} alt='.' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table >
                    </div >
                </div >
                {EditTable ?
                    (<div className="allEditDatas absolute min-h-[100vh] min-w-[100vw] bg-[#FFFFFF] top-0 left-0 z-40 px-4 py-4">
                        <div className="AllData flex flex-col gap-8 items-center">
                            <div className="heading flex justify-between min-w-[94vw]">
                                <h1 className=" text-2xl font-semibold flex gap-2 items-center">
                                    <button onClick={() => { setEditTable(false) }} >
                                        <div className='flex gap-4 items-center'>
                                            <img src={LeftArrow} alt="" className="size-5" />
                                            <span>Sickle Cell</span>
                                        </div>
                                    </button>
                                </h1>
                                <div className="flex gap-2">
                                    {/* Button to close the edit table */}
                                    <button onClick={() => { setEditTable(false) }} className='Editdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                                        <span className="font-semibold">Back</span>
                                    </button>
                                    {/* Button to save the data */}
                                    <button onClick={() => setEditTable(false)} className='Editdata bg-[#004fea] text-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                                        <span className="font-semibold">Save</span>
                                    </button>
                                </div>
                            </div>
                            <div className="tableData w-fit h-[96vh] bg-[#FFFFFF] shadow-sm shadow-slate-500 rounded-md">
                                <div className="heading px-6 py-4 flex gap-6 items-center">
                                    <h1 className='font-semibold text-xl'>Screening Data</h1>
                                    <div className="btns flex gap-4 text-[12px] items-center">
                                        {/* Filter Data Button */}
                                        <button onClick={() => { setFilterOptionsEdit(!FilterOptionsEdit) }} className='Filterdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                                            <span className="font-semibold">Filter Data</span>
                                            <img src={Filter} alt="." className='size-3' />
                                        </button>
                                        {/* Edit Data Button */}
                                        <button onClick={handleEditTable} className='Editdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                                            <span className="font-semibold">Edit Data</span>
                                            <img src={EditData} alt="." className='size-3' />
                                        </button>
                                    </div>
                                </div>
                                {FilterOptionsEdit ? (
                                    <div ref={divRef}
                                        className="absolute min-w-[45vw] min-h-[70vh] top-[18vh] left-[17%] border-2 border-black rounded-lg bg-[#dfeeff]">
                                        <img src={filterPointer} alt="" className="relative top-[-1.8vh] left-[1.8vw] size-3" />
                                        <div className="heading flex justify-between items-center px-11 py-6">
                                            <h1 className='font-bold text-xl'>Filters</h1>
                                            <div className="btns flex gap-4">
                                                <button onClick={() => { setFilterOptions(false) }} className="cancelBtn font-semibold text-xs">Cancel</button>
                                                <button className="cancelBtn text-[#0057FF] font-semibold text-xs">Save view</button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            {/* Filters for data */}
                                            <div className="flex flex-col gap-4">
                                                {/* Employee Name filter */}
                                                <div className="EnterName flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Enter Employee Name</span></h2>
                                                    <label htmlFor="enterName">
                                                        <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                                            <img src={Profile} alt="" className="absolute z-10 top-[2.5vh] right-[6vw] size-4" />
                                                            <input id='enterName' type="text" placeholder='Enter Your Name' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                                                        </div>
                                                    </label>
                                                </div>
                                                {/* Date filter */}
                                                <div className="selectDate from flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Select Date</span></h2>
                                                    <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                                        <div className="flex gap-1 items-center ju">
                                                            <span className='text-xs pl-2'>To</span><MyDatePicker />
                                                            <span className='text-xs pl-2'>From</span> <MyDatePicker />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Center filter */}
                                                <div className="name flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Enter Employee Name</span></h2>
                                                    <label htmlFor="enterName">
                                                        <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                                                            <input id='enterName' type="text" placeholder='Enter Your Center' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                                                        </div>
                                                    </label>
                                                </div>
                                                {/* Blood Status filter */}
                                                <div className="BloodStatus from flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Blood Status</span></h2>
                                                    <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Other filters (Result, HPLC, Card Status) */}
                                            <div className="flex flex-col gap-3">
                                                {/* Result Status filter */}
                                                <div className="resultStatus from flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Result Status</span></h2>
                                                    <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                                                    </div>
                                                </div>
                                                {/* HPLC Status filter */}
                                                <div className="HPLCStatus from flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>HPLC Status</span></h2>
                                                    <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                                                    </div>
                                                </div>
                                                {/* Card Status filter */}
                                                <div className="CardStatus from flex flex-col gap-2">
                                                    <h2 className="px-12 text-md font-semibold flex items-center gap-3">
                                                        <img src={DownArrow} alt="" className="size-5" />
                                                        <span>Card Status</span></h2>
                                                    <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                                                        <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : null}
                                <div className="table">
                                    <table className="min-w-full bg-white border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-gray-300">
                                                <th className=" px-2 text-end">
                                                    {/* Select checkbox */}
                                                    <span className='Select px-2 text-sm py-1 w-fit rounded-md bg-[#c3d2f2] border border-[#007bff94] text-[#5083bd]'>Select</span>
                                                </th>
                                                <th className="py-2 px-2 text-sm text-center"></th>
                                                <th className="py-2 px-2 text-sm text-start">Name</th>
                                                <th className="py-2 px-2 text-sm text-center">Martial Status</th>
                                                <th className="py-2 px-2 text-sm text-center">Center Code</th>
                                                <th className="py-2 px-2 text-sm text-center">Age</th>
                                                <th className="py-2 px-2 text-sm text-center">Gender</th>
                                                <th className="py-2 px-2 text-sm text-center">Category</th>
                                                <th className="py-2 px-2 text-sm text-center">Caste</th>
                                                <th className="py-2 px-2 text-sm text-center">Location</th>
                                                <th className="py-2 px-2 text-sm text-center">Blood Status</th>
                                                <th className="py-2 px-2 text-sm text-center">Result Status</th>
                                                <th className="py-2 px-2 text-sm text-center">Card Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Dynamically render rows from data */}
                                            {Editdata.map((row, index) => (
                                                <tr key={index} className="w-full text-center text-[15px]">
                                                    <td className="py-2 px-4 text-end">
                                                        <input type="checkbox" name="check" id={index} className='size-4' />
                                                    </td>
                                                    <td className="py-2 px-2 text-center flex">
                                                        <img src={Profile} alt="" className='bg-[#EEF3FF] w-7 p-2' />
                                                    </td>
                                                    <td className="py-2 text-center px-2">
                                                        <input type="text" value='John' className='border border-black py-1 px-2 w-[8vw]' />
                                                    </td>
                                                    <td className=" px-4 text-center">
                                                        <select className="marital-status border border-black py-1 px-1">
                                                            <option value="single">Single</option>
                                                            <option value="married">Married</option>
                                                            <option value="divorced">Divorced</option>
                                                            <option value="widowed">Widowed</option>
                                                        </select>
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <input value='Center Code' type="text" className='border border-black py-1 px-2 w-[8vw]' />
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <input type="number" value='26' className='border border-black py-1 px-2 w-[4vw]' />
                                                    </td>
                                                    <td className="py-2 px-2 text-center ">
                                                        <select className="gender border border-black py-1 px-1">
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <select className="Category border border-black py-1 px-1">
                                                            <option value="NT-B">NT-B</option>
                                                            <option value="">NT-B</option>
                                                            <option value="">NT-B</option>
                                                            <option value="">NT-B</option>
                                                        </select>
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <select className="Caste border border-black py-1 px-1">
                                                            <option value="NT-B">NT-B</option>
                                                            <option value="">NT-B</option>
                                                            <option value="">NT-B</option>
                                                            <option value="">NT-B</option>
                                                        </select>
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <input type="text" value='India' className='border border-black py-1 px-2 w-[8vw]' />
                                                    </td>
                                                    <td className={`py-2 px-2 text-center ${row.bloodStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`}>
                                                        <select className="bloodstatus border border-black py-1 px-1">
                                                            <option value="Submitted">Submitted</option>
                                                            <option value="Pending">Pending</option>
                                                            <option value="Hangout">Hangout</option>
                                                        </select>
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <input type="text" value='Pending' className={`border border-black py-1 px-2 w-[8vw]  ${row.bloodStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`} />
                                                    </td>
                                                    <td className="py-2 px-2 text-center">
                                                        <input type="text" value='Submitted' className={`border border-black py-1 px-2 w-[8vw]  ${row.bloodStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`} />
                                                    </td>
                                                    <td className="py-2 px-4 text-center"><img src={Delete} alt="" /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div >) : null
                }
            </div >
        </div >
    );
};

export default SickleCell;
