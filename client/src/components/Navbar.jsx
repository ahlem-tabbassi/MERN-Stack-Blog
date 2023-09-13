import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // State to control the visibility of the categories dropdown
  const [showCategories, setShowCategories] = useState(false);

  // Toggle the visibility of the categories dropdown
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <div className="dropdown link" onClick={toggleCategories}>
            <a className="dropbtn">Categories</a>
            {showCategories && (
              <div className="dropdown-content categories-dropdown">
                <Link to="/?cat=art">Art</Link>
                <Link to="/?cat=technology">Technology</Link>
                <Link to="/?cat=food">Food</Link>
              </div>
            )}
          </div>

          <Link className="link" to="/about">
            <h6>About Us</h6>
          </Link>
          <Link className="link" to="/contact">
            <h6>Contact Us</h6>
          </Link>

          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          
          {currentUser ? (
            <Link className="link" to={`/user/${currentUser.username}`}>
              <span>{currentUser.username}</span>
            </Link>
          ) : (
            <Link className="link" to="/login">
              <span>Login</span>
            </Link>
          )}
          {currentUser && <span onClick={logout}>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
