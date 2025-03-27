import React from 'react'
import classes from './auctionslist.module.css'
import AuctionItem from './AuctionItem'
import { NavLink } from 'react-router'

const AuctionsList = () => {
    return (<>
        <h1>All Auctions</h1>
        <button>
            <NavLink className={classes.newBtn} to="/newauction">Add new</NavLink>
        </button>
        <ul className={classes.auctionList}>
            <AuctionItem/>
        </ul>
    </>)
}

export default AuctionsList
