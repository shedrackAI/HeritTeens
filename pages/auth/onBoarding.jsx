import React, { useContext } from 'react'
import Link from 'next/link'

import { AppContext } from '../../contexts/AppContext'
import { Department, Gender, Member, Name } from '../../components/OnBoardingPages'

function OnBoarding() {
    const { setOnBoardingStageForwar, onBoarding, setOnBoarding } = useContext(AppContext);

  return (
    <div className='h-full flex items-center justify-center font-poppins flex-col relative'>
            {onBoarding === 1 && (
                <Gender />
            )}
            {onBoarding === 2 && (
                <Name />
            )}
            {onBoarding === 3 && (
                <Member />
            )}
            {onBoarding === 4 && (
                <Department />
            )}

      {/* Onboarding */}
      <div className='flex gap-3 mt-16'>
        <span className={onBoarding === 1 ? 'w-2 h-2 bg-green-700 rounded-full' : 'w-2 h-2 bg-green-100 rounded-full'}></span>
        <span className={onBoarding === 2 ? 'w-2 h-2 bg-green-700 rounded-full' : 'w-2 h-2 bg-green-100 rounded-full'}></span>
        <span className={onBoarding === 3 ? 'w-2 h-2 bg-green-700 rounded-full' : 'w-2 h-2 bg-green-100 rounded-full'}></span>
        <span className={onBoarding === 4 ? 'w-2 h-2 bg-green-700 rounded-full' : 'w-2 h-2 bg-green-100 rounded-full'}></span>
      </div>

      <h3 className='absolute bottom-4 font-medium text-gray-500 text-sm'>Created by shedsoncode</h3>
    </div>
  )
}

export default OnBoarding