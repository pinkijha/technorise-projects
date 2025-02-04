import React from 'react'
import Cards from './Cards'
import CandidateVisit from './CandidateVisit'
import CenterCount from './CenterCount'
import { DashboardProvider } from '../../../context/dashboardContext'
import ScreeningData from './ScreeningData'

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className='relative flex md:mx-5 md:my-2'>
        <div>
          <Cards />
          <CandidateVisit />
        </div>
        <div>
          <CenterCount />
        </div>
      </div>
      <div>
        <ScreeningData />
      </div>
    </DashboardProvider>
  )
}

export default Dashboard
