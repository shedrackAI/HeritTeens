import React, { useState } from 'react'

//Icons
import { BiGridAlt, BiNotification, BiAddToQueue } from 'react-icons/bi'
import { BsGrid  } from 'react-icons/bs'

function ProfileNavigator({ children }) {
    const [ profileNav, setProfileNav ] = useState('s');

    const profileNavBtn= {
        active: 'flex flex-1 justify-center items-center border-b-4 border-gray-500',
        unActive: 'flex flex-1 justify-center items-center'
    };

  return (
    <div className='flex flex-1 flex-col max-w-xl w-full mt-8'>
        <nav className='flex max-w-xl h-12'>
            <div onClick={() => setProfileNav('feed')} className={profileNav === 'feed' ? profileNavBtn.active : profileNavBtn.unActive}><BsGrid size={25}/></div>
            <div onClick={() => setProfileNav('event')} className={profileNav === 'event' ? profileNavBtn.active : profileNavBtn.unActive}><BiNotification size={25}/></div>
            <div onClick={() => setProfileNav('question')} className={profileNav === 'question' ? profileNavBtn.active : profileNavBtn.unActive}><BiAddToQueue size={25}/></div>
        </nav>
        
        { children }
    </div>
  )
}

export default ProfileNavigator