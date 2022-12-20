import React, { useContext } from 'react'

import { HiHome, HiBookOpen, HiUser } from 'react-icons/hi2'
import { AppContext } from '../../contexts/AppContext';

function UserDetails() {
    const { user } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center mt-2 flex-1'>
        <div className='flex flex-wrap flex-1 bg-gray-50 drop-shadow max-w-xl rounded-xl'>
            <div className='flex flex-col gap-2 p-3'>
                <h2 className='font-normal text-gray-500 flex gap-2'>
                    <HiUser aria-hidden='true' size={19}/>
                    <span className='font-medium text-gray-700 text-sm'> Drama</span>
                </h2>
                <h2 className='font-normal text-gray-500 flex gap-2'>
                    <HiHome aria-hidden='true' size={19}/>
                    <span className='font-medium text-gray-700 text-sm'> {user.userGender}</span>
                </h2>
                <h2 className='font-normal text-gray-500 flex gap-2'>
                    <HiBookOpen aria-hidden='true' size={19}/>
                    <span className='font-medium text-gray-700 text-sm'> HillTop</span>
                </h2>
                <h2 className='font-normal text-gray-500 flex gap-2'>
                    <HiBookOpen aria-hidden='true' size={19}/>
                    <span className='font-medium text-gray-700 text-sm'>{user.userIsMember}</span>
                </h2>
            </div>
            {/* Level container */}
            <div className='flex max-w-xl flex-col items-center border-x-4 border-white p-3'>
                <h1 className='font-medium text-gray-700 text-sm'>Level</h1>
                <p className='text-[12px]'>10</p>
            </div>
            {/* Bio details container */}
            <div className='flex-1 flex max-w-xl flex-col items-center p-3'>
                <p className='text-[12px]'>Hi my name is shedrack from hilltop branch</p>
            </div>
        </div>
    </div>
  )
}

export default UserDetails