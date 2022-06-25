import * as React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><img id="nav-button" src="https://www.citypng.com/public/uploads/small/11640344449dbepcc9iluha8qwimltaw9b4eqc23cx9tjo649gavqb7sjciumowkzacyewjlt8pvrwdhw5nr9ljng5oskbj556mlcx3vyxjmgdy.png"></img></Link>
      <Link to="/"><p id="nav-button">Home</p></Link>
      <a id="nav-button" href="#buy-now">Buy Now</a>
      <a id="nav-button" href="#about-us">About Us</a> |
      <a id="nav-button" href="#contact-us">Contact Us</a>
    </nav>
    
  )
}
