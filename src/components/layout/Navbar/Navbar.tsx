import React from "react"
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <nav>
        <a href="#" data-activates="nav-mobile" className="left center hide-on-med-and-down">
          <FaBars className="text-success"/>
        </a>

        <a className="brand-logo" id="logo-container" href="/">FARMA</a>

        <ul id="button_links_user" className="right">
          Isabela Taques Vitek
        </ul>


      </nav>
    </>
  )
}

export default Navbar

