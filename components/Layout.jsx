import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div className="w-screen h-screen flex flex-col items-stretch justify-center">
            <Header />
            <main className="flex-1 flex justify-center w-full h-full">
                <div className="flex-1 flex max-w-4xl h-full px-3">
                    { children }
                </div>
            </main>
            <Navbar />
        </div>
    )
}

export default Layout;