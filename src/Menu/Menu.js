import React from "react";
import {
    Link
  } from "react-router-dom"
function Menu() {
    return (
    <nav className="menu" role="navigation" aria-label="Main menu" itemScope itemType="https://schema.org/SiteNavigationElement">
        <ul>
            <li><Link itemProp="url" to="/">Homepage</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
        </ul>
    </nav>
    );
  }
  
  export default Menu;
  