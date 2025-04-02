import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import "./AuctionContent.css";

const AuctionContent = () => {
    const { auction, closeAuction } = useContext(AuctionContext);

    const user = JSON.parse(localStorage.getItem("user"))

    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

    return (
        <div className="content">
            <div className="content-note">
                <span>Created at {formatDate(auction.createdAt)}</span>
                {user && user._id == auction.user && auction.isOpen && auction.bids.length < 1 ? 
                (
                <button className="close-auction" onClick={() => closeAuction(auction._id)}>Close</button>
                ) 
                : (<></>)}
            </div>

            <div className="description">
                <div className="title">Beskrivning</div>
                <p>{auction.description}</p>
            </div>
        </div>
    );
}

export default AuctionContent;