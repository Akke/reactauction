import { createContext, useState } from "react";
import { getAllAuctions, getAuctionById, placeBid, setAuctionClosed } from "../services/auctionApi";

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

        setAuctions(data.data);

        return data.data;
    }

    const addBid = async (id, bidData) => {
        const result = await placeBid(id, bidData);
        fetchAuction(id);

        return result;
    }

    const closeAuction = async (id) => {
        const result = await setAuctionClosed(id);
        if(result.success) {
            setAuction(prevState => ({...prevState, isOpen: false}))
        }
    }

    const isAuctionOpen = (id = null) => {
        let item = auction;

        if(id) {
            item = auctions.find(f => f._id == id);
        }
        
        return item && item.isOpen && new Date(item.closingDate).getTime() > new Date().getTime()
    }

    return (
        <AuctionContext.Provider value={{ auction, fetchAuction, getAuctions, addBid, closeAuction, isAuctionOpen }}>
            {children}
        </AuctionContext.Provider>
    );
}

export default AuctionProvider;