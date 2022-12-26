import React, { useState } from "react";

function RealtorContainer({listing}) {
    
    const[star, setStar] = useState("")
    
    function like() {
        setStar("⭐️")
    }
    function dislike() {
        setStar("")
    }

    return (
        <div className="realtorCard">
            <img src={listing.realtorImage} className="image"/>
            <h1>{listing.realtor} REALTOR®</h1>
            <p>{listing.realtorLocation}</p>
            <p>Phone: {listing.phone}</p>
            <p>License: {listing.license}</p>
            <div>
                <p>Good Realtor? <button onClick={like}>yes</button> <button onClick={dislike}>no</button> {star}</p>
            </div>
        </div>
    )
}

export default RealtorContainer