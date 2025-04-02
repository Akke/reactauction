import { useContext } from "react"
import { AuctionContext } from "../../context/AuctionProvider"

export const HighestBid = () => {
    const { auction, isAuctionOpen } = useContext(AuctionContext);
    
    const bidsArray = auction.bids
    const filteredBids = bidsArray.sort((a, b) => b.bid - a.bid)
    if(filteredBids.length) {
        return(
            <div className="highest-bid">
                <b>Highest Bid</b>
                {filteredBids[0].bid}kr
            </div>
        )
    } else if(!filteredBids.length && !isAuctionOpen()) {
        return (
            <>This auction ended without any bids.</>
        )
    }
}