import React from "react";
// import japaneseChef01 from "./../assets/images/japaneseChef01.jpg";
import japaneseChef01 from "./../assets/images/japaneseChef01.png";
import { Link } from "react-router-dom";

const TopChefs = ({ loader }) => {
  const { chefs } = loader;
  console.log(chefs);
  return (
    <div className="py-5 my-5" id="featured-jobs-id">
      <h2 className="text-center fw-bolder">
        Top <span className="theme-color pacifico-font">Chefs</span>
      </h2>
      <div className="container">
        <p className="gray-01 fs-14 text-center py-4">
          Discover the Excellence of Japanese Culinary Craftsmanship; Where
          Every Dish is a Work of Art. Let the Masterful Techniques and
          Unmatched Attention to Detail Take You on a Gastronomical Journey.
        </p>
        <div className="row mx-0">
          {chefs.map((elm, indx) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={indx}>
                <div className="rounded border p-4 mb-4">
                  <img
                    // src={japaneseChef01}
                    src={elm.picture}
                    className="pb-4 img-fluid rounded"
                  />

                  <h5 className="fw-bolder dark-01  py-3">{elm.name}</h5>
                  {/* <p className="my-0 py-0 gray-01 fw-semibold py-3">
                    {elm.name}
                  </p> */}
                  <div className="job_type d-flex flex-column pb-3 gap-1">
                    <span className="">No of recipes: {elm.num_recipes}</span>
                    <span className="">
                      Years of experience: {elm.years_of_experience}
                    </span>
                    <span className="">Total Likes: {elm.likes}</span>
                  </div>

                  <div className="button-box ">
                    <Link to={`/chef-recipes/${elm._id}`}>
                      {" "}
                      <button className="theme-button rounded border-0 px-3 py-1 fw-bold">
                        View Recipes
                      </button>
                    </Link>
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
