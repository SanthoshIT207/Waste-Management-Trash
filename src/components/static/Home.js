import "../../assets/styles/Home.css";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "../common/Footer";
import Footer1 from "../common/Footer1";
import HowitWorks from "./HowItWorks";
import React from "react";
import SubmitWaste from "../user/SubmitWaste";
import homeImage1 from "../../assets/images/home.jpeg";
import homeImage2 from "../../assets/images/new1.jpeg";
import homeImage3 from "../../assets/images/new2.jpg";
import homeImage4 from "../../assets/images/new3.jpg";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

// src/components/Home.js

const Home = ({ isLoggedIn }) => {
  return (
    <div className="home">
      <div className="hero-container">
        <Carousel interval={2100} controls={true} indicators={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage4}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
    
      </div>
      <div className='des'>
        <p>
          Here at our platform, you can submit your waste and earn coins. These coins can be converted to money or used to buy products from our shop. We ensure that your waste is collected and sent to recycling plants, benefiting the environment and helping us all.
        </p>
        {!isLoggedIn && (
          <div className="home-buttons">
            <Link to="/login" className="home-button">🔒 LOGIN</Link>
            <Link to="/register" className="home-button">📝 REGISTER</Link>
            <Link to="/findjob" className="find-job-button">🔍 SEARCH JOB</Link> {/* Updated Find Job button */}
          </div>
        )}
      </div>
      {!isLoggedIn && <HowitWorks />}
      <SubmitWaste />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
