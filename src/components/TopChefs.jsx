import React, { useContext, useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../providers/AuthProvider";
import { HashLink } from "react-router-hash-link";
import { IoFastFoodSharp, IoThumbsUp, IoToday } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TopChefs = ({ loader }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImgLoad = () => {
    setIsLoaded(true);
  };

  const { theme } = useContext(AuthContext);
  const { chefs } = loader;
  // console.log(chefs);
  return (
    <div
      className={`py-5 ${theme ? "bg-dark-primary" : ""}`}
      id="featured-jobs-id"
    >
      <h2 className={`text-center fw-bolder mt-5`}>
        <span className={`${theme ? "text-white" : ""}`}>Top</span>{" "}
        <span className="theme-color pacifico-font">Chefs</span>
      </h2>
      <div className="container pt-3 pb-5">
        <p className="gray-01 fs-14 text-center py-4">
          Discover the Excellence of Japanese Culinary Craftsmanship; Where
          Every Dish is a Work of Art. Let the Masterful Techniques and
          Unmatched Attention to Detail Take You on a Gastronomical Journey.
        </p>
        <div className="row mx-0">
          {chefs.map((elm, indx) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={indx}>
                <div
                  className={`rounded border-0 shadow p-4 mb-4 ${
                    theme ? "bg-dark-secondary" : ""
                  }`}
                >
                  <div className="aspect1b1 w-100 position-relative">
                    {isLoaded || (
                      <div className="aspect1b1 w-100 position-absolute top-0 start-0">
                        <Skeleton
                          // width={"100%"}
                          height={"100%"}
                          isLoading={true}
                        />
                      </div>
                    )}
                    <LazyLoad>
                      <img
                        // src={japaneseChef01}
                        src={elm.picture}
                        className="mb-4 img-fluid rounded aspect1b1 w-100 position-absolute top-0 start-0"
                        onLoad={handleImgLoad}
                        // style={{ width: "100%" }}
                      />
                    </LazyLoad>
                  </div>
                  <h5
                    className={`fw-bolder dark-01 py-3 ${
                      theme ? "theme-color" : ""
                    }`}
                  >
                    {elm.name}
                  </h5>
                  {/* <p className="my-0 py-0 gray-01 fw-semibold py-3">
                    {elm.name}
                  </p> */}
                  <div className="job_type d-flex flex-column pb-3 gap-1">
                    <span
                      className={`d-flex justify-content-between ${
                        theme ? "text-white" : ""
                      }`}
                    >
                      <span>
                        <IoFastFoodSharp /> No of recipes:
                      </span>{" "}
                      <span>{elm.num_of_recipes}</span>
                    </span>
                    <span
                      className={`d-flex justify-content-between ${
                        theme ? "text-white" : ""
                      }`}
                    >
                      <span>
                        <IoToday /> Years of experience:
                      </span>{" "}
                      <span>{elm.years_of_experience}</span>
                    </span>
                    <span
                      className={`d-flex justify-content-between ${
                        theme ? "text-white" : ""
                      }`}
                    >
                      <span>
                        <IoThumbsUp /> Total Likes:
                      </span>{" "}
                      <span>{elm.likes}</span>
                    </span>
                  </div>

                  <div className="button-box ">
                    <HashLink smooth to={`/chef-recipes/${elm._id}#top`}>
                      {" "}
                      <button className="theme-button rounded border-0 px-3 py-1 fw-bold">
                        View Recipes
                      </button>
                    </HashLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopChefs;
