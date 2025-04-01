import { createContext, useState } from "react";
import { getAllAuctions, getAuctionById, placeBid } from "../services/auctionApi";

export const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
    const [auction, setAuction] = useState({});
    const [auctions, setAuctions] = useState([]);

    const fetchAuction = async (id) => {
        const data = await getAuctionById(id);

        setAuction(data.data);

        return data.data;
    }

    const getAuctions = async () => {
        const data = await getAllAuctions();

        setAuction(data.data);

        return data.data;
    }

    const addBid = async (id, bidData) => {
        const result = await placeBid(id, bidData);
        fetchAuction(id);

        return result;
    }

    return (
        <AuctionContext.Provider value={{ auction, fetchAuction, getAuctions, addBid }}>
            {children}
        </AuctionContext.Provider>
    );
}

export default AuctionProvider;