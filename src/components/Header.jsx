import React, { useContext } from "react";
import Chef_Banner_IMG from "./../assets/images/chef_02_ds.jpg";
import Chef_Banner_S_IMG from "./../assets/images/chef_03_ds.jpg";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`${theme ? "bg-dark-secondary" : "bg_cream_orange_01"}`}>
      <div className="container px-0 py-lg-5 py-lg-0 mx-auto d-flex flex-column-reverse flex-lg-row">
        <div className="container py-5 width-50 pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-4">
          <h1
            className={`${
              theme ? "text-white" : "text-dark"
            } header_text pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start`}
          >
            <span className="text-1-header">The Culinary</span>
            <span className="text-2-header">Genius of Innovative</span>
            <span className="theme-color text-3-header pacifico-font">
              {/* Chefs */}
              シェフ
            </span>
          </h1>
          <p className="gray-01 fs-14 text-center text-lg-start header-info-text">
            Discover the Excellence of Japanese Culinary Craftsmanship; Where
            Every Dish is a Work of Art. Let the Masterful Techniques and
            Unmatched Attention to Detail Take You on a Gastronomical Journey.
            Elevate Your Palate with the Culinary Perfection of Japanese Chefs.
          </p>
          <div className="button-box ">
            <HashLink to="/#featured-jobs-id">
              <button className="theme-button rounded border-0 px-3 py-2 fw-bold header-start-btn">
                Get Started
              </button>
            </HashLink>
          </div>
        </div>
        <div className="container px-2 px-lg-0 width-50">
          <div className="container-fluid position-relative height-520">
            <div className="img-box p-3 theme-border-img position-absolute top-0 start-0 bg-white">
              <img
                src={Chef_Banner_IMG}
                className="w-100 header-img rounded-4"
                alt="back to job"
              />
            </div>
            <div className="img-box p-3 theme-border-img-2 position-absolute bottom-0 end-0 bg-white">
              <img
                src={Chef_Banner_S_IMG}
                className="w-100 header-img rounded-4"
                alt="back to job"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
