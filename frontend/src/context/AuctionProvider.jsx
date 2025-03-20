import { createContext, useState } from "react";

export const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
    const [auction, setAuction] = useState({});

    const fetchAuction = (id) => {
        const data = {
            title: "Testing",
            closingDate: "12 May",
            askingPrice: 50,
            bids: [{
                userId: 1,
                bid: 200,
                date: "12 May"
            }],
            description: "Testing"
        }

        setAuction(data);
    }

    return (
        <AuctionContext.Provider value={{ auction, fetchAuction }}>
            {children}
        </AuctionContext.Provider>
    );
}

export default AuctionProvider;