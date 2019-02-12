import React, { Component } from "react";
import { connect } from "react-redux";
// import {signinAction}  from "../store/actions/action"promo_chat
import Banana from "../media/promo_banan.png";
import Discuss from "../media/promo_chat.png";
import Social from "../media/promo_social.png";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
const AboutUS = () => {
  return (
    <div className="container-fluid text-center" style={{ marginTop: "25px" }}>
      <div className="row">
        <div className=" col-md-8 offset-md-2">
          <div
            className="row align-items-center"
            style={{
              backgroundColor: "#101613",
              borderRadius: "5px 5px 0px 0px",
              padding: "20px"
            }}
          >
            <div className="col col-xs-2">
              <h3
                style={{
                  color: "#ffff00"
                }}
              >
                Welcome to Fried Plantains!
              </h3>
            </div>
          </div>
          {/* second row of the card  */}
          <div
            className="row"
            style={{
              backgroundColor: "#29302d",
              borderRadius: "0px 0px 5px 5px"
            }}
          >
            {/* second row whole column  */}
            <div className="col">
              {/* first row for the logos within the second row  */}
              <div className="row">
                {/* contains the col for logos */}
                <div className="text-white" style={{ padding: "30px" }}>
                  <div className="row">
                    <p className="text-left">
                      Fried Plantains is your go-to for all things Hollywood and
                      Nollywood! Since 2017, we have strived to be the go-to
                      movie-lover's playground for all your entertainment
                      desires.{" "}
                    </p>
                    <p className="text-left">
                      From fresh articles and actors’ biographies to cinema
                      showtimes and exclusive trailers, Fried Plantains brings
                      Hollywood and Nollywood together like never before. Our
                      unique movie database allows for users to rate movies,
                      share their opinions and connect with fellow movie-lovers!
                      Input from visitors and film professionals are always
                      welcome to ensure top quality content.
                    </p>
                    <p className="text-left">
                      Currently, Fried Plantains provides showtimes, VOD
                      accessibility and custom content geared towards a
                      primarily Nigerian audience. In the future, we strive to
                      diversify content to reach audiences in Burundi, Ghana,
                      Kenya, Rwanda, Tanzania, Uganda.
                    </p>
                    <p className="text-left">
                    If you would like to write for Fried Plantains, please contact: <a href="mailto:hello@friedplantains.com" style={{color:'#ffff00'}}> hello@friedplantains.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-4 offset-md-2">
          <p>
            If you are a movie-lover from any of these countries and would like
            to be notified when we have reached your country, please leave your
            contact info here:
          </p>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter FullName"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type ypur message here..."
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AboutUS;
