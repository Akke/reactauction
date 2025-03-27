import { useContext } from 'react';
import { AuctionContext } from '../../context/AuctionProvider';

const BudLista = () => {
    const { auction } = useContext(AuctionContext);

    const bids = auction.bids

    const formatDate = (dateTime) => {
        const formatted = new Date(dateTime);
        const result = `${formatted.getFullYear()}-${formatted.getMonth()}-${formatted.getDate()} ${formatted.getHours()}:${formatted.getMinutes()}`;
        return result;
    }

    return (
        <div>
            <ul> 
                {bids.map((bid, index) => (
                    <li key={index}>
                        <b>{formatDate(bid.date)}</b> • {bid.bid}kr
                    </li>
                   
                ))}
            </ul>
        </div>
    );
};

export default BudLista;

