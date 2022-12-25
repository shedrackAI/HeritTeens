import React, { useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/AppContext';

import PostCard from '../components/smallComponents/PostCard';
import post1 from '../public/images/post1.jpg';
import post2 from '../public/images/post2.jpg';
import { RiChatSmile3Line } from 'react-icons/ri';

export function WelcomeAnimation({ style }) {
  return (
    <div className={style}>
      <div className='welcome_animation'></div>
      <h1 className='font-poppins text-xl font-bold text-green-600'>Well Done!!</h1>
    </div>
  )
}

function Dashboard() {
  const { welcomeAnimation, setWelcomeAnimation, setIsLoading, setHeader } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeAnimation(false);
      setHeader(true)
    }, 5000);
  }, []);

  return (
    
    <div className='flex flex-col items-center w-full h-full relative  overflow-y-scroll overflow-x-hidden'>
     
     {/* <div className='flex justify-center max-w-[550px] w-full'> */}
      <nav className='flex justify-between items-center px-5 flex-1 max-w-[550px] w-full h-12 fixed bg-white z-40'>
          <div className='w-full h-full flex justify-between items-center'>
            <h3 className='font-bold  text-lg'>Heritteens</h3>
            <RiChatSmile3Line  size={25}/>
          </div>
      </nav>
    {/* </div> */}

      <WelcomeAnimation style={welcomeAnimation ? 'w-full h-full flex justify-center items-center relative' : "hidden"} />
      {!welcomeAnimation && (
        <div className='flex-1 flex flex-col items-center py-3 w-full h-auto mt-10'> 
          <PostCard image={post1}/>
          <PostCard image={post2}/>
        </div>
      )}
      
    </div>
  )
}

export default Dashboard