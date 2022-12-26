import React, { useState } from "react";

function NewListForm({addListing}) {
  
  const [data, setData] = useState({
    image:"",
    type:"",
    price:"",
    bedrooms:"",
    realtor:"",
    realtorLocation:"",
    phone:"",
    license:"",
    realtorImage:"",
  })

  function handleChange(event) {
    setData({...data,[event.target.name]: event.target.value})
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then (data => addListing(data))
    setData({
      image:"",
      type:"",
      price:"",
      bedrooms:"",
      realtor:"",
      realtorLocation:"",
      phone:"",
      license:"",
      realtorImage:""
    })
  }
  
  return (
    <div className="form">
      <h1>Please fill out the required information then click submit to post your listing!</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <h2>New Listing:</h2>
        <input onChange={handleChange} className="form-input" type="text" name="image" value={data.image} placeholder="listing image" />
        <input onChange={handleChange} className="form-input" type="text" name="type"  value={data.type} placeholder="listing type" />
        <input onChange={handleChange} className="form-input" type="text" name="price" value={data.price} placeholder="listing price" />
        <input onChange={handleChange} className="form-input" type="text" name="bedrooms" value={data.bedrooms} placeholder="number of bedrooms" />
        <h2>Realtor details:</h2>
        <input onChange={handleChange} className="form-input" type="text" name="realtor" value={data.realtor} placeholder="Realtor name" />
        <input onChange={handleChange} className="form-input" type="text" name="realtorLocation" value={data.realtorLocation} placeholder="realtor Location" />
        <input onChange={handleChange} className="form-input" type="text" name="phone" value={data.phone} placeholder="phone" />
        <input onChange={handleChange} className="form-input" type="text" name="license" value={data.license} placeholder="license" />
        <input onChange={handleChange} className="form-input" type="text" name="realtorImage" value={data.realtorImage} placeholder="realtor image" />
        <input className="form-input-submit" value="submit new listing" type="submit"/>
      </form>
    </div>
  )
}

export default NewListForm

