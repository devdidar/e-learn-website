import React from "react";
import "./Course.css";
const Course = (props) => {
  const { name, author, duration, price, img, enrolled } = props.course;
  return (
    <div className="course col-4 d-flex flex-column align-items-center justify-content-center">
      <div>
        <img src={img} alt="" className='my-2' />
      </div>
      <div>
        <p className="title">Title: {name}</p>
        <p>Author: {author}</p>
        <p>Duration: {duration}</p>
        <p>Enrolled: {enrolled}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Course;
