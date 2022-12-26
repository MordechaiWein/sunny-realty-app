import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 6px 6px",
  background: "#0FBED8",
  textDecoration: "none",
  color: "white",
}

function Navigation() {
    
    return (
        <div>
            <NavLink to="/" style={linkStyles} activeStyle={{background: "#0D98BA"}}> Home </NavLink>
            <NavLink to="/listings" style={linkStyles} activeStyle={{background: "#0D98BA"}}> Listings </NavLink>
            <NavLink to="/realtors" style={linkStyles} activeStyle={{background: "#0D98BA"}}> realtors </NavLink>
        </div>
    )
}

export default Navigation