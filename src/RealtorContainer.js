import React, { useState } from "react";

function RealtorContainer({listing}) {
    
    const[star, setStar] = useState(false)
    
    function like() {
        setStar(!star)
    }
 
    return (
        <div className="realtorCard">
            <img src={listing.realtorImage} className="image"/>
            <h1>{listing.realtor} REALTOR®</h1>
            <p>{listing.realtorLocation}</p>
            <p>Phone: {listing.phone}</p>
            <p>License: {listing.license}</p>
            <div>
                <h3><button className="color" onClick={like}>Star</button> {star ? "⭐️" : ""}</h3>
            </div>
        </div>
    )
}

export default RealtorContainer