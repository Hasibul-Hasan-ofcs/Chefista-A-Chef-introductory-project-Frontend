import React from "react";
import { Link } from "react-router-dom";
import Facebook from "./../assets/icons/facebook.png";
import Instagram from "./../assets/icons/instagram.png";
import Twitter from "./../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div className="bg-dark-01">
      <div className="container py-5 mx-auto">
        <div className="row mx-0 py-5">
          <div className="col-12 col-lg-4 px-2 px-lg-0 pb-5 pb-lg-0">
            <Link className="navbar-brand d-block pb-3" to="/">
              <h4 className="fw-bolder text-white pacifico-font">
                Chefista<span className="theme-color">.</span>
              </h4>
            </Link>
            <p className="gray-02 fs-14 pe-2 pe-lg-5 me-0 me-lg-5 pb-3">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="bg-white rounded-circle social-links d-flex align-items-center justify-content-center"
              >
                <img src={Facebook} alt="facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="bg-white rounded-circle social-links d-flex align-items-center justify-content-center"
              >
                <img src={Twitter} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="bg-white rounded-circle social-links d-flex align-items-center justify-content-center"
              >
                <img src={Instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Company</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className="gray-02 fs-14 text-decoration-none">
                About Us
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Work
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Latest News
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Careers
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Product</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Prototype
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Plans & Pricing
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Customers
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Integrations
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Support</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Help Desk
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Sales
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Become a Partner
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Developers
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Contact</p>
            <div className="links d-flex flex-column gap-3">
              <p
                href=""
                className="gray-02 fs-14 text-decoration-none py-0 my-0"
              >
                524 Broadway , NYC
              </p>
              <p
                href=""
                className="gray-02 fs-14 text-decoration-none py-0 my-0"
              >
                +1 777 - 978 - 5570
              </p>
            </div>
          </div>
        </div>
        <hr className="gray-02" />
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-0 justify-content-between px-2 px-lg-0 pt-4 pb-5">
          <p className="gray-02 fs-14 text-decoration-none">
            @2023 <span className="fw-bolder">Chefista</span>. All Rights
            Reserved
          </p>
          <p className="gray-02 fs-14 text-decoration-none">
            Powered by <span className="fw-bolder">Chefista</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
