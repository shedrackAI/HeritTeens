import Link from 'next/link'
import React, { useContext } from 'react'
import { IoMdBook } from 'react-icons/io'
import { HiOutlineHome, HiOutlineBookOpen, HiOutlineUser } from 'react-icons/hi2'
import { AppContext } from '../contexts/AppContext';

function Navbar() {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div className='flex p-3 justify-center w-full bg-white'>
        <div className='flex justify-between flex-1 max-w-2xl'>
            <Link aria-hidden href={"/dashboard"} onClick={() => setCurrentPage('dashboard')}> <HiOutlineHome size={25}/> </Link>
            <Link aria-hidden href={"/quiz"} onClick={() => setCurrentPage('quiz')}> <HiOutlineBookOpen size={25}/> </Link>
            <Link aria-hidden href={"/account"} onClick={() => setCurrentPage('profile')}> <HiOutlineUser size={25}/> </Link>
        </div>
    </div>
  )
}

export default Navbar