import React, { Component } from "react";

import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";


var Movies={
    Antman:{
        TrailerUrl:'pWdKf3MneyI',
        Title:'Ant-Man'
    },
    infinityWar:{
        TrailerUrl:'6ZfuNTqbHE8'
        ,
        Title:"Marvel's Infinity War"
    },
    BohemainRhapsody:{
        TrailerUrl:'mP0VHJYFOAU',
        Title:'Bohemian Rhapsody'
    },
    ReadyPlayerOne:{
        TrailerUrl:'cSp1dM2Vj48',
        Title:'Ready Player One'
    },
    MissonImpossibleFallout:{
        TrailerUrl:'XiHiW4N7-bo',
        Title:'Misson Impossible: Fallout'
    },
    justiceLeague:{
      TrailerUrl:'r9-DM9uBtVI',
      title:'Justice League'
    },
    whiteHouseDown:{
      TrailerUrl:'WfaTlmYvTA8',
      Title:'White House Down'
    },
    wonderWomen:{
      TrailerUrl:'1Q8fG0TtVAY',
      Title:'Wonder Women'
    },
    oceanEight:{
      TrailerUrl:'MFWF9dU5Zc0',
      Title:'Ocean"s Eight'
    },
    HacksawRidge:{
      TrailerUrl:'s2-1hz1juBI',
      Title:' Hacksaw Ridge'
    },
    interview:{
      TrailerUrl:'frsvWVEHowg',
      Title:'The Interview'
    },
    johnWick:{
      TrailerUrl:'2AUmvWm5ZDQ',
      Title:'John Wick'
    }
}

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state={
         
        }
    }
  render() {
      let MovieNames=this.props.match.params.moviename;
      let TrailerSource="https://www.youtube.com/embed/"+Movies[MovieNames].TrailerUrl;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 offset-md-1" style={{ marginTop: "15px" }}>
            <h3>{Movies[MovieNames].Title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 offset-md-1">
            <div className="videoWrapper" style={{marginTop:'10px'}}>
              <iframe
                width="560"
                height="315"
                src={TrailerSource}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="card card-inverse card-primary " style={{marginTop:'15px'}}>
              <div className="card-block" style={{padding:'20px'}}>
                <h5 className="card-title "> Comments </h5>

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
