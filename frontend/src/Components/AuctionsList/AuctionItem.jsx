import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './auctionitem.module.css'


const AuctionItem = () => {
    return (
        <li className={classes.item}>
            <div className={classes.itemData}>
                <h2>Title</h2>
                <button>
                    <NavLink to="/view" className={classes.auctionBtn}>View Auction</NavLink>
                </button>
            </div>
            <div className={classes.itemData}>
                <div>
                    <span><b>Price:</b> XXXX kr</span>
                    <span><b>Seller:</b> Jane Doe</span>
                </div>
                <div>
                    <span><b>Start:</b> Date</span>
                    <span><b>End:</b> Date</span>
                </div>
            </div>
        </li>
    )
}

export default AuctionItem