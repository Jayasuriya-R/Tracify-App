import React, { useState } from 'react'
import IssueDetails from './IssueDetails'
import {issuesData} from '../utils/constants'

const MainContainer = () => {
  const [option, setOption] = useState("")
    const handleChange =(e)=>{setOption(e.target.value)}
  return (
    <div>
      <div className='flex p-6'>
        <h1>Filter by status</h1>
        <div>
       <select className=' mx-4 h-10 border border-gray-400 rounded-lg p-1' onChange={handleChange}>
        <option>All</option>
        <option>Open</option>
        <option>In-Progress</option>
        <option>Resolved</option>
       </select>
       </div>
      </div>
      {
        option == 'All' ? (issuesData.map((x) => <IssueDetails key={x.id} desc={x.description} status={x.status} color={x.color}/>)):(issuesData.filter((x)=> x.status === option ).map((x) => <IssueDetails key={x.id} desc={x.description} status={x.status} color={x.color}/>))
        // console.log(issuesData.filter((x)=>x))
      }
    </div>
  )
}

export default MainContainer
