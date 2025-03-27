import { useContext } from 'react';
import { AuctionContext } from '../../context/AuctionProvider';
import { deleteBid } from '../../services/auctionApi';

const BudLista = () => {
    const { auction } = useContext(AuctionContext);
    const auctionId = auction._id
    const bids = auction.bids   
    const user = JSON.parse(localStorage.getItem('user'))
    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

        const handleDeleteBtn = async (bid) =>{
            if(user._id !== bid.userId) console.log('You can only delete the bids you placed')
            const bidId = bid._id
        console.log(auctionId, bidId)
            const result = await deleteBid(auctionId, bidId)
            console.log(result)
        }

    return (
        <div>
            <ul> 
                {bids.map((bid, index) => (
                    <li key={index}>
                        <b>{formatDate(bid.date)}</b> • {bid.bid}kr
                        <button onClick={(e)=>handleDeleteBtn(bid)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BudLista;

