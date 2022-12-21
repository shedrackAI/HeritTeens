import Link from 'next/link';
import { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';

//Icons
import { FaArrowLeft }  from 'react-icons/fa'
import { BsChatFill, BsChatLeftQuote }  from 'react-icons/bs'
import { RiSettings2Line, RiChatSmile3Line } from 'react-icons/ri'

function Header() {
  const { 
    onBoarding, 
    setOnBoarding, 
    welcomeAnimation, 
    currentPage, 
    setCurrentPage,
    setBottomPopup
  } = useContext(AppContext);

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
    <div className='flex justify-center max-w-[550px] w-full'>
      <nav className='flex justify-between items-center px-5 flex-1 max-w-4xl h-12'>
        {welcomeAnimation &&  (
          <FaArrowLeft aria-hidden='true' onClick={backwardOnBoarding}/> 
        )}
            
        {currentPage === "dashboard" ? (
          <div className='w-full h-full flex justify-between items-center'>
            <h3 className='font-bold  text-lg'>Heritteens</h3>
            <RiChatSmile3Line  size={25}/>
          </div>
        ):''}
        {currentPage === "profile" ? (
          <div className='w-full h-full flex justify-center items-center relative'>
            <h3 className='font-medium text-lg'>profile</h3>
            <RiSettings2Line onClick={() => setBottomPopup('settings')} aria-hidden='true' size={25} className='absolute right-0 cursor-pointer'/>
          </div>
        ):''}
        {currentPage === "games" ? (
          <div className='w-full h-full flex justify-center items-center'>
            <FaArrowLeft aria-hidden='true' className='absolute left-0 cursor-pointer ml-5'/> 
            <h3 className='font-medium text-lg'>Games</h3>
          </div>
        ):''}
        {currentPage === "friends" ? (
          <div className='w-full h-full flex justify-center items-center'>
            <Link href={'/account'} className='absolute left-0 cursor-pointer ml-5'>
              <FaArrowLeft aria-hidden='true' onClick={() => setCurrentPage('profile')}/> 
            </Link>
            <h3 className='font-medium text-lg'>friends</h3>
          </div>
        ):''}
      </nav>
    </div>
  )
}

export default Header