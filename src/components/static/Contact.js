import "../../assets/styles/Contact.css";
import React from "react";
import backgroundImage from "../../assets/images/Contact.jpg";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/');
  };

  return (
    <div className="contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-container">
        <h1>📞 Contact Us 📞</h1>
        <p>Feel free to reach out to us at:</p>
        <p>📧 Email: Traszzit@gmail.com</p>
        <p>📞 Phone: +91 9443737239</p>
        <p>🏢 Address: 18 Sri Krishna College Of Technology, Coimbatore</p>
        <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
      </div>
    </div>
  );
};

export default Contact;
