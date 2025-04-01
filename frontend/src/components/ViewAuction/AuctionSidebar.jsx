import BudLista from "../Budlista/BudLista";
import { useContext, useRef } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import "./AuctionSidebar.css";
import { AuthContext } from "../../context/AuthProvider";
import PlaceBid from "../../Components/AuctionPlaceBid/PlaceBid";
import { HighestBid } from "../Budlista/HighstBid";
import { deleteAuction } from "../../services/auctionApi";
import { useNavigate } from "react-router";

const AuctionSidebar = () => {
    const { auction, isAuctionOpen } = useContext(AuctionContext);
    const navigate = useNavigate()
    const { auction } = useContext(AuctionContext);
    const { user } = useContext(AuthContext);
    const modalRef = useRef(null);

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

    const handleBidButton = () =>{
        const modalStyle = modalRef.current.style
        modalStyle.display = "block"
    }

    const handleDeleteBtn = async (id) => {
        const result  = await deleteAuction(id)
        if(result.success){
            navigate("/")
        }
    }

    return (
        <div className="sidebar">
            <PlaceBid ref={modalRef} />

            <div className="title">{auction.title}</div>
            <div className="expiration-date">
                <div className="date">Ends {formatDate(auction.closingDate)}</div>
                <div className="estimate">{getDateDifference(auction.createdAt, auction.closingDate)}</div>
            </div>
            <div className="price">
                <div className="asking-price">Asking Price</div>
                <div className="bids">{auction.bids.length} bids</div>
                <div className="amount">{auction.askingPrice} kr</div>
            </div>
            {isAuctionOpen() ? (
                <BudLista/>
            ) : (<HighestBid />)}
            {user && (auction.user != user._id) ? (
                isAuctionOpen() ? (
                    <div onClick={handleBidButton} className="bid-button">
                        Add Bid
                    </div>
                ) : (
                    <div className="bid-button closed">
                        Auction Closed
                    </div>
                )
            ) : (<></>)}
            {user && (auction.user == user._id) ? (
                <>
                    <button onClick={() => handleDeleteBtn(auction._id)}>Delete auction</button>
                </>
            ) : <></>}
        </div>
    );
}

export default AuctionSidebar;