import './PlaceBid.css'
import {useParams} from 'react-router-dom'
import InputField from '../InputField/InputField'
import {placeBid, updateBid} from '../../services/auctionApi'
import { forwardRef, useContext, useState } from "react"
import { AuctionContext } from '../../context/AuctionProvider'


const PlaceBid = forwardRef((props, ref) => {
    const { addBid } = useContext(AuctionContext);

    const [error, setError] = useState("");

    const {id} = useParams()

    const handleSubmitBid = async (e, status) => {
        e.preventDefault();
        setError("");

        const bidData = e.target.bid.value
        let result;

        if(status == 'add'){
            result = await addBid(id, bidData);
        }
        if(status == 'edit'){
            result = await updateBid(auctionId, bidId, bidData) 
        }

        if(result.success) {
            const modalStyle = ref.current.style
            modalStyle.display = "none"
        } else {
            setError(result.message);
        }
    }

    const handleCloseClick = () => {
        const modalStyle = ref.current.style
        modalStyle.display = "none"
    }

    return(
        <div className="bid-wrapper" ref={ref}>
            <div className="overlay"></div>
            <div className="content">
                <div className="header-wrapper">
                <h1>Bid</h1>
                <img className="close-button" onClick={handleCloseClick} src="../close.svg"/>
                </div>
                {error ? (
                    <div className="error">{error}</div>
                ) : (<></>)}
                <form onSubmit={(e) => handleSubmitBid(e, 'add')}>
                    <InputField type="text" label="Bid amount" name="bid" desc="Place your bid here" placeholder="Bid" />
                    <button type="submit">Place bid</button>
                </form>
            </div>
        </div>
    )
})

export default PlaceBid;