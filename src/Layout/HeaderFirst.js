import React, { Component } from "react";
import "./style.css";
// import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
// import SignInModel from "./../Components/SignInModel";
class HeaderFirst extends Component {
  render() {
    return (
        <div className="container-fluid">
      <div
        className="row navbar-expand-lg2 align-items-center "
        style={{ padding: "10px" }}
      >
        <div className="col">
          <Link className="navbar-brand" to="/">
            <img
              height={"48px"}
              width={"277px"}
              src="https://s3-eu-west-1.amazonaws.com/fp-img/gfx/fp_logo_slogan.png"
            />
          </Link>
        </div>
        <div className="col">
          <form className="  my-3 my-lg-0">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Movies,Actors..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn SearchButtonStyling" type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col">
          <Link className="nav-link" to="/login">
            <span
              style={{
                color: "#ffff00 ",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              {" "}
              Sign-in{" "}
            </span>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}
export default HeaderFirst;
