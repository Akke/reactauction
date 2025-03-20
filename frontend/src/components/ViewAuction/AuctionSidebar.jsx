const AuctionSidebar = () => {
    return (
        <div className="sidebar">
            <div className="title">Toyota Toy Car</div>
            <div className="expiration-date">
                <div className="date">Ends May 2015:53</div>
                <div className="estimate">3 days 5 hours</div>
            </div>
            <div className="price">
                <div className="asking-price">Asking Price</div>
                <div className="bids">0 bids</div>
                <div className="amount">50 kr</div>
            </div>
            <div className="bid-button">
                Add Bid
            </div>
            <div className="favorite">
                Add to Favorites
            </div>
        </div>
    );
}

export default AuctionSidebar;