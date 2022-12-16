import Link from 'next/link';
import { useContext } from 'react';
import { FaArrowLeft }  from 'react-icons/fa'
import { AppContext } from '../contexts/AppContext';

function Nav() {
  const { onBoarding, setOnBoarding } = useContext(AppContext);

  const backwardOnBoarding = () => {
    switch (onBoarding) {
      case 4:
        setOnBoarding(3)
        break;
      case 3:
        setOnBoarding(2)
        break;
      case 2:
        setOnBoarding(1)
        break;
      default:
        break;
    }
  }

  return (
   <nav className='flex justify-between items-center p-5'>
       <FaArrowLeft onClick={backwardOnBoarding}/>
   </nav>
  )
}

export default Nav