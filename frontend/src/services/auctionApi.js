import axios from 'axios'

/*
    titel på auctionen
    bud
    datum när det skapades och slutar
    beskrivning
    andvändare som skapade
*/

export const placeBid = async (id, bid) => {
    const url = "http://localhost:3000/auction/placeBid"

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id, bid})
    })
    const result =  await response.json()

    return result
}

export const deleteBid =  async (auctionId, bidId) => {
    const url = `http://localhost:3000/auction/${auctionId}/bid/${bidId}`

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })

    const result  = await response.json()
    return result
}
export const updateBid = async (auctionId, bidId, bid) => {
    const url = "http://localhost:3000/auction/updateBid"

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({auctionId, bidId, bid})
    })
    const result =  await response.json()

    return result
}