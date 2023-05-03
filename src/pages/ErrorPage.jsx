import React from "react";
// import IMG404 from "./../assets/All Images/404_error.png";
import { Link } from "react-router-dom";
import BannerChef2 from "./../assets/Images/chef_banner_2.jpeg";

const ErrorPage = () => {
  return (
    <div className="container min-vh-100 flex-column d-flex align-items-center justify-content-center py-5">
      <div className="container-fluid d-flex align-items-center justify-content-center flex-column">
        <img className="img-fluid" src={BannerChef2} />
        <h1 className="theme-color py-5">404! Page Not Found.</h1>
        {/* <img
          src={IMG404}
          alt="not found"
          className="container-fluid px-5 mx-auto img_60"
        /> */}
      </div>
      <Link className="button-box" to="/">
        <button className="theme-button rounded border-0 px-3 py-2 fw-bold">
          Go Back to Home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
