import "../../assets/styles/About.css";
import React from "react";
import backgroundImage from "../../assets/images/About.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/');
  };

  return (
    <div className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-container">
        <h1>🌟 About Us 🌟</h1>
        <p>🚮 We are committed to managing waste effectively and promoting recycling. Our advanced waste management system ensures a cleaner and greener planet. 🌱</p>
        <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
      </div>
    </div>
  );
};

export default About;
