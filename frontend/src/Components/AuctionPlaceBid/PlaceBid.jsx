import styled from 'styled-components'
import './PlaceBid.css'
import {useParams} from 'react-router-dom'
import InputField from '../InputField/InputField'
import {placeBid} from '../../services/auctionApi'
import { forwardRef } from "react"


const PlaceBid = forwardRef((props, ref) => {
    const {id} = useParams()

    const handleSubmitBid = async (e) => {
        e.preventDefault()

        const bidData = e.target.bid.value
        const result = await placeBid(id, bidData)

        const modalStyle = ref.current.style
        modalStyle.display = "none"
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
                <form onSubmit={handleSubmitBid}>
                    <InputField type="text" label="Bid amount" name="bid" desc="Place your bid here" placeholder="Bid" />
                    <button type="submit">Place bid</button>
                </form>
            </div>
        </div>
    )
})

export default PlaceBid;