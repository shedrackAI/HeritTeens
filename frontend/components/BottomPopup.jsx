import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

function BottomPopup() {
  const { bottomPopup, setBottomPopup } = useContext(AppContext);

  const closePopup = () => {
    setBottomPopup({
      show: false,
      page: null
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-full w-full max-w-[550px] setting_container absolute bottom-0 z-40'>
        <div className='setting max-w-[550px] rounded-t-3xl flex flex-col items-center overflow-hidden'>


          {/* Settings Popup */}
          {bottomPopup.page === "settings" ? (
            <form action="#" method="get" onSubmit={handleSubmit} className='w-full'>
              <div className='bg-white font-medium flex-1 h-full w-full'>
                  <h1 className='w-full text-center p-2'>Edit Profile</h1>
              </div>
              <div className='w-full flex flex-col items-center space-y-3 px-10 py-2 mb-5'>
                <input type="tel"  placeholder="WhatsApp Number..." className='w-full px-2 py-2 rounded-lg bg-gray-100'/>
                <input type="text"  placeholder='Fullname...' className='w-full px-2 py-2 rounded-lg bg-gray-100'/>
                <input type="text"  placeholder='Are you a member' className='w-full px-2 py-2 rounded-lg bg-gray-100'/>
                <textarea name="" placeholder='Edit your Bio' cols="30" rows="5" className='w-full rounded-lg p-2 bg-slate-100'></textarea>
              </div>
              <div className='mb-5 w-full flex justify-between p-3'>
                  <button onClick={() => closePopup()} className='bg-red-400 cursor-pointer px-4 py-1 rounded-lg text-white font-semibold'>cancle</button>
                  <button type='submit' className='bg-blue-400 cursor-pointer text-white px-4 py-1 rounded-lg font-semibold'>save</button>
              </div>
            </form>
          ):""}






        </div>
    </div> 
  )
}

export default BottomPopup