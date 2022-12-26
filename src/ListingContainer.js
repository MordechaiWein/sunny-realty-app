import React from "react";

function ListingContainer({listing}) {
  
  return (
    <div className="card">
      <img src={listing.image} alt="image" className="image"/>
      <h1>{listing.type === "HOUSE" ? "🏠" : "🏢"}{listing.type}</h1>
      <h2>${listing.price}</h2>
      <h3>{listing.bedrooms} | {listing.realtor}®</h3>
    </div>
  )
}

export default ListingContainer