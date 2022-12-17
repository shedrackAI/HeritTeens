import React from 'react'

//Icons
import { BiGridAlt, BiNotification, BiAddToQueue } from 'react-icons/bi'
import { BsGrid  } from 'react-icons/bs'

//Components Imports
import Friends_Meet_Quiz from '../components/smallComponents/Friends_Meet_Quiz'
import ProfileNavigator from '../components/smallComponents/ProfileNavigator'
import ProfilePostFeed from '../components/smallComponents/ProfilePostFeed'
import UserDetails from '../components/smallComponents/UserDetails'

function Account() {
  return (
    <div className='flex flex-col items-center h-full w-full font-poppins '>

        {/* First Div for profile picture and details */}
        <div className='w-full flex flex-col'>
            <div className='text-center flex flex-col items-center'>
                <div className='w-[100px] h-[100px] rounded-full bg-slate-900'></div>
                <h1 className='font-medium'>Shedrack Aigbe</h1>
            </div>

            {/* Friends_Meet_Quiz container  */}
            <Friends_Meet_Quiz />

            {/* Details container */}
            <UserDetails />
        </div>

        {/* Second Div */}
        <ProfileNavigator>
            <ProfilePostFeed />
        </ProfileNavigator>
    </div>
  )
}

export default Account