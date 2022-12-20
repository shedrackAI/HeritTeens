import Image from 'next/image'
import React, { useState } from 'react'

import { AiOutlineComment, AiOutlinePushpin } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { 
    RiDeleteBin6Line, 
    RiEmotionHappyLine, 
    RiFileGifLine, 
    RiHeart2Line, 
    RiNotification2Line, 
    RiSendPlane2Line, 
    RiShareForwardLine 
} from 'react-icons/ri';

import ProfilePicture from './ProfilePicture'

function PostCard({image}) {
    const [ post, setPost ] = useState(false);
    const postSet = () => {
        if(post) setPost(false)
        else setPost(true) 
    }


  return (
    <div className='p-4 bg-white mb-3 flex-1 max-w-[550px] min-w-[100px] flex flex-col gap-4'>
        <div className='flex items-center flex-1'>
            <div className='xs:w-11 w-9'><ProfilePicture round={"rounded-full"}/></div>
            <div className='flex-1 pl-5'>
                <h1 className='font-semibold text-base text-[#4c5870]'>Aigbe shedrack</h1>
                <h4 className='font-medium text-[#4c58708a] text-[12px]'>Just Now</h4>
            </div>
            <div className='relative max-w-[330px] flex flex-col items-end'>
                <BsThreeDots color='#4c5870' size={20} className='cursor-pointer' onClick={postSet}/>
                {post ?
                    <div className='w-full bg-white top-4 relative z-40'>
                        <div className='absolute bg-white drop-shadow text-[#4c5870] list-none font-semibold p-4 z-40 w-full flex flex-col gap-4 rounded-xl'>
                            <li className='flex gap-4'><RiDeleteBin6Line size={20}/> Delete post</li>
                            <li className='flex gap-4'><FiEdit size={20}/> Edit post</li>
                            <li className='flex gap-4'><AiOutlinePushpin size={20}/> Pin to my profile</li>
                            <li className='flex gap-4'><RiNotification2Line size={20}/>Turn on notification for this post</li>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
        <div>
            <h2 className='font-medium text-[#4c5870] text-[14px]'>
                Aorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sunt eligendi blanditiis, modi sed dicta facilis laborum iure.
            </h2>
        </div>
        <div className='overflow-hidden object-cover'>
            <div>
                <Image 
                 src={image}
                 className={`object-cover`}
                 layout='responsive'
                />
            </div>
        </div>
        <div className='list-none flex flex-1 text-secondary'>
            <div className='flex gap-2'>
                <li className='flex items-center gap-2 font-medium'><RiHeart2Line size={23}/></li>
                <li className='flex items-center justify-center gap-2 font-medium'><AiOutlineComment size={23}/></li>
                <li className='flex items-center gap-2 font-medium'><RiShareForwardLine size={23}/></li>
            </div>
            <div className='flex gap-4 font-medium text-gray-400 small-phone:text-[14px] text-[10px] flex-1 justify-end'>
                <h1> 3 Comments</h1>
                <h1> 13 Shares</h1>
            </div>
        </div>

        <div className='flex items-center'>
            <div className='flex flex-1'>
                <div className='w-5 h-5 rounded-full bg-gray-800'></div>
                <div className='w-5 h-5 rounded-full bg-gray-700 relative -left-1'></div>
                <div className='w-5 h-5 rounded-full bg-gray-600 relative -left-2'></div>
                <div className='w-5 h-5 rounded-full bg-gray-500 relative -left-3 text-white text-xs flex justify-center items-center'>+9</div>
            </div>
            
        </div>

        <div>
            <div className='flex gap-4 items-center'>
                <div className='w-10 hidden small-phone:block'>
                    <ProfilePicture round={'rounded-full'}/>
                </div>
                <div className='flex h-full flex-1 bg-grayBg rounded-lg px-3 py-2 text-secondary gap-3'>
                    <input className='flex flex-1 bg-transparent min-w-[2px]' type="text" placeholder='Write a comment...'/>
                    {/* <RiFileGifLine size={20}/>
                    <HiOutlinePhotograph size={20}/>
                    <RiEmotionHappyLine size={20}/> */}
                </div>
                <button className='p-2 rounded-lg bg-green-50 text-green-300'><RiSendPlane2Line size={20}/></button>
            </div>
        </div>
    </div>
  )
}

export default PostCard