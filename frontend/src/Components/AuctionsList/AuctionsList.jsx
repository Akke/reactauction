import React, { useEffect, useState } from 'react'
import classes from './auctionslist.module.css'
import AuctionItem from './AuctionItem'
import { getAllAuctions } from '../../services/auctionApi'

const AuctionsList = () => {
    const [auctions, setAuctions] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        setError(false);
        
        getAllAuctions().then(response => {
            setAuctions(response.data)
            console.log(auctions)
            // setLoading(false)
        })
    }, []) 

    return (<>
        <h1>Alla Auktioner</h1>
        {loading && "Loading..."}
        {error && "No auctions found"}
        <ul className={classes.auctionList}>
            {auctions && 
                console.log(auctions) && // This prints array of 3 items
                auctions.map(auction => {
                    // console.log(auction) // This also prints data as expected
                    <AuctionItem key={auction._id} />
                })
            }
        </ul>
    </>)
}

export default AuctionsList
