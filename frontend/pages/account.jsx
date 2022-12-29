import React, { useContext } from 'react'
import Image from 'next/image'

import profileImage from '../public/images/profile.jpg'

//Icons
import { BiGridAlt, BiNotification, BiAddToQueue } from 'react-icons/bi'
import { BsGrid  } from 'react-icons/bs'

//Components Imports
import Friends_Meet_Quiz from '../components/smallComponents/Friends_Meet_Quiz'
import ProfileNavigator from '../components/smallComponents/ProfileNavigator'
import ProfilePostFeed from '../components/smallComponents/ProfilePostFeed'
import UserDetails from '../components/smallComponents/UserDetails'
import ProfilePicture from '../components/smallComponents/ProfilePicture'
import { AppContext } from '../contexts/AppContext'
import Friends from './friends'
import { RiSettings2Line } from 'react-icons/ri'

function Account() {
  const { user, currentPage, setBottomPopup } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center h-full w-full font-poppins px-3 overflow-y-scroll'>

       <nav className='flex justify-between items-center px-5 flex-1 max-w-[550px] w-full h-12 fixed bg-white z-40 border-2'>
          <div className='w-full h-full flex justify-between items-center'>
            <h3 className='font-bold text-lg'>Heritteens</h3>
            <RiSettings2Line onClick={() => setBottomPopup({show: true, page: "settings"})} aria-hidden='true' size={25} className='cursor-pointer'/>
          </div>
      </nav>

        <div className='mt-16'>
          {/* First Div for profile picture and details */}
          <div className='w-full flex flex-col'>
              <div className='text-center flex flex-col items-center'>
                  <div className='w-[100px] h-[100px] rounded-full bg-slate-900'>
                    <ProfilePicture round={'rounded-full'}/>
                  </div>
                  <h1 className='font-bold'>{user.userFullname}</h1>
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
    </div>     
  )
}
 
export default Account