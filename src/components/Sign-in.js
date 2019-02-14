import React, { Component } from "react";
import { connect } from "react-redux";
import Banana from "../media/promo_banan.png";
import Discuss from "../media/promo_chat.png";
import Social from "../media/promo_social.png";
import Banana5 from "../media/rating_5.png";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
const Signin = props => {
  let GoogleSignInfunc = () => {
    console.log("i am running from line 7");
    props.PerformGoogleSignIn();
  };
  let FBsignInFuc = () => {
    props.PerformFBSignIn();
  };
  return (
    <div className="container-fluid text-center" style={{ marginTop: "5%" }}>
      <div className="row">
        <div className=" col-md-6 offset-md-3">
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
                Sign in
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
                <div
                  className="col-md-8 offset-md-2"
                  style={{ padding: "30px" }}
                >
                  <div className="row">
                    <div className="col">
                      <img src={Banana} width="40px" height="30px" />
                      <span
                        style={{
                          color: "#ffff00",
                          fontSize: "18px",
                          fontWeight: "500px",
                          margin: "0px 5px"
                        }}
                      >
                        {" "}
                        Rate
                      </span>
                    </div>
                    <div className="col">
                      <img src={Banana} width="40px" height="30px" />
                      <span
                        style={{
                          color: "#ffff00",
                          fontSize: "18px",
                          fontWeight: "500px",
                          margin: "0px 5px"
                        }}
                      >
                        {" "}
                        Discuss
                      </span>
                    </div>
                    <div className="col">
                      <img src={Banana} width="40px" height="30px" />
                      <span
                        style={{
                          color: "#ffff00",
                          fontSize: "18px",
                          fontWeight: "500px",
                          margin: "0px 5px"
                        }}
                      >
                        {" "}
                        Share
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ padding: "20px" }}>
                <div className="col-md-6 col-sm-12">
                  <button
                    
                    style={{ padding: "10px", marginTop: "10px" ,  backgroundColor:'green'}}
                    onClick={() => {
                      props.PerformGoogleSignIn();
                    }}
                  >
                    Login using Google
                  </button>
                </div>
                <div className="col-md-6 col-sm-12">
                  <button
                    className="btn btn-primary btn-block  iconColorOutline "
                    style={{ padding: "10px", marginTop: "10px" }}
                    onClick={() => {
                      props.PerformFBSignIn();
                    }}
                  >
                   
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
function mapStateToProp(state) {
  return {
    //   userName: state.reducer.name,
    //   CurrentUser:state.reducer.currentUser
  };
}
function mapDispatchToProp(dispatch) {
  return {
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    }
  };
}
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Signin);
