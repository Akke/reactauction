import { useContext } from "react"
import { AuctionContext } from "../../context/AuctionProvider"

export const HighestBid = () => {
    const { auction, isAuctionOpen } = useContext(AuctionContext);
    
    const bidsArray = auction.bids
    const filteredBids = bidsArray.sort((a, b) => b.bid - a.bid)
    if(filteredBids.length) {
        return(
            <>
            <b>Highest Bid:</b>
            <p>{filteredBids[0].bid}</p>
            </>
        )
    } else if(!filteredBids.length && !isAuctionOpen()) {
        return (
            <>This auction ended without any bids.</>
        )
}