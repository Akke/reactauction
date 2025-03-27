import React, { useContext, useState } from 'react';

const BudLista = () => {
    const { auction } = useContext(AudioContext);

    const bids = auction.bids

    return (
        <div>
            <ul> 
                {bids.map((bid, index) => (
                    <li key={index}>
                        {`Bud: ${bid.amount} kr, Datum: ${bid.date}`}
                    </li>
                   
                ))}
            </ul>
        </div>
    );
};

export default BudLista;


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