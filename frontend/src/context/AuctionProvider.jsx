import { createContext, useState } from "react";
import { getAuctionById } from "../services/auctionApi";

export const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
    const [auction, setAuction] = useState({});

    const fetchAuction = async (id) => {
        const data = await getAuctionById(id);

        setAuction(data.data);

        return data.data;
    }

    return (
        <AuctionContext.Provider value={{ auction, fetchAuction }}>
            {children}
        </AuctionContext.Provider>
    );
}

export default AuctionProvider;