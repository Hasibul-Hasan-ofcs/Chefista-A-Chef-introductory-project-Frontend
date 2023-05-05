import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Sushi from "./../assets/Images/sushi.png";
import Ramen from "./../assets/Images/ramen.png";
import Tempura from "./../assets/Images/tempura.png";
import Udon from "./../assets/Images/udon.png";
import Yakitori from "./../assets/Images/yakitori.png";
import Okonomiyaki from "./../assets/Images/okonomiyaki.png";

const FamousCuisins = () => {
  const { theme } = useContext(AuthContext);
  const dataArray = [
    {
      name: "Sushi",
      img: Sushi,
      nameJ: "寿司",
    },
    {
      name: "Ramen",
      img: Ramen,
      nameJ: "拉麺",
    },
    {
      name: "Tempura",
      img: Tempura,
      nameJ: "天ぷら",
    },
    {
      name: "Udon",
      img: Udon,
      nameJ: "うどん",
    },
    {
      name: "Yakitori",
      img: Yakitori,
      nameJ: "焼き鳥",
    },
    {
      name: "Okonomiyaki",
      img: Okonomiyaki,
      nameJ: "お好み焼き",
    },
  ];
  return (
    <div className={`py-5 ${theme ? "bg-dark-secondary" : ""}`}>
      <h2 className="text-center fw-bolder pt-5">
        <span className={`${theme ? "text-white" : ""}`}>Most Famous</span>{" "}
        <span className="theme-color pacifico-font">Japanese</span>{" "}
        <span className={`${theme ? "text-white" : ""}`}>Recipes</span>{" "}
      </h2>
      <div
        className={`container mx-auto my-5 d-flex flex-column rounded shadow border-0 ${
          theme ? "bg-dark-primary" : ""
        }`}
      >
        {dataArray.map((el, indx) => (
          <div
            className="d-flex flex-wrap justify-content-between align-items-center border-bottom p-4"
            key={indx}
          >
            <h3
              className={`theme-color pacifico-font fw-bolder${
                theme ? "text-white" : ""
              }`}
            >
              {el.name}
            </h3>
            <img src={el.img} className="img-80px rounded-circle" />
            <h3
              className={`theme-color pacifico-font fw-bolder${
                theme ? "text-white" : ""
              }`}
            >
              {el.nameJ}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamousCuisins;
