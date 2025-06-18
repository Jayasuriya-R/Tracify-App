import React from 'react'

const IssueDetails = ({desc,status,color}) => {
  return (
    <div className='px-4'>
      <div className=' border-b-4 border-gray-300  p-4' >
        <p className='text-gray-500 py-2'>{desc}</p>
        <button className={`p-2 border-gray-400 rounded-lg font-medium `} >{status}</button>
      </div>
    </div>
    // style={{backgroundColor:color.bg,color:color.text}}
  )
}

export default IssueDetails
