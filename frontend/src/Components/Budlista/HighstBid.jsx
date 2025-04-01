export const HighestBid = (bids) => {
    const bidsArray = bids.bids
    const filteredBids = bidsArray.sort((a, b) => b.bid - a.bid)
    console.log(filteredBids[0].bid)
    return(
        <>
        <b>Highest Bid:</b>
        <p>{filteredBids[0].bid}</p>
        </>
    )
}