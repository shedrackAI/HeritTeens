import React, { useState, useEffect, createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ header, setHeader ] = useState(false);
    const [ onBoarding, setOnBoarding ] = useState(1);
    const [ completeOnBoarding, setCompleteOnBoarding ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ welcomeAnimation, setWelcomeAnimation ] = useState(true)

    // User details
    const [ userFullname, setUserFullname ] = useState('');
    const [ userGender, setUserGender ] = useState('');
    const [ userDepartment, setUserDepartment ] = useState('');
    const [ userIsMember, setUserIsMember ] = useState('');

    const user = {
      userFullname: userFullname,
      userDepartment: userDepartment,
      userGender: userGender,
      userIsMember: userIsMember 
    }

  // Remove welcome page after 11s
  useEffect(() => {
    setTimeout(() => {
      setHeader(true);
      setIsLoading(false);
    }, 11000);
  }, []);

  const setOnBoardingStageForward = () => {
    switch (onBoarding) {
        case 0:
            setOnBoarding(1)
            break;
        case 1:
            setOnBoarding(2)
            break;
        case 2:
            setOnBoarding(3)
            break;
    } 
  }

    return (
        <AppContext.Provider
         value={{
            isLoading,
            onBoarding,
            setOnBoardingStageForward,
            onBoarding,
            setOnBoarding,
            user,
            completeOnBoarding,
            setCompleteOnBoarding,
            welcomeAnimation,
            setWelcomeAnimation,
            header,
            setHeader
        }}>
            {children}
        </AppContext.Provider>
    );
}