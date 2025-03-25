import { useParams } from "react-router-dom";
import AuctionContent from "./AuctionContent";
import AuctionSidebar from "./AuctionSidebar";
import "./ViewAuction.css";
import { useContext, useEffect } from "react";
import { AuctionContext } from "../../context/AuctionProvider";

const ViewAuction = () => {
    const { id } = useParams();
    const { fetchAuction } = useContext(AuctionContext);

    useEffect(() => {
        fetchAuction(id);
    }, [id]);

    return (
        <div className="ViewAuction">
            <AuctionContent />
            <AuctionSidebar />
        </div>     
    );
}

export default ViewAuction;