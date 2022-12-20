import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

function Register() {
  const { setHeader } = useContext(AppContext);

  return (
    <div className='h-full flex justify-center items-center'>
        <div className='flex-1 flex flex-col items-center max-w-[300px] px-9'>
          
          <Link href={'/auth/onBoarding'} className='w-full p-2 rounded-lg bg-green-700 text-white font-medium text-lg cursor-pointer'>
            <button onClick={() => setHeader(true)} className='w-full'>
                Sign Up
            </button>
          </Link>

          <h3 className='py-1 text-gray-300 text-sm'>OR</h3>
          
          <Link href={'/auth/onBoarding'} className='w-full p-2 rounded-lg bg-green-700 text-white font-medium text-lg cursor-pointer'>
            <button onClick={() => setHeader(true)} className='w-full'>
                Login
            </button>
          </Link>

        </div>
    </div>
  )
}

export default Register