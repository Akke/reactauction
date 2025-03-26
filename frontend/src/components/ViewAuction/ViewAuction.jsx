import { useParams } from "react-router-dom";
import AuctionContent from "./AuctionContent";
import AuctionSidebar from "./AuctionSidebar";
import "./ViewAuction.css";
import { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../../context/AuctionProvider";
import AuctionNotFound from "./AuctionNotFound";

const ViewAuction = () => {
    const { id } = useParams();
    const { fetchAuction } = useContext(AuctionContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getAuction = async () => {
            setLoading(true);
            setError(false);

            try {
                const result = await fetchAuction(id);
                if(!result) {
                    console.log(result)
                    setError(true);
                }
            } catch(e) {
                setError(true);
            }

            setLoading(false);
        }

        getAuction();
    }, [id]);

    if(loading) {
        return (<>Loading...</>);
    }

    if(error) {
        return (<AuctionNotFound />);
    }

    return (
        <div className="ViewAuction">
            <AuctionContent />
            <AuctionSidebar />
        </div>     
    );
}

export default ViewAuction;