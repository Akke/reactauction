import Header from "./Header/Header.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;