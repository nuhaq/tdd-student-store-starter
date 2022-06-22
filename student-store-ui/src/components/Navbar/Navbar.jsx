import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a id="nav-button" href="#home">Home</a> 
      <a id="nav-button" href="#buy-now">Buy Now</a>
      <a id="nav-button" href="#about-us">About Us</a> |
      <a id="nav-button" href="#contact-us">Contact Us</a>
    </nav>
  )
}
