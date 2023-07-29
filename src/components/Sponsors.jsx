import React, { useContext } from "react";
import amazon from "./../assets/sponsors/amazon.png";
import figma from "./../assets/sponsors/figma.png";
import google from "./../assets/sponsors/google.png";
import spotify from "./../assets/sponsors/spotify.png";
import telerama from "./../assets/sponsors/telerama.png";
import japanPost from "./../assets/sponsors/japan-post.png";
import japanTravel from "./../assets/sponsors/japan-travel.png";
import { AuthContext } from "../providers/AuthProvider";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`py-5 ${theme ? "bg-dark-primary" : ""}`}>
      <h2 className="text-center fw-bolder pt-5 pb-2">
        <span className={`${theme ? "text-white" : ""}`}>Our trusted</span>{" "}
        <span className="theme-color pacifico-font">Partners</span>
      </h2>
      <Marquee>
        <div className="container d-flex  gap-5 justify-content-between py-5 my-5">
          <img src={google} className="sponsor-img img-fluid gray-02 mx-4" />
          <img src={japanPost} className="sponsor-img img-fluid gray-02 mx-4" />
          <img src={spotify} className="sponsor-img img-fluid gray-02 mx-4" />
          <img
            src={japanTravel}
            className="sponsor-img img-fluid gray-02 mx-4"
          />
          <img src={amazon} className="sponsor-img img-fluid gray-02 mx-4" />
          <img src={telerama} className="sponsor-img img-fluid gray-02 mx-4" />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
