import React from 'react'
import CardContainer from './CardContainer'
import LatestIssue from './LatestIssue'

const Body = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-12 px-8  mt-[3%]'>
       <div className='col-span-7 z-20'>
        <CardContainer/>
        {/* <BarChartData/> */}
       </div>
       <div className='col-span-5 z-20'>
        <LatestIssue/>
       </div>
      </div>
    </div>
  )
}

export default Body
