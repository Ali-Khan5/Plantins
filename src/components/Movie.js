import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
class MoviePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 offset-md-1" style={{ marginTop: "15px" }}>
            <h3>Movie title</h3>
          </div>
        </div>
        <div className="row">
        <div className="col-md-7 offset-md-1">
        <div className="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/go6GEIrcvFY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
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
)(MoviePage);
