import { useContext } from "react";
import { AuctionContext } from "../../context/AuctionProvider";

const AuctionContent = () => {
    const { auction } = useContext(AuctionContext);

    return (
        <div className="content">
            <div className="description">
                <div className="title">Beskrivning</div>
                <p>{auction.description}</p>
            </div>
            
            <div className="content-footer">
                Created at 25 May 20:23
            </div>
        </div>
    );
}

export default AuctionContent;