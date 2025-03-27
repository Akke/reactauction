import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import InputField from '../InputField/InputField'
import {placeBid} from '../../services/auctionApi'

const BidWrapper = styled.div``
const BidHeader = styled.h1``
const BidSubmitButton = styled.button``

const PlaceBid = () => {
    const {id} = useParams()
    const handleSubmitBid = async (e) => {
        e.preventDefault()

        const bidData = e.target.bid.value
        const result = await placeBid(id, bidData)

        console.log(result)
    }

    return(
        <BidWrapper>
            <BidHeader>Bid</BidHeader>
            <form onSubmit={handleSubmitBid}>
                <InputField type="text" label="Bid amount" name="bid" desc="Place your bid here" placeholder="Bid" />
                <BidSubmitButton type="submit">Place bid</BidSubmitButton>
            </form>
        </BidWrapper>
    )
}

export default PlaceBid;