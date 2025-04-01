import React, { useState } from 'react'
import classes from './newauction.module.css'
import InputField from '../InputField/InputField'
import { createAuction } from '../../services/auctionApi'

const NewAuction = () => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const onFormSubmit = async (e) => {
        e.preventDefault()

        const title = e.target.title.value;
        const date = e.target.endDate.value;
        const price = e.target.price.value;
        const desc = e.target.description.value;
        const user = e.target.userId.value;

        const result = await createAuction(title,date,price,desc,user)

        if(result.success) {
            setSuccess(result.message)
            e.target.reset()
        } else {
            setError(result.message)
        }
    }

    return (<>
    
        {error ? (<div className={classes.error}>{error}</div>) : ""}
        {success ? (<div className={classes.success}>{success}</div>) : ""}

        <form method='POST' onSubmit={onFormSubmit}>
            <InputField type="text" label="Title" name="title" desc="" placeholder="Auction title" />
            <InputField type="date" label="End off auction" name="endDate" desc="Enter the date when the auction ends" placeholder="End-date" />
            <InputField type="number" label="Asking price" name="price" desc="Add starting price of auction" placeholder="xxxx" />
            <InputField type="text" label="Description" name="description" desc="Enter description of auction item" placeholder="Auction description" />
            <input type='hidden' name='userId' value="1" />

            <button type='submit'>Add auction</button>
        </form>
    </>
    )
}

export default NewAuction
