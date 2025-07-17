import React from "react";
import Banner from "../Component/Banner";
import Background from "../assets/images/Background.png";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <div className="relative w-full h-screen">
        <img
          src={Background}
          alt="BackGround Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center w-full min-h-screen px-4">
          <div className="w-full max-w-4xl border-t-[6px] bg-white border-t-[#258B39] px-6 md:px-20 py-10 md:py-20 rounded-xl shadow text-black font-semibold flex flex-col gap-6 justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold">THANK YOU!</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-center">
              Your registration has been submitted successfully
            </h2>
            <h2 className="text-base md:text-2xl font-light text-center">
              A confirmation email with your event details will be sent to you
              shortly. Please check your inbox (and spam folder).
            </h2>
            <button
              className="bg-gradient-to-r from-[#27963D] to-[#134323] px-4 py-2 rounded-[6px] text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Return To Homepage
            </button>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Success;
