import React from 'react'

function LevelCard() {
  return (
    <div className='text-center font-poppins shadow-md rounded-lg overflow-hidden'>
        <h1 className='font-bold text-white py-1 text-[14px] bg-green-900'>level 1</h1>
        <div className='w-28 h-20 bg-white flex flex-col justify-center items-center'>
            <h1 className='font-medium text-gray-500'>29</h1>
            <h1 className='font-medium text-gray-300 text-sm'>Questions</h1>
        </div>
    </div>
  )
}

export default LevelCard