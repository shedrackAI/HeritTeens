import Link from 'next/link'
import React from 'react'
import LevelCard from '../components/smallComponents/LevelCard'

function Games() {
  return (
    <div className='flex-1 flex-col items-center font-poppins overflow-y-scroll max-w-[550px]'>
        <div className='flex w-full flex-col items-center space-y-4 overflow-y-scroll p-3'>

            <Link href={"/games/tictactoe"} className='w-full h-48 bg-white rounded-lg flex justify-center items-center drop-shadow'>
              <h1 className='font-bold text-2xl'>Tic Tac Toe</h1>
            </Link>

        </div>
    </div>
  )
}

export default Games