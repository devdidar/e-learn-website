import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="row mt-5 about-us align-items-center">
      <div className="col-6 ">
        <h1 className="fs-2 fw-bold">ABOUT US</h1>
        <p>
          we are the first platform that brings education system. We are the
          best platform where you can learn investment, stock market, etc.
        </p>
        <button className="button">LEARN MORE</button>
      </div>
      <div className="col-6">
        <img
          src="https://we2web.com/wp-content/uploads/2021/06/about-us.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
