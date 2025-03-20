
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <div className="main">{children}</div>
            <Footer/>
        </>
    )
}

export default Layout;