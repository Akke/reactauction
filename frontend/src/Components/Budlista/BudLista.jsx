<<<<<<< HEAD
import React, { useContext, useState } from 'react';

const BudLista = () => {
    const { auction } = useContext(AudioContext);

    const bids = auction.bids

=======
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

>>>>>>> fe6100c2a13b7d2966e7a1414b4d3bc5416296ad
    return (
        <div>
            <ul> 
                {bids.map((bid, index) => (
                    <li key={index}>
<<<<<<< HEAD
                        {`Bud: ${bid.amount} kr, Datum: ${bid.date}`}
=======
                        <b>{formatDate(bid.date)}</b> • {bid.bid}kr
>>>>>>> fe6100c2a13b7d2966e7a1414b4d3bc5416296ad
                    </li>
                   
                ))}
            </ul>
        </div>
    );
};

export default BudLista;

<<<<<<< HEAD

// const BudLista = () =>{

//     return(
// <>
//         <ul>

//         <li>Datum</li>
//         <li>Pris</li>
//         <li></li>



//         </ul>

// </>
//     )
// }
// export default BudLista
=======
>>>>>>> fe6100c2a13b7d2966e7a1414b4d3bc5416296ad
