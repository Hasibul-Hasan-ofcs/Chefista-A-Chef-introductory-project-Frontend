import React, { useEffect, useState } from "react";
import "./../css/chefRecipes.css";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [disabledState, setDisabledState] = useState({});
  const loader = useLoaderData();

  const { theme } = useContext(AuthContext);
  // console.log(recipes);

  useEffect(() => {
    fetch(`https://chefista-backend.vercel.app/recipes/${loader._id}`)
      .then((result) => result.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  const addFevHandler = (e) => {
    toast.success("Added to favorites. \n Button Disabled ⚠", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log(indx);
    // setDisabledState(...disabledState, { indx: true });
    e.target.disabled = true;
  };

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
            <p className="pb-0 mb-0 text-white">
              <b>Likes:</b> {loader.likes}
            </p>
            <p className="pb-0 mb-0 text-white">
              <b>Bio/description:</b> {loader.bio}
            </p>
          </div>
          <img src={loader.picture} className="img-fluid" />
        </div>
      </div>

      {/* recipes */}
      <div className={`container-fluid py-5 ${theme ? "bg-dark-primary" : ""}`}>
        <div className="container mx-auto">
          <h2 className="text-center fw-bolder py-5">
            <span className="theme-color pacifico-font">Chef's</span>{" "}
            <span className={`${theme ? "text-white" : ""}`}>Recipes</span>
          </h2>
          {recipes.map((elm, indx) => {
            return (
              <div
                className={`rounded shadow p-4 d-flex flex-column my-5 ${
                  theme ? "bg-dark-secondary" : ""
                }`}
                key={indx}
              >
                <img src={elm.img} className="recipe-img rounded my-4" />
                <p className={`${theme ? "text-white" : ""}`}>
                  <b>Recipe Name:</b> {elm.name}
                </p>
                <p className={`${theme ? "text-white" : ""}`}>
                  <b>Ingredients:</b> {elm.ingredients.join(", ")}
                </p>
                <p className={`${theme ? "text-white" : ""}`}>
                  <b>Cooking Method:</b> {elm.cooking_method}
                </p>
                <p className={`${theme ? "text-white" : ""}`}>
                  <b>Rating:</b> {elm.rating}
                </p>
                <div className="button-box ">
                  <button
                    className={`theme-button rounded border-0 px-3 py-1 fw-bold`}
                    onClick={addFevHandler}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ChefRecipes;
