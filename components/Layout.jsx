import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Header from "./Header";
import Navbar from "./Navbar";

import { FaPlus } from 'react-icons/fa'

function Layout({ children }) {
    const { header, welcomeAnimation } = useContext(AppContext);

    return (
        <div className="w-screen h-screen flex flex-col items-stretch justify-center relative overflow-x-hidden overflow-y-scroll">
            {header && (
                <Header />
            )}
            <main className="flex-1 flex justify-center w-full h-full overflow-y-scroll relative">
                <div className="flex-1 flex justify-center max-w-4xl h-full px-3 relative">
                    { children }
                    <div className="w-11 h-11 grid place-items-center cursor-pointer absolute right-2 bottom-10 rounded-full bg-white drop-shadow-lg text-green-300"> <FaPlus size={20}/> </div>
                </div>
            </main>
            {!welcomeAnimation && (
                <Navbar />
            )} 
        </div>
    )
}

export default Layout;