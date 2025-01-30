import React from 'react'
import GraphComponent from './SmoothLineChart'
import SmoothLineChart from './SmoothLineChart'

const CandidateVisitGraph = () => {
  return (
    <div className='md:mt-0 md:w-[780px] md:h-auto md:mx-1 md:p-1 md:mb-1 
    rounded-lg border border-gray-300 bg-white shadow-md '>
        {/* Heading */}
      <div className='flex justify-between  md:mx-4 md:my-1'>
        <h1 className='font-semibold text-sm text-gray-700'>Candidate Visit</h1>
        <div className='flex space-x-6 items-center'>
        <label className='text-sm font-semibold text-gray-500'>Sort by</label>
        <select className='text-voilet font-bold outline-none md:p-1 border border-gray-200 rounded-lg'>
            <option>Daily</option>
            <option>Monthly</option>
            <option>Weekly</option>
        </select>
        </div>
      </div>

      {/* Display Graph */}
      <div>
        <SmoothLineChart/>
      </div>
    </div>
  )
}

export default CandidateVisitGraph
