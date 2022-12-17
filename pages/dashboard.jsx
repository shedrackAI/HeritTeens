import React, { useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/AppContext';

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
    }, 7000);
  }, []);

  return (
    <div className='flex justify-center items-center h-full w-full relative'>
      <WelcomeAnimation style={welcomeAnimation ? 'w-full h-full flex justify-center items-center relative' : "hidden"} />
    </div>
  )
}

export default Dashboard