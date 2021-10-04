import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("./home");
  };
  return (
    <div className="not-found">
      <div>
        <img
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/404-SVG-Animated-Page-Concept.png"
          alt=""
          width="700px"
        />
      </div>
      <button className="button" onClick={goToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
