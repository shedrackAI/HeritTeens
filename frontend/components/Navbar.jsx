import Link from 'next/link'
import React, { useContext } from 'react'
import { IoGameController, IoGameControllerOutline } from 'react-icons/io5'
import { HiOutlineHome, HiUser, HiOutlineUser } from 'react-icons/hi2'
import { AppContext } from '../contexts/AppContext';

function Navbar() {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div className='flex p-3 justify-center w-full bg-white'>
        <div className='flex justify-between flex-1 max-w-[550px]'>
            <Link href={"/dashboard"} onClick={() => setCurrentPage('dashboard')}> <HiOutlineHome aria-hidden='true' size={25}/> </Link>
            <Link href={"/quiz"} onClick={() => setCurrentPage('quiz')}> <IoGameControllerOutline aria-hidden='true'size={25}/> </Link>
            <Link href={"/account"} onClick={() => setCurrentPage('profile')}> <HiOutlineUser aria-hidden='true' size={25}/> </Link>
        </div>
    </div>
  )
}

export default Navbar