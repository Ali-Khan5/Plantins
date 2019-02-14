
import React from "react";
import { Link } from "react-router-dom";
const MovieNewsItem = props => {
  return (
    <div className="card">
    <div className="row">
     
      <div className="col-md-4">
        <img src={props.frontImg} style={{ padding: "20px" }} className="NewsPicture w-100" />
      </div>
      <div className="col-md-8 " style={{ padding: "20px" }}>
       <h4>{props.heading}</h4>
       <p>{props.date}</p>
       <p> {props.description.replace(/^(.{200}[^\s]*).*/, "$1")}</p> 
     <Link to={"/fullnews/"+props.heading}> <button className="btn btn-warning"> READ MORE </button></Link>  
      </div>
    </div>
    </div>
  );
};
export default MovieNewsItem;
