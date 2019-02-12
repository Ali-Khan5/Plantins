import React, { Component } from "react";
import LogoAnimation from "../media/FP_anim.gif";
import { Fade } from "react-slideshow-image";
import CarousalItem from "./carousalItems";
const fadeImages = [LogoAnimation, "images/slide_6.jpg", LogoAnimation];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
};

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container" style={{ width: "100%" }}>
          <img src={fadeImages[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img
            src={
              "https://i1.wp.com/stlhattrick.com/wp-content/uploads/2018/05/landscape-1522924460-avengers-infinity-war-poster.jpg"
            }
          />
        </div>
        <p className="description">
          Avengers: Infinity War is a 2018 American superhero film based on the
          Marvel Comics superhero team the Avengers, produced by Marvel Studios
          and distributed by Walt Disney Studios Motion Pictures. It is the
          sequel to 2012's The Avengers and 2015's Avengers: Age of Ultron, and
          the nineteenth film in the Marvel Cinematic Universe (MCU).
          <button className="btn btn-warning">
            {" "}
            Click here for more details
          </button>
        </p>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img
            src={
              "https://occhimagazine.com/occhi/wp-content/uploads/2018/07/AMTWPoster-1024x576.jpg"
            }
          />
        </div>
        <p className="description">
          Ant-Man and the Wasp is a 2018 American superhero film based on the
          Marvel Comics characters Scott Lang / Ant-Man and Hope van Dyne /
          Wasp. Produced by Marvel Studios and distributed by Walt Disney
          Studios Motion Pictures, it is the sequel to 2015's Ant-Man, and the
          twentieth film in the Marvel Cinematic Universe (MCU)
          <br />
          <button className="btn btn-warning">
            {" "}
            Click here for more details
          </button>
        </p>
      </div>
    </Fade>
  );
};
const BootCarousal = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="imgprop  d-block w-100"
            src={LogoAnimation}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <CarousalItem
            imgsrc="https://i1.wp.com/stlhattrick.com/wp-content/uploads/2018/05/landscape-1522924460-avengers-infinity-war-poster.jpg"
            details="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studiosand distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers and 2015's Avengers: Age of Ultron, andthe nineteenth film in the Marvel Cinematic Universe (MCU)."
          />
        </div>
        <div className="carousel-item">
        <CarousalItem
            imgsrc= "https://occhimagazine.com/occhi/wp-content/uploads/2018/07/AMTWPoster-1024x576.jpg"
            details=" Ant-Man and the Wasp is a 2018 American superhero film based on the
            Marvel Comics characters Scott Lang / Ant-Man and Hope van Dyne /
            Wasp. Produced by Marvel Studios and distributed by Walt Disney
            Studios Motion Pictures, it is the sequel to 2015's Ant-Man, and the
            twentieth film in the Marvel Cinematic Universe (MCU)"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default BootCarousal;
