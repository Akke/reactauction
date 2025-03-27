import React, { useState } from 'react'
import classes from './newauction.module.css'
import InputField from '../InputField/InputField'

const NewAuction = () => {

    return (<>
    
        {error ? (<div>{error}</div>) : ""}
        {success ? (<div>{success}</div>) : ""}

        <form method='POST' onSubmit={onFormSubmit}>
            <InputField type="text" label="Title" name="title" desc="..." placeholder="Auction title" />
            <InputField type="date" label="End off auction" name="endDate" desc="Enter the date when the auction ends" placeholder="End-date" />
            <InputField type="number" label="Asking price" name="price" desc="Add starting price of auction" placeholder="xxxx" />
            <InputField type="text" label="Description" name="description" desc="Enter description of auction item" placeholder="Auction description" />
            <input type='hidden' name='userId' value="1" />
        </form>
    </>
    )
}

export default NewAuction
