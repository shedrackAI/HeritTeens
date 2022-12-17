import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
    const { header, onBoarding, welcomeAnimation } = useContext(AppContext);

    return (
        <div className="w-screen h-screen flex flex-col items-stretch justify-center relative overflow-x-hidden overflow-y-scroll">
            {header === true ? (
                <Header />
            ):''}
            <main className="flex-1 flex justify-center w-full h-full overflow-y-scroll">
                <div className="flex-1 flex max-w-4xl h-full px-3 overflow-hidden">
                    { children }
                </div>
            </main>
            {!welcomeAnimation && (
                <Navbar />
            )} 
        </div>
    )
}

export default Layout;