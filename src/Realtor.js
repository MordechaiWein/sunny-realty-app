import React from "react";
import RealtorContainer from "./RealtorContainer";

function Realtor({ listings }) {
    
    const realtorList = listings.map(listing => <RealtorContainer key={listing.id} listing={listing} />)
    
    return (
        <div>
            <br/>
            <hr/>
            {realtorList}
        </div>
    )
}

export default Realtor

