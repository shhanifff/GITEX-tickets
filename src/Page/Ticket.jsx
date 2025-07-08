import React from "react";
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

function Ticket() {
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


  // let oneItem = tickets[0];

  return (
    <>
      <Banner />
      <div className="flex flex-col min-h-screen justify-center items-center py-10 px-10 ">
        {/* Top - Page Content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
          {tickets.map((ticket) => (
            <div
              className="h-[350px] rounded-[26px] overflow-hidden relative bg-white"
              key={ticket.id}
            >
              {/* Left Ticket Curve */}
              <div className="absolute left-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-50"></div>

              {/* Right Ticket Curve */}
              <div className="absolute right-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-50"></div>

              {/* 🔷 Top Gradient Section */}
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, ${ticket.BgStart}, ${ticket.BgEnd})`,
                }}
                className="w-full h-[25%] relative "
              >
                <img
                  src={Checks}
                  alt="Checks animation"
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />

                <div className="absolute inset-0 z-10 p-4 text-white pl-10">
                  <h1 className="text-base font-bold text-[20px]">
                    {ticket.title.toUpperCase()}
                  </h1>
                  <h1 className="text-sm text-[17px] text-[#E6FF00]">
                    EVENT DETAILS →
                  </h1>
                </div>
              </div>

              {/* 🔷 Bottom Section - Blurred Image + Overlay */}
              <div className="relative w-full h-[75%]">
                <img
                  src={ticket.BgImg}
                  alt="Bg image"
                  className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/80 p-10">
                  <h1 className="text-white text-sm leading-relaxed">
                    Visitor Passes provide{" "}
                    <span className="text-green-400 font-semibold">
                      3 Days Access
                    </span>{" "}
                    to GITEX NIGERIA exhibition and all free conference.
                  </h1>
                </div>

                <div className="w-full h-40">
  {ticket.features.length === 0 ? (
    <img src={featureLogo} alt="Features Logo" />
  ) : (
    ticket.features.map((x, i) => (
      <div
        key={i}
        style={{
          backgroundColor: x.v ? "grey" : "black",
          opacity: x.v ? 1 : 0.5,
          color: "white",
          padding: "4px 8px",
          borderRadius: "6px",
          marginBottom: "4px"
        }}
      >
        {x.text}
      </div>
    ))
  )}
</div>


              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner />
      <Footer className="sticky bottom-0" />
    </>
  );
}

export default Ticket;
