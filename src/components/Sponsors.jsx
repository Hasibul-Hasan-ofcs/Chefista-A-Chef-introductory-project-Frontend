import React from "react";
import amazon from "./../assets/sponsors/amazon.png";
import figma from "./../assets/sponsors/figma.png";
import google from "./../assets/sponsors/google.png";
import spotify from "./../assets/sponsors/spotify.png";
import telerama from "./../assets/sponsors/telerama.png";

const Sponsors = () => {
  return (
    <div>
      <h2 className="text-center fw-bolder">
        Our trusted <span className="theme-color pacifico-font">Partners</span>
      </h2>
      <div className="container d-flex flex-wrap gap-2 justify-content-between py-5 my-5">
        <img src={google} className="sponsor-img img-fluid gray-02" />
        <img src={figma} className="sponsor-img img-fluid gray-02" />
        <img src={spotify} className="sponsor-img img-fluid gray-02" />
        <img src={amazon} className="sponsor-img img-fluid gray-02" />
        <img src={telerama} className="sponsor-img img-fluid gray-02" />
      </div>
    </div>
  );
};

export default Sponsors;
