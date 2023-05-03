import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../providers/AuthProvider";
import "./../css/navigationBar.css";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container-fluid mx-0 bg_cream_orange_01">
      <nav className="container navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4 className="fw-bolder pacifico-font">
              Chefista<span className="theme-color">.</span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center justify-content-lg-between w-100">
              <div className="balancer"></div>

              <div className="links d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-4 py-5 py-lg-0">
                <ActiveLink to="/" classes="gray-01 fs-14 text-decoration-none">
                  Home
                </ActiveLink>
                <ActiveLink
                  to="/blogs"
                  classes="gray-01 fs-14 text-decoration-none"
                >
                  Blogs
                </ActiveLink>
              </div>

              <div className="button-box d-flex gap-3 align-items-lg-center">
                {user ? (
                  <>
                    <span className="">{user.displayName}</span>
                    <img
                      src={user.photoURL}
                      className="user-image-nav rounded-circle"
                    />
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="theme-button white-mbg text-dark rounded border-0 px-3 py-2 fw-bold">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="theme-button rounded border-0 px-3 py-2 fw-bold">
                        Sign Up
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
