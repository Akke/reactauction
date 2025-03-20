import { Routes, Route } from "react-router-dom";
import ViewAuction from "../components/ViewAuction/ViewAuction";
import Layout from "../components/Layout";
import AuctionsList from "../Components/AuctionsList/AuctionsList";

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout><AuctionsList/></Layout>}></Route>
                <Route exact path="/view" element={<Layout><ViewAuction /></Layout>}></Route>
            </Routes>
        </>
    )
}

export default Router;