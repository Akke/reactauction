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

    const getDateDifference = (dateTimeNow, dateTimeThen) => {
        const timeNow = new Date(dateTimeNow);
        const timeThen = new Date(dateTimeThen);
        const diff = timeThen - timeNow;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const result = `${days}d ${hours}h ${minutes}m`;

        return result;
    }

    return (
        <li className={classes.item}>
            <div className={classes.itemData}>
                {username} • <b><NavLink to={`/view/${auction._id}`} className={classes.auctionTitle}>{auction.title}</NavLink></b> for {auction.askingPrice}kr — ends in  {getDateDifference(auction.createdAt, auction.closingDate)}
            </div>
        </li>
    )
}

export default AuctionItem