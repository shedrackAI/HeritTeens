import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

function BottomPopup({ title, cancleBtnTitle, submitBtnTitle, children, cancle}) {
  const { bottomPopup, setBottomPopup } = useContext(AppContext);
  return (
    <div className='h-full w-full setting_container absolute bottom-0 z-40'>
        <div className='setting rounded-t-3xl flex flex-col items-center overflow-hidden'>
            <div className='bg-white font-medium flex-1 h-full w-full'>
                <h1 className='w-full text-center p-2'>Settings</h1>
            </div>

            <div className='bottom-0 w-full flex justify-between p-3'>
                <button onClick={() => cancle()} className='bg-red-400 cursor-pointer px-4 py-1 rounded-lg text-white font-semibold'>cancle</button>
                <button className='bg-blue-400 cursor-pointer text-white px-4 py-1 rounded-lg font-semibold'>save</button>
            </div>
        </div>
    </div>
  )
}

export default BottomPopup