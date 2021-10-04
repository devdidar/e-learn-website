import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const history = useHistory()
  const goToHome = ()=>{
history.push('./home')
  }
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className="logo ms-5 fs-3" onClick={goToHome}>
        Learn<span className="text-primary">Markets</span>
      </div>
      <nav className="nav-menu fs-5">
        <Link className="link text-decoration-none mx-3" to="/home">
          Home
        </Link>
        <Link className="link text-decoration-none mx-3" to="/courses">
          Courses
        </Link>
        <Link className="link text-decoration-none mx-3" to="/webinars">
          Webinars
        </Link>
        <Link className="link text-decoration-none mx-3" to="/about">
          About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
