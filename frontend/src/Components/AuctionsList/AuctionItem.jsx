import React from 'react'
import classes from './auctionitem.module.css'


const AuctionItem = () => {
    return (
        <li className={classes.item}>
            <div className={classes.itemData}>
                <h2>Titel</h2>
                <button>Gå till auktion</button> {/* Ska länka till specifik auktion */}
            </div>
            <div className={classes.itemData}>
                <div>
                    <span><b>Pris:</b> XXXX kr</span>
                    <span><b>Säljare:</b> Namn Namnson</span>
                </div>
                <div>
                    <span><b>Start:</b> Datum</span>
                    <span><b>Slut:</b> Datum</span>
                </div>
            </div>
        </li>
    )
}

export default AuctionItem