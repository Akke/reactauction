import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import "./AuctionContent.css";

const AuctionContent = () => {
    const { auction } = useContext(AuctionContext);

    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

    return (
        <div className="content">
            <div className="content-note">
                Created at {formatDate(auction.createdAt)}
            </div>

            <div className="description">
                <div className="title">Beskrivning</div>
                <p>{auction.description}</p>
            </div>
        </div>
    );
}

export default AuctionContent;