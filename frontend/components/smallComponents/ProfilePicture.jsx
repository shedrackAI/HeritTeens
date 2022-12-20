import React from 'react'
import Image from 'next/legacy/image'

import profileImg from '../../public/images/profile.jpg'

function ProfilePicture({round}) {
  return (
    <div>
      <Image 
        src={profileImg}
        className={`object-cover ${round}`}
        layout='responsive'
        alt='Profile image'
      />
    </div>
  )
}

export default ProfilePicture