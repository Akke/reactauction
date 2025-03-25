/*
    titel på auctionen
    bud
    datum när det skapades och slutar
    beskrivning
    andvändare som skapade
*/

const getAuction = async () => {
    try{}
    catch{}
}

export const getAuctionById = async (id) => {
    const url = `http://localhost:3000/auction/${id}`

    const response = await fetch(url);

    const result = await response.json();

    return result;
}