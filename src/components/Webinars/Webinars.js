import React, { useState, useEffect } from "react";
import Webinar from "../Webinar/Webinar";
import "./Webinars.css";
const Webinars = () => {
  const [webinars, setWebinars] = useState([]);
  useEffect(() => {
    fetch("./webinars.json")
      .then((res) => res.json())
      .then((data) => setWebinars(data));
  }, []);
  return (
    <div>
      <div className="webinars">
        <h1>
          WEBINAR<span className="text-primary"> PLANS</span>
        </h1>
        <p className="fs-4">
          Now enjoy the benefit of webinars of your choice at a lesser price.
          Plans starting from $50 only
        </p>
      </div>
      <h2 className="text-center fw-bold">
        CHOOSE THE BEST PLAN FOR YOUR WEBINARS
      </h2>
      <div className="container">
        <div className="row">
          {webinars.map((webinar) => (
            <Webinar webinar={webinar}></Webinar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinars;
