import React from 'react'
import LevelCard from '../components/smallComponents/LevelCard'

function Quiz() {
  return (
    <div className='flex-1 flex-col items-center max-w-2x font-poppins overflow-y-scroll'>
        <div className='flex flex-wrap justify-evenly items-start space-x-4 space-y-4 overflow-y-scroll py-3'>
            <LevelCard />
            <LevelCard />
            <LevelCard />
            <LevelCard />
        </div>
    </div>
  )
}

export default Quiz