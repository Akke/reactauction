import Header from "./Header/Header.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="main">{children}</div>
        </>
    )
}

export default Layout;