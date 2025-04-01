import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './auctionitem.module.css'
import { AuthContext } from '../../context/AuthProvider'

const AuctionItem = ({ auction }) => {
    const { idToUsername } = useContext(AuthContext);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchUsername = async () => {
            const result = await idToUsername(auction.user);
            setUsername(result);
        }

        fetchUsername();
    }, []);

    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

    return (
        <li className={classes.item}>
            <div className={classes.itemData}>
                <h2><NavLink to={`/view/${auction._id}`} className={classes.auctionTitle}>{auction.title}</NavLink></h2>
            </div>
            <div className={classes.itemData}>
                <div>
                    <span><b>Price:</b> {auction.askingPrice} kr</span>
                    <span><b>Seller:</b> {username}</span>
                </div>
                <div>
                    <span><b>Start:</b> {formatDate(auction.createdAt)}</span>
                    <span><b>End:</b> {formatDate(auction.closingDate)}</span>
                </div>
            </div>
        </li>
    )
}

export default AuctionItem