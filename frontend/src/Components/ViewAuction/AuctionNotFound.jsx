import "./AuctionNotFound.css";

const AuctionNotFound = () => {
    return (
        <div className="auction-not-found">
            <h1>Not Found</h1>
            <p>The requested action could not be found, either it doesn't exist or it existed but has since been removed.</p>
            <p>Please check the following:</p>
            <ul>
                <li>You spelled the URL correctly.</li>
                <li>The page or action hasn't been moved to a different URL.</li>
                <li>Your internet connection is stable.</li>
                <li>You have the necessary permissions to access this page.</li>
                <li>The server isn't experiencing issues or maintenance.</li>
                <li>The requested resource isn't restricted by authentication or authorization settings.</li>
                <li>Clear your browser cache and try again.</li>
            </ul>

            <p>If you belive this to be an error, please contact us.</p>
        </div>
    )
}

export default AuctionNotFound;