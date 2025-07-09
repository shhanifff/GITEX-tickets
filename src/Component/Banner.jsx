import React, { useEffect } from "react";
import BannerImg from "../assets/images/Banner.png";
import Login from "../assets/images/Login.png";

function Banner({ login = null }) {
  useEffect(() => {
    if (!login) {
      console.log("no value", login);
    }
    console.log("done", login);
  }, [login]);

  return (
    <div className="relative w-full">
      <img src={BannerImg} alt="banner" className="w-full object-cover" />

      {login === "Login" && (
        <img
          src={Login}
          alt="Login Icon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}

export default Banner;
