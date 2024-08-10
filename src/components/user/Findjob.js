import "../../assets/styles/Findjob.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const FindJob = () => {
  return (
    <Navbar bg="white" expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="brand-name">
        <img
          src="../../assets/images/logo.png"
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <span className="ml-2">Milao</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link href="#find-job">Find Job</Nav.Link>
          <Nav.Link href="#company-review">Company Review</Nav.Link>
          <Nav.Link href="#find-salaries">Find Salaries</Nav.Link>
          <Nav.Link href="#profile" className="profile-link">
            <img
              src="../../assets/imageslogo.png"
              alt="Profile"
              width="30"
              height="30"
              className="rounded-circle profile-photo"
            />
            <span className="ml-2">Suhayel Nasim</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FindJob;
