import React from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react';
import MyDatePicker from './datePicker.jsx'
import Chart from './Chart.jsx'
import DownArrow from '../../../assets/DownArrow.svg'
import LeftArrow from '../../../assets/LeftArrow.svg'
import UpArrow from '../../../assets/UpArrow.svg'
import Filter from '../../../assets/Filter.svg'
import EditData from '../../../assets/EditData.svg'
import profile from '../../../assets/profile.png'
import Download from '../../../assets/Download.svg'
import Delete from '../../../assets/Delete.svg'
import filterPointer from '../../../assets/filterPointer.png'
import cervicalIcon from '../../../assets/cervicalIcon.png'
import vector from '../../../assets/vector.png'
import { useContext } from "react";
import { BreastCancerContext } from '../breastCancer/BreastCancerContext.jsx';

const Dashboard = () => {
  // States to control visibility of charts
  const [showChart, setshowChart] = useState(false)
  const [showCenter, setshowCenter] = useState(false)
  const [FilterOptions, setFilterOptions] = useState(false)
  const [FilterOptionsEdit, setFilterOptionsEdit] = useState(false)
  const [EditTable, setEditTable] = useState(false)
  const divRef = useRef(null);
  const contextData=useContext(BreastCancerContext)

  // Sample data for the screening table
  const data = [
    { name: 'John Doe', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Submitted', HPLC: 'Pending', cardStatus: 'Pending' },
    { name: 'John Doe1', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Pending', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
    { name: 'John Doe2', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
    // Add more data here...
  ];

  const Editdata = [
    { name: 'John Doe', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Submitted', cardStatus: 'Pending' },
    { name: 'John Doe1', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Pending', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
    { name: 'John Doe2', img: " ", date: '2025-01-24', centerCode: 'center code', bloodStatus: 'Submitted', resultStatus: 'Pending', HPLC: 'Pending', cardStatus: 'Pending' },
    // Add more data here...
  ];

  // Sample data for the center chart
  const centerChart = [
    { srNo: '1', name: 'Center1', date: '2025-01-24', count: '10' },
    { srNo: '2', name: 'Center2', date: '2025-01-24', count: '10' },
    { srNo: '3', name: 'Center3', date: '2025-01-24', count: '10' },
    // Add more center data here...
  ]

  // Toggle visibility for the chart in the left side
  const handleChartDown = () => {
    setshowChart(!showChart)
  }

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


  // Toggle visibility for the center chart
  const handleCenter = () => {
    setshowCenter(!showCenter)
  }

  const handleEditTable = () => {
    setEditTable(true)
  }

  return (
    <div className="container mx-auto">
      <div className="Upper flex gap-3">
        <div className="Left w-[48.5vw] flex flex-col">
          {/* Left Upper Section displaying total count */}
          <div onClick={()=>{contextData.setCervicalCancerData(!contextData.CervicalCancerData)}} className="Leftupper cursor-pointer bg-[#FFFFFF] w-[14vw] min-h-[25vh] mx-2 my-1 shadow-md rounded-md px-6 flex flex-col justify-center gap-2">
            <div className="img p-2 bg-[#F6F6F6] w-fit">
              <div className="rounded-full w-fit">
                <img src={cervicalIcon} alt="" className="size-12" /> {/* Image placeholder */}
              </div>
            </div>
            <h3 className='text-[13px] font-semibold'>Total Female</h3>
            <h1 className="text-3xl font-semibold">8,001</h1> {/* Displaying total count */}
          </div>

          {/* Left Lower Section - Chart Toggle */}
          <div className="Leftlower bg-[#FFFFFF] w-[49vw] min-h-[5vh] mx-2 my-1 shadow-md rounded-md flex justify-between items-center p-2">
            <h1>Candidate Visit</h1>
            {/* Button to toggle chart visibility */}
            <div onClick={handleChartDown} className="flex justify-between items-center gap-1 text-[13px] cursor-pointer">
              <button>{showChart ? "Less Graph" : 'View Graph'}</button>
              <img src={showChart ? UpArrow : DownArrow} alt=">" />
            </div>
          </div>

          {/* Display Chart if visible */}
          {showChart ? (
            <div className="upperchart min-h-[40vh] w-[49vw] mx-2 bg-[#FFFFFF] shadow-md rounded-md">
              {/* Chart */}
              <Chart />
            </div>
          ) : null}
        </div>

        {/* Right Section showing Center Data */}
        <div className="rightContainer relative w-[31vw]">
          <div className={`Right min-w-[96%] ${showCenter ? "min-h-[120vh] overflow-hidden" : "min-h-[30.8vh] overflow-hidden"}  bg-[#FFFFFF] shadow-md rounded-md z-20 m-2 absolute`}>
            <div className="w-[88%] mx-auto">
              {/* Header for center count with toggle button */}
              <div className="headings flex py-2 justify-between items-center p-2 border-b-2">
                <h1 className='font-semibold'>Center Count</h1>
                <div onClick={handleCenter} className="flex justify-between items-center gap-1 text-[13px] cursor-pointer">
                  <button>{showCenter ? "Hide Chart" : 'View chart'}</button>
                  <img src={showCenter ? UpArrow : DownArrow} alt=">" />
                </div>
              </div>
            </div>

            {/* Table for displaying center data */}
            <div className="centerData">
              <table>
                <thead>
                  <tr className="text-[14px]">
                    <th className="py-2 px-9  text-[#666666]">Sr. No.</th>
                    <th className="py-2 px-9  text-[#666666]">Name</th>
                    <th className="py-2 px-9  text-[#666666]">Date</th>
                    <th className="py-2 px-9  text-[#666666]">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render center data dynamically */}
                  {centerChart.map((row, index) => {
                    return (
                      <tr key={index} className="text-center text-[13px]">
                        <td className="py-2 px-4 font-semibold">{row.srNo}</td>
                        <td className="py-2 px-4 font-semibold">{row.name}</td>
                        <td className="py-2 px-4 font-semibold">{row.date}</td>
                        <td className="py-2 px-4 font-semibold">{row.count}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section for Screening Data */}
      <div className="Lower">
        <div className="chart h-[90vh] max-w-[79vw] mx-2 my-1 bg-[#FFFFFF] shadow-md rounded-md relative">
          <div className="heading px-6 py-4 flex gap-6 items-center">
            <h1 className='font-semibold text-xl'>Screening Data</h1>
            {/* Filter and Edit Data Buttons */}
            <div className="btns flex gap-4 text-[12px] items-center">
              <button onClick={() => { setFilterOptions(!FilterOptions) }} className='Filterdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                <span className="font-semibold">Filter Data</span>
                <img src={Filter} alt="." className='size-3' />
              </button>
              <button onClick={handleEditTable} className='Editdata text-[#004fea] bg-[#e7efff] flex gap-4 border border-[#c8d4f5] shadow-sm items-center px-4 py-1 rounded-md'>
                <span className="font-semibold">Edit Data</span>
                <img src={EditData} alt="." className='size-3' />
              </button>
            </div>
          </div>
          {FilterOptions ? (<div className="absolute min-w-[45vw] min-h-[70vh] top-[7vh] left-[17%] border-2 border-black rounded-lg bg-[#dfeeff]">
            <img src={filterPointer} alt="" className="relative top-[-1.8vh] left-[1.8vw] size-3" />
            <div className="heading flex justify-between items-center px-11 py-6">
              <h1 className='font-bold text-xl'>Filters</h1>
              <div className="btns flex gap-4">
                <button onClick={() => { setFilterOptions(false) }} className="cancelBtn font-semibold text-xs">Cancel</button>
                <button className="cancelBtn text-[#0057FF] font-semibold text-xs">Save view</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="EnterName flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>Enter Employee Name</span></h2>
                  <label htmlFor="enterName">
                    <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                      <img src={vector} alt="" className="absolute z-10 top-[2.5vh] right-[6vw] size-4" />
                      <input id='enterName' type="text" placeholder='Enter Your Name' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                    </div>
                  </label>
                </div>
                <div className="selectDate from flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>Select Date</span></h2>
                  <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                    <div className="flex gap-1 items-center ju">
                      <span className='text-xs pl-2'>From</span><MyDatePicker />
                      <span className='text-xs pl-2'>To</span> <MyDatePicker />
                    </div>
                  </div>
                </div>
                <div className="name flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>Enter Centre Code</span></h2>
                  <label htmlFor="enterName">
                    <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                      <input id='enterName' type="text" placeholder='Enter Centre Code' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                    </div>
                  </label>
                </div>
                <div className="BloodStatus from flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>Blood Status</span></h2>
                  <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="resultStatus from flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>Result Status</span></h2>
                  <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                  </div>
                </div>
                <div className="HPLCStatus from flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
                    <span>HPLC Status</span></h2>
                  <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                    <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                  </div>
                </div>
                <div className="CardStatus from flex flex-col gap-2">
                  <h2 className='px-12 text-md font-semibold flex gap-3 '>
                    <img src={DownArrow} alt="" className="" />
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
          {/* Table displaying screening data */}
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
                </tr>
              </thead>
              <tbody>
                {/* Dynamically render rows from data */}
                {data.map((row, index) => (
                  <tr key={index} className={`w-full text-center text-[15px]`}>
                    <td className="flex justify-end"><img src={profile} alt="" className='bg-[#EEF3FF] w-7 p-2 my-1' /></td>
                    <td className="py-2 pr-2 text-center"> {row.name}</td>
                    <td className="py-2 px-4  text-center">{row.date}</td>
                    <td className="py-2 px-4  text-center">{row.centerCode}</td>
                    <td className={`py-2 px-2 text-center ${row.bloodStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`}>{row.bloodStatus}</td>
                    <td className={`py-2 px-2 text-center ${row.resultStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`}>{row.resultStatus}</td>
                    <td className={`py-2 px-2 text-center ${row.HPLC === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`}>{row.HPLC}</td>
                    <td className={`py-2 px-2 text-center ${row.cardStatus === 'Pending' ? 'text-[#ff1010]' : 'text-[#007aff]'}`}>{row.cardStatus}</td>
                    <td className="py-2 px-4  text-center flex gap-4 justify-center">
                      <img src={Download} alt="" />
                      <img src={EditData} alt="" />
                      <img src={Delete} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {EditTable ? (
          <div className="allEditDatas absolute min-h-[100vh] min-w-[100vw] bg-[#FFFFFF] top-0 left-0 z-50 px-4 py-4">
            <div className="AllData flex flex-col gap-8 items-center">
              <div className="heading flex justify-between min-w-[94vw]">
                <h1 className=" text-2xl font-semibold flex gap-2 items-center">
                  <img src={LeftArrow} alt="" className="size-8" />
                  <span>Cervical Cancer</span>
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
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
                            <span>Enter Employee Name</span></h2>
                          <label htmlFor="enterName">
                            <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                              <img src={vector} alt="" className="absolute z-10 top-[2.5vh] right-[6vw] size-4" />
                              <input id='enterName' type="text" placeholder='Enter Your Name' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                            </div>
                          </label>
                        </div>
                        {/* Date filter */}
                        <div className="selectDate from flex flex-col gap-2">
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
                            <span>Select Date</span></h2>
                          <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                            <div className="flex gap-1 items-center ju">
                              <span className='text-xs pl-2'>From</span> <MyDatePicker />
                              <span className='text-xs pl-2'>To</span><MyDatePicker />
                            </div>
                          </div>
                        </div>
                        {/* Center filter */}
                        <div className="name flex flex-col gap-2">
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
                            <span>Enter Center Code</span></h2>
                          <label htmlFor="enterName">
                            <div className="bg-[#FFFFFF] mx-4 px-12 py-2 rounded-sm relative">
                              <input id='enterName' type="text" placeholder='Enter Center Code' className=' pr-8 pl-2 py-1 rounded-md border placeholder:text-[#BCBCBC]' />
                            </div>
                          </label>
                        </div>
                        {/* Blood Status filter */}
                        <div className="BloodStatus from flex flex-col gap-2">
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
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
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
                            <span>Result Status</span></h2>
                          <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                          </div>
                        </div>
                        {/* HPLC Status filter */}
                        <div className="HPLCStatus from flex flex-col gap-2">
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
                            <span>HPLC Status</span></h2>
                          <div className="bloodSubmit bg-[#FFFFFF] mx-4 px-16 py-2 rounded-sm relative flex  flex-col gap-2 text-sm">
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>All</button>
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Submitted</button>
                            <button className='hover:bg-[#007bff94] rounded-md border text-start px-2 border-black w-[6vw]'>Pending</button>
                          </div>
                        </div>
                        {/* Card Status filter */}
                        <div className="CardStatus from flex flex-col gap-2">
                          <h2 className='px-12 text-md font-semibold flex gap-3 '>
                            <img src={DownArrow} alt="" className="" />
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
                            <img src={profile} alt="" className='bg-[#EEF3FF] w-7 p-2' />
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
          </div>) : null}
      </div>
    </div>

  )
}

export default Dashboard
