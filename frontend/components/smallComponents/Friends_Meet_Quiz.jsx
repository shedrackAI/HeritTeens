import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext';

function Friends_Meet_Quiz() {
   const { setCurrentPage } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center mt-6'>
        <div className='flex justify-center gap-10 flex-1 max-w-xl'>
            <Link href={'/friends'} className='text-center flex-1 cursor-pointer' onClick={() => setCurrentPage('friends')}>
                    <h1 className='font-bold'>Friends</h1>
                    <p className='font-normal text-gray-600'>12k</p>
            </Link>
            <Link href={'/friends'} className='text-center flex-1 cursor-pointer' onClick={() => setCurrentPage('friends')}>
                    <h1 className='font-bold'>Meet</h1>
                    <p className='font-normal text-gray-600'>10k</p>
            </Link>
            <Link href={'/friends'} className='text-center flex-1 cursor-pointer' onClick={() => setCurrentPage('friends')}>
                    <h1 className='font-bold'>Quiz</h1>
                    <p className='font-normal text-gray-600'>19</p>
            </Link>
        </div>
    </div>
  )
}

export default Friends_Meet_Quiz