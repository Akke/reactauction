import { Routes, Route } from "react-router-dom";
import ViewAuction from "../components/ViewAuction/ViewAuction";
import Layout from "../components/Layout";
import AuctionsList from "../Components/AuctionsList/AuctionsList";
import AccountRegister from "../components/AccountRegister/AccountRegister";
import AccountLogin from "../components/AccountLogin/AccountLogin";
import NewAuction from "../Components/NewAuctionForm/NewAuction";

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout><AuctionsList/></Layout>}></Route>
                <Route exact path="/newauction" element={<Layout><NewAuction/></Layout>}></Route>
                <Route exact path="/register" element={<Layout><AccountRegister/></Layout>}></Route>
                <Route exact path="/login" element={<Layout><AccountLogin/></Layout>}></Route>
                <Route exact path="/view/:id" element={<Layout><ViewAuction /></Layout>}></Route>
            </Routes>
        </>
    )
}

export default Router;