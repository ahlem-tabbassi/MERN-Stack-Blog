import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
function Footer() {
  return (
    <footer className="blog-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} The Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

