import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
import Carousal from "./carousal";
class Home extends Component {
  GoogleSignInfunc = () => {
    console.log("i am running from line 7");
    this.props.PerformGoogleSignIn();
  };
  FBsignInFuc = () => {
    this.props.PerformFBSignIn();
  };
  render() {
    return (
      <div className="containerlfluid">
        <div className="row">
          <div className="col-md-12">
            <Carousal />
          </div>
       
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser
  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
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
)(Home);
