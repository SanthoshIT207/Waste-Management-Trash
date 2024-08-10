import "../../assets/styles/Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn, cartItemCount }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/addaddress']; // Add routes where navbar should be hidden

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if the current route is in hideNavbarRoutes
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (shouldHideNavbar) return null; // Do not render navbar

  return (
    <nav className="navbar">
      <div className="title">TRASH-it</div>
      <ul className="nav-items">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><a href="#what-we-do" onClick={(e) => handleScroll(e, 'what-we-do')}>How It Works</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </>
        ) : (
          <>
            <li className="dropdown">
              <Link to="/my-coins">Coins</Link>
              <div className="dropdown-content">
                <Link to="/mycoins">My Coins</Link>
                <Link to="/convertcoins">Convert Coins</Link>
              </div>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li className="dropdown">
              <Link to="/mysubmission">My Submission</Link>
              <div className="dropdown-content">
                <Link to="/currentsubmission">Current Submission</Link>
                <Link to="/pastsubmission">Past Submission</Link>
              </div>
            </li>
            <li className="dropdown">
              <a href="#submit-waste-section" onClick={(e) => handleScroll(e, 'submit-waste-section')}>Submit Waste</a>
              <div className="dropdown-content">
                <Link to="/submitwaste/resident">Resident</Link>
                <Link to="/submitwaste/commercial">Commercial</Link>
                <Link to="/submitwaste/ewaste">E-Waste</Link>
              </div>
            </li>
            <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
            <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> {cartItemCount}</Link></li> {/* Cart link */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;