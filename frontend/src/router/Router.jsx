import { Routes, Route } from "react-router-dom";
import ViewAuction from "../components/ViewAuction/ViewAuction";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/view" element={<ViewAuction />}></Route>
        </Routes>
    )
}

export default Router;