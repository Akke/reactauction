import React, { useContext, useEffect, useState } from 'react'
import classes from './auctionslist.module.css'
import AuctionItem from './AuctionItem'
import { NavLink } from 'react-router'
import { AuctionContext } from '../../context/AuctionProvider'

const AuctionsList = () => {
    const { auction, auctions, getAuctions } = useContext(AuctionContext);
    const [auctionList, setAuctionList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        
        const getAllAuctions = async () => {
            const result = await getAuctions();
            return result;
        }

        getAllAuctions().then((data) => {
            const sortedList = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            setAuctionList(sortedList);
            setLoading(false);
        })
    }, []);

    return (<>
        <h1>All Auctions</h1>
        <button>
            <NavLink className={classes.newBtn} to="/newauction">Add new</NavLink>
        </button>

        {loading && "Loading..."}
        {error && "No auctions found"}

        <ul className={classes.auctionList}>
            {
                auctionList.map(auction => {
                    return (
                        <AuctionItem key={auction._id} auction={auction} />
                    )
                })
            }
        </ul>
    </>)
}

export default AuctionsList
