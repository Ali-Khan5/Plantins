import React from "react";
// import { Grid, Row, Col } from "react-bootstrap";
import FBicon from "./../media/fbsvg.svg";
import Twittericon from "./../media/twittersvg.svg";
import Instaicon from "./../media/insta.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="footerShadow"
      style={{ backgroundColor: "#29302d", padding: "10px", color: "#FFFFFF" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link  footerNavLink" href="#">
                  Showtimes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link footerNavLink" href="#">
                  News 
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link footerNavLink " href="#">
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link footerNavLink" href="#">
                  <img src={FBicon} style={{width:'40px',height:'40px'}} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link footerNavLink" href="#">
                <img src={Twittericon} style={{width:'40px',height:'40px'}} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link footerNavLink" href="#">
                <img src={Instaicon} style={{width:'40px',height:'40px'}} />
                </a>
              </li>
            </ul>
          </div>
          {/* Copyright © Fried Plantains 2018. All rights reserved. */}
          <div className="col-md-12">
            <ul className="nav justify-content-center">
            <li className="nav-item">
            Copyright © Fried Plantains 2018. All rights reserved.
            </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
