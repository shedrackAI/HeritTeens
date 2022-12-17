import Link from 'next/link'
import React from 'react'
import { IoMdBook } from 'react-icons/io'
import { HiOutlineHome, HiOutlineBookOpen, HiOutlineUser } from 'react-icons/hi2'

function Navbar() {
  return (
    <div className='flex p-3 border-t-2 justify-center absolute bottom-0 w-full bg-white'>
        <div className='flex justify-between flex-1 max-w-2xl'>
            <Link aria-hidden href={"/dashboard"}> <HiOutlineHome size={25}/> </Link>
            <Link aria-hidden href={"#"}> <HiOutlineBookOpen size={25}/> </Link>
            <Link href={"/account"}> <HiOutlineUser size={25}/> </Link>
        </div>
    </div>
  )
}

export default Navbar