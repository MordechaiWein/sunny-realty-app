import React from "react";
import ListingContainer from "./ListingContainer";
import NewListForm from "./NewListForm";

function Listings({listings, addListing}) {
    
    const listingsList = listings.map(listing => <ListingContainer key={listing.id} listing={listing} />)
    
    return (
        <div>
            <br/>
            <hr/>
            <br/>
            <br/>
            <NewListForm addListing={addListing} />
            {listingsList}
        </div>
    )
}

export default Listings