import { Routes, Route } from "react-router-dom";
import ViewAuction from "../components/ViewAuction/ViewAuction";
import Layout from "../components/Layout";

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/view" element={<Layout><ViewAuction /></Layout>}></Route>
            </Routes>
        </>
    )
}

export default Router;