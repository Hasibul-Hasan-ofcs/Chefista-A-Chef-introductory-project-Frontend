import React, { useEffect, useState } from "react";
import "./../css/chefRecipes.css";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [disabledState, setDisabledState] = useState({});
  const loader = useLoaderData();

  console.log(recipes);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${loader._id}`)
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
      <div className="container mx-auto py-5">
        <h2 className="text-center fw-bolder py-5">
          <span className="theme-color pacifico-font">Chef's</span> Recipes
        </h2>
        {recipes.map((elm, indx) => {
          return (
            <div
              className="rounded shadow p-4 d-flex flex-column my-5"
              key={indx}
            >
              <img src={elm.img} className="recipe-img rounded my-4" />
              <p>
                <b>Recipe Name:</b> {elm.name}
              </p>
              <p>
                <b>Ingredients :</b> {elm.ingredients.join(", ")}
              </p>
              <p>
                <b>Cooking Method:</b> {elm.cooking_method}
              </p>
              <p>
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
  );
};

export default ChefRecipes;
