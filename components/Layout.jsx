import Nav from "./Nav";

function Layout({ children }) {
    return (
        <div className="w-screen h-screen flex flex-col justify-center px-7">
            <Nav />
            <main className="w-full h-full">{ children }</main>
        </div>
    )
}

export default Layout;