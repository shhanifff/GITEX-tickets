import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner";
import Ticket1 from "../assets/images/Ticket1bg.png";
import Ticket2 from "../assets/images/Ticket2.jpg";
import Ticket3 from "../assets/images/Ticket3.jpg";
import Ticket4 from "../assets/images/Ticket4.jpg";
import Ticket5 from "../assets/images/Ticket5.jpg";
import Ticket6 from "../assets/images/Ticket6.jpg";
import Checks from "../assets/images/Checks.png";
import Footer from "../Component/Footer";
import featureLogo from "../assets/images/featers_logo.png";
import Vector from "../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";
import FirstTime from "../Component/FirstTime";

function Ticket() {
  const navigate = useNavigate();

  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("firstTime");

    // If no key found, treat as first time
    if (isFirstTime === null) {
      localStorage.setItem("firstTime", "true");
      setFirstTime(true);
    } else if (isFirstTime === "true") {
      setFirstTime(true);
    }
  }, []);

  const tickets = [
    {
      id: 1,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [],
      offer: "",
      price: 43,
      VAT_Percentage: 20,
      BgStart: "#5B2A7C",
      BgEnd: "#451D5D",
      Quantity: 25,
      BgImg: Ticket1,
    },
    {
      id: 2,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [
        { text: "Access to ConneXions & Investor Lounge", v: true },
        { text: "Network Events", v: true },
        { text: "All Conference Tracks", v: true },
        { text: "All Masterclasses", v: true },
        { text: "3 Days Access to the Show", v: true },
        { text: "Access to Dubai Internet City Lounge", v: true },
      ],
      offer: "",
      price: 0,
      VAT_Percentage: 19,
      BgStart: "#CD670A",
      BgEnd: "#CA3722",
      Quantity: 0,
      BgImg: Ticket2,
    },
    {
      id: 3,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [
        { text: "Access to ConneXions & Investor Lounge", v: true },
        { text: "Network Events", v: true },
        { text: "All Conference Tracks", v: true },
        { text: "All Masterclasses", v: true },
        { text: "3 Days Access to the Show", v: false },
        { text: "Access to Dubai Internet City Lounge", v: false },
      ],
      offer: "EXCLUSIVE",
      price: 0,
      VAT_Percentage: 19,
      BgStart: "#173903",
      BgEnd: "#081D01",
      Quantity: 0,
      BgImg: Ticket3,
    },
    {
      id: 4,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [
        { text: "Access to ConneXions & Investor Lounge", v: true },
        { text: "Network Events", v: true },
        { text: "All Conference Tracks", v: true },
        { text: "All Masterclasses", v: true },
        { text: "3 Days Access to the Show", v: true },
        { text: "Access to Dubai Internet City Lounge", v: true },
      ],
      offer: "BEST SELLER",
      price: 0,
      VAT_Percentage: 19,
      BgStart: "#B5040A",
      BgEnd: "#631308",
      Quantity: 0,
      BgImg: Ticket4,
    },
    {
      id: 5,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [
        { text: "Access to ConneXions & Investor Lounge", v: true },
        { text: "Network Events", v: true },
        { text: "All Conference Tracks", v: true },
        { text: "All Masterclasses", v: true },
        { text: "3 Days Access to the Show", v: true },
        { text: "Access to Dubai Internet City Lounge", v: true },
      ],
      offer: "",
      price: 0,
      VAT_Percentage: 19,
      BgStart: "#53BE2C",
      BgEnd: "#27870C",
      Quantity: 0,
      BgImg: Ticket5,
    },
    {
      id: 6,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [
        { text: "Access to ConneXions & Investor Lounge", v: true },
        { text: "Network Events", v: true },
        { text: "All Conference Tracks", v: true },
        { text: "All Masterclasses", v: true },
        { text: "3 Days Access to the Show", v: false },
        { text: "Access to Dubai Internet City Lounge", v: false },
      ],
      offer: "",
      price: 0,
      VAT_Percentage: 19,
      BgStart: "#004D98",
      BgEnd: "#01277C",
      Quantity: 0,
      BgImg: Ticket6,
    },
  ];

  return (
    <>
      <Banner />

      {firstTime && <FirstTime />}
      <div className="flex flex-col min-h-screen justify-center items-center py-10 px-10 ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="relative">
              {ticket.offer !== "" && (
                <div className="absolute -left-1 -top-1 z-40">
                  <svg
                    width="130"
                    height="150"
                    viewBox="0 0 130 150"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative rounded-tl-2xl"
                  >
                    <defs>
                      <linearGradient
                        id="offerGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#16F25C" />
                        <stop offset="50%" stopColor="#04270F" />
                      </linearGradient>
                    </defs>

                    <polygon
                      points="0,0 130,0 0,150"
                      fill="url(#offerGradient)"
                    />

                    <text
                      x="42"
                      y="42"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform="rotate(-50, 45, 40)"
                      fill="white"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {ticket.offer.split(" ")[0]}
                    </text>
                    <text
                      x="42"
                      y="60"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform="rotate(-50, 45, 40)"
                      fill="white"
                      fontSize="19"
                      fontWeight="light"
                    >
                      {ticket.offer.split(" ")[1]}
                    </text>
                  </svg>
                </div>
              )}

              <div className="h-[500px] rounded-[26px] overflow-hidden bg-white relative">
                <div className="absolute left-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-40"></div>

                <div className="absolute right-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-40"></div>

                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, ${ticket.BgStart}, ${ticket.BgEnd})`,
                  }}
                  className="w-full h-[20%] relative "
                >
                  <img
                    src={Checks}
                    alt="Checks animation"
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />

                  <div
                    className={`absolute inset-0 z-10 p-4 text-white ${
                      ticket.offer == "" ? "pl-5" : " pl-24"
                    } `}
                  >
                    <h1 className="text-base font-bold text-[20px]">
                      {ticket.title.toUpperCase()}
                    </h1>
                    <h1 className="text-sm text-[17px] text-[#E6FF00]">
                      EVENT DETAILS →
                    </h1>
                  </div>
                </div>

                <div className="relative w-full h-[80%]">
                  <img
                    src={ticket.BgImg}
                    alt="Bg image"
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/80 p-10">
                    <h1 className="text-white text-sm leading-relaxed relative ">
                      Visitor Passes provide
                      <span className="text-green-400 font-semibold">
                        3 Days Access
                      </span>
                      to GITEX NIGERIA exhibition and all free conference.
                    </h1>

                    {ticket.features.length > 0 ? (
                      ticket.features.map((text, index) => (
                        <div className="pt-3 text-left inline-grid" key={index}>
                          <span
                            style={{
                              backgroundColor: text.v ? "" : "Black",
                              opacity: text.v ? 1 : 0.4,
                            }}
                            className="backdrop-blur-md bg-black/20 border border-white/20 text-white rounded-3xl px-1.5 py-1 text-sm inline-flex items-center gap-2"
                          >
                            <span
                              className={`${
                                text.v ? "bg-green-600" : "bg-green-600/40"
                              } text-white px-2 rounded-full py-1`}
                            >
                              ✓
                            </span>
                            {text.text}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-start items-start pt-12">
                        <img
                          src={featureLogo}
                          alt="Feature logo"
                          className="w-44 sm:w-52 h-auto object-contain"
                        />
                      </div>
                    )}

                    {ticket.features.length > 0 ? (
                      <>
                        <div className="w-full h-px mt-6 bg-gradient-to-r from-white to-white/5"></div>
                        <div className="w-full text-left mt-5 flex items-start justify-between">
                          <div>
                            <h1 className="text-white text-lg font-semibold mt-1">
                              {ticket.price > 1 ? `₹${ticket.price}` : "FREE"}
                            </h1>
                            <span className="text-xs text-[#8F8F8F] block leading-tight ">
                              INCL. {ticket.VAT_Percentage}% VAT
                            </span>
                          </div>
                          <div
                            className="text-black mt-3 bg-white px-3 py-1 font-bold rounded-[7px] cursor-pointer"
                            onClick={() => navigate("/Form1")}
                          >
                            BUY NOW
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-full h-px mt-24 bg-gradient-to-r from-white to-white/5"></div>
                        <div className="w-full py-2 w1/2 text-left text-white text-sm mt-5 flex justify-between">
                          <img
                            src={Vector}
                            alt=""
                            className="absolute  left-20 bottom-10"
                          />
                          <span className="  font-bold text-xl">
                            USD{" "}
                            <>
                              {"  "}
                              <span className="text-gray-600">
                                {ticket.price}
                              </span>
                              {"  "}
                              <span className="bg-black border border-[#BDBDBD] px-3 py-1 rounded-[4.91px]">
                                {ticket.price - 10.5}
                              </span>
                              {"  "}
                              <span className="text-xs font-light">
                                Incl. {ticket.VAT_Percentage}% VAT
                              </span>
                            </>
                          </span>

                          <span
                            className="bg-white border rounded-sm border-white cursor-pointer"
                            onClick={() => navigate("/Form1")}
                          >
                            <button className="py-1 px-2 bg-black text-white  rounded-tl-sm rounded-bl-sm cursor-pointer">
                              -
                            </button>
                            <span className="py-1 px-3 bg-white text-black ">
                              {ticket.Quantity}
                            </span>
                            <button className="py-1 px-2 bg-black text-white rounded-tr-sm rounded-br-sm cursor-pointer">
                              +
                            </button>
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner />
      {firstTime ? "" : <Footer />}
    </>
  );
}

export default Ticket;
