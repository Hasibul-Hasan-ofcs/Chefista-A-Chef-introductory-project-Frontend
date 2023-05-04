import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../providers/AuthProvider";
import "./../css/navigationBar.css";
import { FaCaretDown } from "react-icons/fa";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);

  const [displayValue, setDisplayValue] = useState("d-none");
  const [classStateDD, setClassStateDD] = useState(
    `dropdown bg-white rounded overflow-hidden d-flex flex-column d-none`
  );

  const profileButtonClickHandler = (e) => {
    setDisplayValue(displayValue === "d-none" ? "d-block" : "d-none");
    setClassStateDD(
      `dropdown bg-white rounded overflow-hidden d-flex flex-column ${displayValue}`
    );

    // console.log(classStateDD);
  };

  useEffect(() => {
    setDisplayValue(displayValue === "d-none" ? "d-block" : "d-none");
  }, []);

  const logoutHandler = () => {
    logout();
  };

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
                {/* <ActiveLink
                  to="/chef-recipes/1"
                  classes="gray-01 fs-14 text-decoration-none"
                >
                  Chef Recipes
                </ActiveLink> */}
                <ActiveLink
                  to="/blogs"
                  classes="gray-01 fs-14 text-decoration-none"
                >
                  Blogs
                </ActiveLink>
              </div>

              <div className="button-box d-flex gap-3 align-items-center">
                {user ? (
                  <>
                    {/* <span className="">{user.displayName}</span> */}
                    <button
                      className="profile_button border-0 bg-transparent"
                      onClick={profileButtonClickHandler}
                      id="app-title"
                    >
                      <img
                        src={user.photoURL}
                        className="user-image-nav rounded-circle"
                      />
                      <FaCaretDown />
                    </button>

                    <ReactTooltip
                      anchorId="app-title"
                      place="bottom"
                      content={user.displayName}
                    />

                    {/* dropdown */}
                    <div className={classStateDD}>
                      <button
                        className="py-2 bg-transparent border-0 border-bottom"
                        onClick={logoutHandler}
                      >
                        Sign Out
                      </button>
                    </div>
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
