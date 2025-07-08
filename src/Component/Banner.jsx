import React from "react";
import BannerImg from "../assets/Banner.png";

function Banner() {
  return (
    <img
      src={BannerImg}
      alt="banner"
      className="w-full object-cover"
    />
  );
}

export default Banner;
