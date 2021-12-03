import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel"

const Home = () => {
  return (
    <div classNameName="hero">
      {/* <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" classNameName="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">Your Own Pharmacy</h5>
          <p className="card-text lead fs-2">
            MEDICINES ON YOUR FINGER TIPS
          </p>
            </div>
        </div>
      </div> */}
      <div>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className=" w-100 h-5 d-inline-block"
              src="/assets/ph4.jpg"
              alt="Slide One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="w-100 h-5 d-inline-block"
              src="/assets/ph1.jpg"
              alt="Slide Two"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className=" w-100 h-5 d-inline-block"
              src="/assets/ph2.jpg"
              alt="Slide Three"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Products />
    </div>
  );
};

export default Home;
