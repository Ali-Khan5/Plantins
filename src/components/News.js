import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MovieNews from './NewsItem';
import {
  changeName,
  GoogleSignin,
  facebookSignin,
  GetAllNews
} from "../store/actions/action";
import Carousal from "./carousal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  componentDidMount() {
    this.props.GetAllNewsFromFirebase();
  }
  render() {
    //   console.log("from reducer",this.props.AllNews);
    return (
      <div className="container-fluid">
        {this.props.AllNews
          ? this.props.AllNews.map(x => {
              console.log(x);
              return (
                <div className="row" style={{marginTop:'10px'}}>
                  <div className="col-md-7 offset-md-1">
                  <MovieNews  heading={x.headline} frontImg={x.frontImg} description={x.description} date={x.articleCreated}
                  />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser,
    AllNews: state.reducer.News
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
    },
    GetAllNewsFromFirebase: () => {
      dispatch(GetAllNews());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home);
