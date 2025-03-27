import { Routes, Route } from "react-router-dom";
import ViewAuction from "../components/ViewAuction/ViewAuction";
import Layout from "../components/Layout";
import AuctionsList from "../Components/AuctionsList/AuctionsList";
import AccountRegister from "../components/AccountRegister/AccountRegister";
import AccountLogin from "../components/AccountLogin/AccountLogin";
import ProtectedRoute from "./ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import PublicRoute from "./PublicRoute";

const Router = () => {
    const { user } = useContext(AuthContext);

    /*
    * Vill du skapa en "protected" route där man måste vara inloggad?
        <Route exact path="/view/:id" element={<ProtectedRoute isAuthenticated={user !== null} />}>
            <Route index element={<Layout><ViewAuction /></Layout>} />
        </Route>
    */

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout><AuctionsList/></Layout>}></Route>
                <Route exact path="/register" element={<Layout><AccountRegister/></Layout>}></Route>
                <Route exact path="/login" element={<PublicRoute isAuthenticated={user !== null} />}>
                    <Route index element={<Layout><AccountLogin /></Layout>} />
                </Route>
                <Route exact path="/view/:id" element={<Layout><ViewAuction /></Layout>} />
            </Routes>
        </>
    )
}

export default Router;