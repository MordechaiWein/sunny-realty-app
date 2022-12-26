import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Listings from './Listings';
import Realtor from './Realtor';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(response => response.json())
    .then(data => setListings(data))
  },[])

  function addListing(newItem) {
    setListings([...listings, newItem])
  }
  
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/listings">
          <Listings listings={listings} addListing={addListing} />
        </Route>
        <Route exact path="/realtors">
          <Realtor listings={listings} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
