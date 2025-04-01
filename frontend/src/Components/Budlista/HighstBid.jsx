export const HighestBid = (bids) => {
    const bidsArray = bids.bids
    if(bidsArray){
        const filteredBids = bidsArray.sort((a, b) => b.bid - a.bid)
    }
    return(
        <>{bidsArray && bidsArray.length ? (<>
        <b>Highest Bid:</b>
        <p>{filteredBids[0].bid}</p>
        </>) : <></>
        }
        </>
    )
}