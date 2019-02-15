import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";

var Movies ; 


class MoviePage extends Component {
    constructor(props){
        super(props);
        Movies = this.props.MOVIES
        this.state={
         
        }
    }
  render() {
    console.log(this.props)
      let MovieNames=this.props.match.params.moviename;
      let TrailerSource="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 offset-md-1" style={{ marginTop: "15px" }}>
            <h3>{Movies[MovieNames].Title}</h3>
            {console.log(Movies[MovieNames].discription)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-md-1">

            <div className="card card-inverse card-primary " style={{marginTop:'15px'}}>
            <div className="videoWrapper" style={{margin:'5%'}}>
              <iframe
                width="560"
                height="315"
                src={TrailerSource}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                
                />
            </div>
            <div style={{
 marginLeft:'3%' , marginRight: '3%'}}>
                <h6>{Movies[MovieNames].discription}</h6>
            </div>
              <div className="card-block" style={{padding:'20px'}}>
                <h5 className="card-title "> Comments </h5>

                <div className="form-group">
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

          </div>
        </div>
        <div className="row">
        
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser, 
    MOVIES : state.reducer.MOVIES

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
