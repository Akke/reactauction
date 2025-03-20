import AuctionContent from "./AuctionContent";
import AuctionSidebar from "./AuctionSidebar";
import "./ViewAuction.sass";

const ViewAuction = () => {
    return (
        <div className="ViewAuction">
            <AuctionContent />
            <AuctionSidebar />
        </div>     
    );
}

export default ViewAuction;