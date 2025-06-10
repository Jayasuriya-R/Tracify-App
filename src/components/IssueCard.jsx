import React from 'react'

const IssueCard = ({status,count,color}) => {
  return (
    <div>
      <div className='w-48 h-32  shadow rounded-lg p-4 mr-3'>
          <h1 className='font-sans font-medium my-3 text-lg text-gray-600'>{status}</h1> 
          <h2 className={`font-bold text-3xl text-[${color}]`}>{count}</h2>
      </div>
    </div>
  )
}

export default IssueCard
