import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Header from "./Header";
import Navbar from "./Navbar";

import { BsEmojiWink } from 'react-icons/bs'
import BottomPopup from "./BottomPopup";

function Layout({ children }) {
    const { header, welcomeAnimation } = useContext(AppContext);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center relative overflow-x-hidden overflow-y-scroll">
            {header && (
                // <div className="max-w-4xl flex-1 bg-blue-300">
                    <Header />
                // </div>
            )}
            <main className="flex-1 flex justify-center w-full h-full overflow-y-scroll relative">
                <div className="flex-1 flex justify-center max-w-4xl h-full relative overflow-hidden">
                    { children }
                    <div className="w-11 h-11 grid place-items-center cursor-pointer absolute right-2 bottom-10 rounded-full bg-white drop-shadow-lg text-green-400"> <BsEmojiWink aria-hidden='true' size={20}/> </div>
                </div>
            </main>


            
            {/* Settings
            {bottomPopup === "settings" ? (
                <BottomPopup title={'Settings'} cancleBtnTitle='Cancle' submitBtnTitle='Apply'>
                    <form action="#" method="post" className="bg-red-200 w-full p-3">
                        <input type="text" placeholder="Fullname..."/>
                    </form>
                </BottomPopup>
            ):""} */}




            {!welcomeAnimation && (
                <Navbar />
            )} 
        </div>
    )
}

export default Layout;