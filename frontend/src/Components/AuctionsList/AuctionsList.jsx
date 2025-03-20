import React from 'react'
import classes from './auctionslist.module.css'

const AuctionsList = () => {
    return (<>
        <h1>Alla Auktioner</h1>
        <ul className={classes.auctionList}>
            <li>
                <div>
                    <h2>Titel</h2>
                    <button>Gå till auktion</button> {/* Ska länka till specifik auktion */}
                </div>
                <div>
                    <div>
                        <span>Pris: XXXX kr</span>
                        <span>Säljare: Namn Namnson</span>
                    </div>
                    <div>
                        <span>Start: Datum</span>
                        <span>Slut: Datum</span>
                    </div>
                </div>
            </li>
        </ul>
    </>)
}

export default AuctionsList
