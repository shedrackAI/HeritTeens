import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import LevelCard from '../components/smallComponents/LevelCard'

function Games() {
  return (
    <div className='flex-1 flex-col items-center font-poppins overflow-y-scroll max-w-[550px]'>
       <nav className='flex justify-between items-center px-5 flex-1 max-w-[550px] w-full h-12 fixed bg-white z-40 border-b-2'>
          <div className='w-full h-full flex justify-center items-center relative'>
            <FaArrowLeft aria-hidden='true' className='absolute left-0 cursor-pointer ml-5'/> 
            <h3 className='font-medium text-lg'>Games</h3>
          </div>
      </nav>

        <div className='flex w-full flex-col items-center space-y-4 overflow-y-scroll p-3 mt-14'>

            <Link href={"/games/tictactoe"} className='w-full h-48 bg-white rounded-lg flex justify-center items-center drop-shadow'>
              <h1 className='font-bold text-2xl'>Tic Tac Toe</h1>
            </Link>

        </div>
    </div>
  )
}

export default Games