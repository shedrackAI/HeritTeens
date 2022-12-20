import Link from 'next/link';
import { useContext } from 'react';
import { FaArrowLeft }  from 'react-icons/fa'
import { AppContext } from '../contexts/AppContext';

import { AiOutlineSetting } from 'react-icons/ai'

function Header() {
  const { onBoarding, setOnBoarding, welcomeAnimation, currentPage } = useContext(AppContext);

  const backwardOnBoarding = () => {
    switch (onBoarding) {
      case 4:
        setOnBoarding(3)
        break;
      case 3:
        setOnBoarding(2)
        break;
      case 2:
        setOnBoarding(1)
        break;
      default:
        break;
    }
  }

  return (
    <div className='flex justify-center border-b-2'>
      <nav className='flex justify-between items-center px-5 flex-1 max-w-4xl h-12'>
        {welcomeAnimation &&  (
          <FaArrowLeft aria-hidden='true' onClick={backwardOnBoarding}/> 
        )}
            
        {currentPage === "dashboard" ? (
          <div className='w-full h-full flex justify-center items-center'>
            <h3 className='font-medium text-lg'>home</h3>
          </div>
        ):''}
        {currentPage === "profile" ? (
          <div className='w-full h-full flex justify-center items-center relative'>
            <h3 className='font-medium text-lg'>profile</h3>
            <AiOutlineSetting aria-hidden='true' size={25} className='absolute right-0 cursor-pointer'/>
          </div>
        ):''}
        {currentPage === "quiz" ? (
          <div className='w-full h-full flex justify-center items-center'>
            <FaArrowLeft aria-hidden='true' className='absolute left-0 cursor-pointer ml-5'/> 
            <h3 className='font-medium text-lg'>quiz</h3>
          </div>
        ):''}
        {currentPage === "friends" ? (
          <div className='w-full h-full flex justify-center items-center'>
            <FaArrowLeft aria-hidden='true'  className='absolute left-0 cursor-pointer ml-5'/> 
            <h3 className='font-medium text-lg'>friends</h3>
          </div>
        ):''}
      </nav>
    </div>
  )
}

export default Header