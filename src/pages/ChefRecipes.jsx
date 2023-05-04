import React from "react";
import "./../css/chefRecipes.css";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const loader = useLoaderData();
  console.log(loader);

  return (
    <div className="container-fluid mx-0 px-0">
      <div className="container-fluid h-100 banner d-flex align-items-center py-4">
        <div className="container h-100 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex flex-column gap-2">
            <h1 className="pacifico-font text-white name_chef pb-3">
              {loader.name}
            </h1>

            <p className="pb-0 mb-0 text-white">
              <b>Years of experience:</b> {loader.years_of_experience}
            </p>
            <p className="pb-0 mb-0 text-white">
              <b>Numbers of recipes:</b> {loader.num_of_recipes}
            </p>
            <p className="pb-0 mb-0 text-white">Likes: {loader.likes}</p>
            <p className="pb-0 mb-0 text-white">
              <b>Bio/description:</b> {loader.bio}
            </p>
          </div>
          <img src={loader.picture} className="img-fluid" />
        </div>

        {/* <div className="col-12 col-md-6 col-lg-4" key={indx}>
          <div className="rounded border p-4 mb-4">
            <img src={japaneseChef01} className="pb-4 img-fluid rounded" />

            <h5 className="fw-bolder dark-01  py-3">{elm.name}</h5>
            <div className="job_type d-flex flex-column pb-3 gap-1">
              <span className="">No of recipes: {elm.num_recipes}</span>
              <span className="">
                Years of experience: {elm.years_of_experience}
              </span>
              <span className="">Total Likes: {elm.likes}</span>
            </div>

            <div className="button-box ">
              <Link to={`/job/${elm._id}`}>
                {" "}
                <button className="theme-button rounded border-0 px-3 py-1 fw-bold">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChefRecipes;
