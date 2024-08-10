import React from "react";
import successImage from "../../assets/images/success.jpg";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/');
  };
  return (
      <div className="success-content">
        <h2 className="success-title">Success!</h2>
        <p className="success-message">Your waste is going to be collected in a few hours.</p>
        <img src={successImage} alt="Success" className="success-image" />
        <button className="continue-button" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    
  );
};
export default SuccessPage;
