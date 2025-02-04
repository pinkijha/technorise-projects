import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import DatePick from "./datePicker.jsx"
import { useContext } from "react";
import { BreastCancerContext } from "./BreastCancerContext.jsx";


const BreastCancerHeader = ({ isCollapsed, setIsCollapsed }) => {
 const contextData=useContext(BreastCancerContext)
  return (
   
    <div className="bg-white min-h-[12vh] py-2 px-8 flex justify-around items-center">
        <div className="rightSide text-start w-[38%]">
            <h1 onClick={()=>{contextData.setBreastCancerData(false)}} className="Heading cursor-pointer text-2xl font-semibold px-2">Breast Cancer</h1>
        </div>
        <div className="leftSide w-[100%] flex justify-end items-start relative top-[2vh] flex-col gap-1">
            <h4 className="text-sm font-semibold">Generate Dashboard</h4>
            <div className="flex gap-4">
                <span className="text-xs font-semibold flex gap-2 items-end">To<DatePick/></span>
                <span className="text-xs font-semibold flex gap-2 items-end">From<DatePick/></span>
                <button className="text-xs mx-4 px-2 py-1 font-bold text-[#58677a] bg-[#b8d9ff] rounded-md">Export Into PDF</button>
            </div>
        </div>
    </div>
  );
};

export default BreastCancerHeader;
