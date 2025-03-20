import React from 'react'
import classes from './auctionslist.module.css'
import AuctionItem from './AuctionItem'

const AuctionsList = () => {
    return (<>
        <h1>Alla Auktioner</h1>
        <ul className={classes.auctionList}>
            <AuctionItem/>
        </ul>
    </>)
}

export default AuctionsList
