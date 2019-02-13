import React from "react";

const BigSliderLayout = props => {
  return (
    <div className="row">
      <div className="col-md-7">
        <img src={props.imgSrc} className="MainSliderImgSize w-100" />
      </div>
      <div className="col-md-5 " style={{ padding: "20px" }}>
        <h4>{props.Title}</h4>
        <p>Story: {props.Story}</p>
        <p>Date of Release: {props.ReleaseDate}</p>
        <p>Genre: {props.Genre}</p>
      </div>
    </div>
  );
};
export default BigSliderLayout;
