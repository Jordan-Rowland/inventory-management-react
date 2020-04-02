import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <div className="logo">
        Shoppelifyli
      </div>
      <div className="header-links-container">
        <Link className="header-links" to="/shop">
          Shop
      </Link>
        <Link className="header-links" to="/cart">
          Cart
      </Link>
      </div>
    </div>
  );
}

export default Header;