import "../../assets/styles/Footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">Trash-it</span>
          </div>
          <div className="media-icons">
            <a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="www/instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="=www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
            <a href="www.youtube.com"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li><a href="#">Residental Waste</a></li>
            <li><a href="#">Commercial Waste</a></li>
            <li><a href="#">E-Waste</a></li>
            <li><a href="#">Industrial Waste</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Account</li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Preferences</a></li>
            <li><a href="#">Purchase</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Courses</li>
            <li><a href="#">Recycling Plastics</a></li>
            <li><a href="#">Environmentak Science</a></li>
            <li><a href="#">Organic Waste Treatment</a></li>
            <li><a href="#">Sustainable Development</a></li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2024 <a href="#">Trash-it.</a> All rights reserved</span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
