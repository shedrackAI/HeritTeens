import React from 'react'

function Account() {
  return (
    <div className='flex flex-col items-center h-full w-full'>

        {/* First Div for profile picture and details */}
      <div className='w-full flex flex-col'>
        <div className='text-center flex flex-col items-center'>
            <div className='w-[100px] h-[100px] rounded-full bg-slate-900'></div>
            <h1 className='font-medium'>Shedrack Aigbe</h1>
        </div>

        <div className='w-full flex justify-center'>
            <div className='flex justify-center gap-10 mt-3 flex-1 max-w-xl'>
                <div className='text-center flex-1'>
                    <h1 className='font-bold'>Friends</h1>
                    <p className='font-medium text-gray-600'>12k</p>
                </div>
                <div className='text-center flex-1'>
                    <h1 className='font-bold'>Meet</h1>
                    <p className='font-medium text-gray-600'>10k</p>
                </div>
                <div className='text-center flex-1'>
                    <h1 className='font-bold'>Quiz</h1>
                    <p className='font-medium text-gray-600'>19</p>
                </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Account