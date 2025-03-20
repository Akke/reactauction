import AuctionContent from "./AuctionContent";
import AuctionSidebar from "./AuctionSidebar";
import "./ViewAuction.css";

const ViewAuction = () => {
    return (
        <div className="ViewAuction">
            <AuctionContent />
            <AuctionSidebar />
        </div>     
    );
}

export default ViewAuction;