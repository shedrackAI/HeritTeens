import React, { useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/AppContext';

import PostCard from '../components/smallComponents/PostCard';
import post1 from '../public/images/post1.jpg';
import post2 from '../public/images/post2.jpg';

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
      <WelcomeAnimation style={welcomeAnimation ? 'w-full h-full flex justify-center items-center relative' : "hidden"} />
      {!welcomeAnimation && (
        <div className='flex-1 flex flex-col items-center py-3 w-full h-auto'> 
          <PostCard image={post1}/>
          <PostCard image={post2}/>
        </div>
      )}
      
    </div>
  )
}

export default Dashboard