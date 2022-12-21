import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import male from '../public/images/man.png'
import female from '../public/images/woman.png'
import group from '../public/images/group.png'
import notMember from '../public/images/person.png'

export const Gender = () => {
    const { setOnBoarding, setUser } = useContext(AppContext);
    
    const setUserGenderMale = () => {
        setOnBoarding(2);
        setUser.setUserGender("Male");
    }

    const setUserGenderFemale = () => {
        setOnBoarding(2);
        setUser.setUserGender("Female");
    }

    return (
        <div className='flex flex-col space-y-9 h-[200px] font-poppins'>
            <h1 className='text-center font-semibold text-xl'>Gender</h1>
            <div className='flex w-full space-x-9'>
                <div className="text-center flex flex-col justify-center items-center space-y-2">   
                    <div onClick={setUserGenderMale} className='w-24 h-24 bg-white rounded-lg shadow-md shadow-green-100'>
                        <Image 
                        src={male}
                        alt="image of a man"
                        priority
                        />
                    </div>
                    <h3 className="text-md font-medium text-gray-400">male</h3>
                </div>

                <div className="text-center flex flex-col justify-center items-center space-y-2">   
                    <div onClick={setUserGenderFemale} className='w-24 h-24 bg-white rounded-lg shadow-md shadow-green-100'>
                        <Image 
                         src={female}
                         alt="image of a woman"
                         priority
                        />
                    </div>
                    <h3 className="text-md font-medium text-gray-400">female</h3>
                </div>
            </div>
        </div>
    )
}

export const Name = () => {
    const { setOnBoarding, setUser } = useContext(AppContext);

    const setUserName = () => {
        setOnBoarding(3);
    } 

    return (
        <div className='flex flex-col space-y-9 items-center justify-center h-[200px] font-poppins'>
            <h1 className='text-center font-semibold text-xl'>What your name</h1>
            <div className='flex flex-col w-full space-y-9 justify-center items-center h-24'>
                <form action="#" method="POST" className='flex flex-col space-y-3 justify-center items-center'>
                    <input
                    onChange={(e) => setUser.setUserFullname(e.target.value)}
                    placeholder="Enter your fullname..."
                    name="name" 
                    className="border px-3 py-2 rounded-md w-[200px] xs:w-[240px] font-medium placeholder:text-gray-300 text-sm"
                    />
                    <button onClick={setUserName} className="bg-green-700 text-white font-medium px-5 py-1 rounded-lg cursor-pointer" type="submit" >Next</button>
                </form>
            </div>
        </div>
    )
}

export const Member = () => {
    const { setOnBoarding, setUser } = useContext(AppContext);

    const setUserMembershipYes = () => {
        setOnBoarding(4);
        setUser.setUserIsMember("Yes");
    }
    const setUserMembershipNo = () => {
        setOnBoarding(4);
        setUser.setUserIsMember("No");
    }

    return (
        <div className='flex flex-col space-y-9 items-center h-[200px] font-poppins'>
            <h1 className='text-center font-semibold text-xl'>Are you a member of Heritage</h1>
            <div className='flex w-full space-x-9 justify-center items-center'>
                <div className="text-center flex flex-col justify-center items-center space-y-2">   
                    <div onClick={setUserMembershipYes} className='w-24 h-24 bg-white rounded-lg shadow-md shadow-green-100 flex justify-center items-center'>
                        <Image 
                        src={group}
                        alt="image of a man"
                        priority
                        />
                    </div>
                    <h3 className="text-md font-medium text-gray-400">Yes</h3>
                </div>

                <div className="text-center flex flex-col justify-center items-center space-y-2">   
                    <div onClick={setUserMembershipNo} className='w-24 h-24 bg-white rounded-lg shadow-md shadow-green-100 flex justify-center items-center'>
                        <Image 
                        src={notMember}
                        alt="image of a man"
                        priority
                        />
                    </div>
                    <h3 className="text-md font-medium text-gray-400">No</h3>
                </div>
            </div>
        </div>
    )
}

export const Department = () => {
    const { setOnBoarding, setCompleteOnBoarding, completeOnBoarding, setIsLoading, setHeader } = useContext(AppContext);

    const setUserDepartment = () => {
        setOnBoarding(4);
        setCompleteOnBoarding(true);
        setHeader(false);
    } 
    return (
        <div className={completeOnBoarding  ? 'hidden' : 'flex flex-col space-y-9 items-center h-[200px] font-poppins'}>
            <h1 className='text-center font-semibold text-xl'>Are you in any de partment</h1>
            <div className='flex w-full space-y-9 justify-center items-center'>
                    <select className="w-full overflow-hidden p-2 bg-gray-200 rounded-md text-base font-medium text-gray-500">
                            <option  value={'none'} className="w-3 absolute">None</option>
                            <option value={'drama'} className="w-3">Drama</option>
                            <option value={'media'} className="w-3">Media</option>
                            <option value={'music'} className="w-3">Music</option>
                            <option value={'hoat'} className="w-3">Host</option>
                    </select>
            </div>
            <Link href={'/dashboard'}>
                <button onClick={setUserDepartment} className="bg-green-700 text-white font-medium px-5 py-1 rounded-lg cursor-pointer" type="">Done</button>
            </Link>
        </div>
    );
}; 