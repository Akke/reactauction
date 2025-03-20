import { createContext, useContext } from "react";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
    return (
        <AuctionContext.Provider value={{}}>
            {children}
        </AuctionContext.Provider>
    );
}

export default AuctionProvider;