import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import "./AuctionSidebar.css";
import { AuthContext } from "../../context/AuthProvider";

const AuctionSidebar = () => {
    const { auction } = useContext(AuctionContext);
    const { user } = useContext(AuthContext);

    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()}`;
        return result;
    }

    const getDateDifference = (dateTimeNow, dateTimeThen) => {
        const timeNow = new Date(dateTimeNow);
        const timeThen = new Date(dateTimeThen);
        const diff = timeThen - timeNow;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const result = `${days}d ${hours}h ${minutes}m`;

        return result;
    }

    return (
        <div className="sidebar">
            <div className="title">{auction.title}</div>
            <div className="expiration-date">
                <div className="date">Ends {formatDate(auction.closingDate)}</div>
                <div className="estimate">{getDateDifference(auction.createdAt, auction.closingDate)}</div>
            </div>
            <div className="price">
                <div className="asking-price">Asking Price</div>
                <div className="bids">0 bids</div>
                <div className="amount">{auction.askingPrice} kr</div>
            </div>
            {user && (auction.user != user._id) ? (
                <div className="bid-button">
                    Add Bid
                </div>
            ) : (<></>)}
        </div>
    );
}

export default AuctionSidebar;