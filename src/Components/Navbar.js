import React from "react";
import '.././style.css';


export default function Navbar() {
  return (
    <header className="header">
    <span className="logo">LOGO</span>
    <form action className="search">
      <i className="search_button fa fa-search " />
      <input type="text" placeholder="Search Movies" className="search_input" />
    </form>
  </header>
  )
}
