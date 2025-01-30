import React from 'react'
import { useDashboardContext } from '../../../context/dashboardContext';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CandidateVisitGraph from './CandidateVisitGraph';

const CandidateVisit = () => {  
    const { activeIndex, setActiveIndex } = useDashboardContext();

     // Toggle accordion open/close state
  const toggleAccordion = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === "Candidate Visit" ? null : "Candidate Visit"
    );
  };
  
  // Check if this accordion is active
  const isActive = activeIndex === "Candidate Visit";

  return (
    <>
    <div
    className="md:w-[780px] md:h-auto md:mx-1 md:p-1 md:mt-1 
    rounded-lg border border-gray-300 bg-white shadow-md"
  >
    <div className="flex items-center justify-between md:mx-4 md:my-1">
      <p className="font-semibold text-lg text-gray-600">Candidate Visit</p>
      <button
        className="flex items-center text-blueDark"
        onClick={toggleAccordion}
      >
        {isActive ? (
          <>
            <p className='text-sm'>Less Graph</p> <IoIosArrowUp />
          </>
        ) : (
          <>
          <p className='text-sm'> View Graph</p> <IoIosArrowDown />
          </>
        )}
      </button>
    </div>        
  </div>
  {
      isActive && <CandidateVisitGraph/>
    }
  </>
  )
}

export default CandidateVisit
