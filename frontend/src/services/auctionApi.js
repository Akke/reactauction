import axios from 'axios'

/*
    titel på auctionen
    bud
    datum när det skapades och slutar
    beskrivning
    andvändare som skapade
*/

export const placeBid = async (bid) => {
    const url = "http://localhost:3000/auction/placeBid"

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({bid})
    })
    const result =  await response.json()

    return result
}
