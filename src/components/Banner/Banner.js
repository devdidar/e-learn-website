import React from "react";
import { useHistory } from "react-router";
import "./Banner.css";
const Banner = () => {
  const history= useHistory()
  const goToCourse  =()=>{
history.push('./courses')
  }
  return (
    <div className="row banner">
      <div className="col-6 ms-5 p-5">
        <h1>Learn with real world requirements</h1>
        <p>
          This is the best platform for start your journey as a learner.We
          provide most unique course in the world
        </p>
        <button onClick={goToCourse} className="btn btn-primary">Explore Courses</button>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
