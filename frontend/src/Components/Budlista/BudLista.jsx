import { useContext } from 'react';
import { AuctionContext } from '../../context/AuctionProvider';
import { deleteBid } from '../../services/auctionApi';
import { useEffect } from 'react';
import {HighestBid} from './HighstBid'

const BudLista = () => {
    const { auction, fetchAuction } = useContext(AuctionContext);
    const auctionId = auction._id
    const user = JSON.parse(localStorage.getItem('user'))
    let bids = []
    if(user){
        bids = auction.bids.filter((bid) => (bid.userId == user._id))
    }
    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

        const handleDeleteBtn = async (bid) =>{
            const bidId = bid._id
            const result = await deleteBid(auctionId, bidId)
            if(result.success) {
                fetchAuction(auctionId)
            }
        }

    return (
        <div>
            <HighestBid bids={auction.bids}/>
            {(!user && bids.length) ? (<>
            <b>Your bids:</b>
            <ul> 
                {bids.map((bid, index) => (
                    <li key={index}>
                        <b>{formatDate(bid.date)}</b> • {bid.bid}kr
                        <button onClick={(e)=>handleDeleteBtn(bid)}>delete</button>
                    </li>
                ))}
            </ul>
            </>) : <></>}
            
        </div>
    );
};

export default BudLista;

