import React, { Component } from "react";
import { Link } from "react-router-dom";


const CarousalItem =(props)=>{
  

    return (
      
        <div className="row ">
          <div className="col-md-8" style={{backgroundColor:'#101613'} }>
          <img src={props.imgsrc} className="imgprop  w-100 img-fluid  " style={{margin:'0px',padding:'0px'}}/>
          </div>  
          <div className="col-md-4 description">
          <p >{props.details}</p>
          <br/>
          <Link to={"/detail/"+props.Moredetails}>
          <button className="btn btn-warning">
            {" "}
            Click here for more details
          </button>
          </Link>
          </div>
        </div>
    
    );
  
}

export default CarousalItem;


