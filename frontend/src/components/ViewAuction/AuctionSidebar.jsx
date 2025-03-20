import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";

const AuctionSidebar = () => {
    const { auction } = useContext(AuctionContext);

    return (
        <div className="sidebar">
            <div className="title">{auction.title}</div>
            <div className="expiration-date">
                <div className="date">Ends {auction.closingDate}</div>
                <div className="estimate">3 days 5 hours</div>
            </div>
            <div className="price">
                <div className="asking-price">Asking Price</div>
                <div className="bids">0 bids</div>
                <div className="amount">{auction.askingPrice} kr</div>
            </div>
            <div className="bid-button">
                Add Bid
            </div>
            <div className="favorite">
                Add to Favorites
            </div>
        </div>
    );
}

export default AuctionSidebar;