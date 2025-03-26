import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import "./AuctionContent.css";

const AuctionContent = () => {
    const { auction } = useContext(AuctionContext);

    return (
        <div className="content">
            <div className="content-note">
                Created at {auction.createdAt}
            </div>

            <div className="description">
                <div className="title">Beskrivning</div>
                <p>{auction.description}</p>
            </div>
        </div>
    );
}

export default AuctionContent;