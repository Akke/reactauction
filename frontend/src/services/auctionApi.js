export const placeBid = async (id, bid) => {
    const url = "http://localhost:3000/auction/placeBid"

    console.log(id)
    const response = await fetch(url, {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        },
        body: JSON.stringify({id, bid})
    })
    const result =  await response.json()

    return result
}

export const deleteBid =  async (auctionId, bidId) => {
    const url = `http://localhost:3000/auction/auctionId/${auctionId}/bid/${bidId}`

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`

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
export const getAuctionById = async (id) => {
    const url = `http://localhost:3000/auction/${id}`

    const response = await fetch(url);

    const result = await response.json();

    return result;
}

export const createAuction = async (title, closingDate, askingPrice, description, user) => {
    const url = "http://localhost:3000/auction"

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        },
        body: JSON.stringify({title, closingDate, askingPrice, description, user})
    })

    return await response.json()
}
export const getAllAuctions = async () => {
    const url = "http://localhost:3000/auction"

    const auctions = await fetch(url).then(response => response.json())

    return auctions
}
export const closeAuction = async (id) => {
    const url = "http://localhost:3000/auction/" + id

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        },
        body: JSON.stringify({
            isOpen: false
        })
    })
    const result =  await response.json()

    return result
}

export const deleteAuction = async (id) => {
    const url = "http://localhost:3000/auction/" + id
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        }
    })
    const result = await response.json()
    return result
}