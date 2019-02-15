import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviesList from "./MovieList";
import Gallery from "./AliceSlider";
import {
  changeName,
  GoogleSignin,
  facebookSignin , MOVIESData
} from "../store/actions/action";
import Carousal from "./carousal";
class Home extends Component {

  constructor(props) {

    super(props);
    this.props.MOVIESData()

  }
  render() {
    return (
      <div className="container-fluid">
        <Carousal />

        <br />
        <br />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              Featured Movies{" "}
            </h2>
          </div>
        </div>

        <MoviesList />
        <br />
        <div className="row">
          <div className="col ">
            <h2
              style={{
                borderLeft: "8px solid #FF8D1B",
                padding: "12px",
                marginLeft: "10px"
              }}
            >
              {" "}
              MOST POPULAR MOVIES
            </h2>
          </div>
        </div>

        <Gallery />
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
    MOVIESData: () => {
      dispatch(MOVIESData());
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
