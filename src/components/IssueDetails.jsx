import React from 'react'

const IssueDetails = ({desc,status,color}) => {
  return (
    <div className='px-4'>
      <div className=' border-b-4 border-gray-300  p-4' >
        <p className='text-gray-500 py-2'>{desc}</p>
        <button className={`p-2 border-gray-400 rounded-lg font-medium bg-${color}-50 text-${color}-500`}>{status}</button>
      </div>
    </div>
  )
}

export default IssueDetails
