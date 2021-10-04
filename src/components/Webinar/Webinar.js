import React from "react";
import "./Webinar.css";
const Webinar = (props) => {
  const { plan, price, quantity, validity, img } = props.webinar;
  return (
    <div className="col-4 webinar">
      <div className="img-fluid">
        <img src={img} alt="" width="100px" className="webinar-image" />
      </div>
      <h3>{plan}</h3>
      <h1>{price}</h1>
      <p>(Inclusive of Taxes)</p>
      <h3>{quantity} Webinars</h3>
      <p>Valid for {validity} days</p>
      <button className="button">Buy Now</button>
    </div>
  );
};

export default Webinar;
