import React, { useContext, useEffect, useState } from 'react'
import classes from './auctionslist.module.css'
import AuctionItem from './AuctionItem'
import { NavLink } from 'react-router'
import { AuctionContext } from '../../context/AuctionProvider'
import { AuthContext } from '../../context/AuthProvider'

const AuctionsList = () => {
    const { auctions, getAuctions, isAuctionOpen } = useContext(AuctionContext);
    const [auctionList, setAuctionList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllAuctions = async () => {
            const result = await getAuctions();
            return result;
        }

        getAllAuctions();
    }, []);

    useEffect(() => {
        const sortedList = auctions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAuctionList(sortedList);
        setLoading(false);
    }, [auctions]);

    return (<>
        <h1>All Auctions</h1>
        
        {isLoggedIn() ? (
            <NavLink className={classes.newBtn} to="/newauction">
                <button className={classes.newAuctionButton}>
                    Create Auction
                </button>
            </NavLink>
        ) : (<></>)}
        
        {loading ? (<>Loading...</>) : (
            auctions.length > 0 ? (
                <ul className={classes.auctionList}>
                    {
                        auctionList.map(auction => {
                            return (
                                <AuctionItem key={auction._id} auction={auction} />
                            )
                        })
                    }
                </ul>
            ) : (<div className={classes.noAuctions}>There are no auctions available.</div>)
        )}
        
    </>)
}

export default AuctionsList
