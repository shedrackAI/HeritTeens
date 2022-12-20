import React from 'react'
import Image from 'next/image'

import profileImg from '../../public/images/profile.jpg'

function ProfilePicture({round}) {
  return (
    <div>
      <Image 
        src={profileImg}
        className={`object-cover ${round}`}
        layout='responsive'
      />
    </div>
  )
}

export default ProfilePicture