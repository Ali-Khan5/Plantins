import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviesList from "./MovieList";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
import Carousal from "./carousal";
class Home extends Component {
 
  render() {
    return (
      <div className="container-fluid">
        
            <Carousal />
         
        <br />
        <br />
        <div className="row">
          <h2> Featured Movies </h2>
        </div>

        <MoviesList />
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
