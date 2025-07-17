// import React, { useEffect, useState } from "react";
// import Banner from "../Component/Banner";
// import Ticket1 from "../assets/images/Ticket1bg.png";
// import Ticket2 from "../assets/images/Ticket2.jpg";
// import Ticket3 from "../assets/images/Ticket3.jpg";
// import Ticket4 from "../assets/images/Ticket4.jpg";
// import Ticket5 from "../assets/images/Ticket5.jpg";
// import Ticket6 from "../assets/images/Ticket6.jpg";
// import Checks from "../assets/images/Checks.png";
// import Footer from "../Component/Footer";
// import featureLogo from "../assets/images/featers_logo.png";
// import Vector from "../assets/images/Vector.png";

// function Ticket() {
//   // const navigate = useNavigate();

//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [],
//       offer: "",
//       price: 43,
//       offPrice: 32.5,
//       VAT_Percentage: 20,
//       BgStart: "#5B2A7C",
//       BgEnd: "#451D5D",
//       Quantity: 0,
//       BgImg: Ticket1,
//     },
//     {
//       id: 2,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [
//         { text: "Access to ConneXions & Investor Lounge", v: true },
//         { text: "Network Events", v: true },
//         { text: "All Conference Tracks", v: true },
//         { text: "All Masterclasses", v: true },
//         { text: "3 Days Access to the Show", v: true },
//         { text: "Access to Dubai Internet City Lounge", v: true },
//       ],
//       offer: "",
//       price: 0,
//       offPrice: 0,
//       VAT_Percentage: 19,
//       BgStart: "#CD670A",
//       BgEnd: "#CA3722",
//       Quantity: 0,
//       BgImg: Ticket2,
//     },
//     {
//       id: 3,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [
//         { text: "Access to ConneXions & Investor Lounge", v: true },
//         { text: "Network Events", v: true },
//         { text: "All Conference Tracks", v: true },
//         { text: "All Masterclasses", v: true },
//         { text: "3 Days Access to the Show", v: false },
//         { text: "Access to Dubai Internet City Lounge", v: false },
//       ],
//       offer: "EXCLUSIVE",
//       price: 0,
//       offPrice: 0,
//       VAT_Percentage: 19,
//       BgStart: "#173903",
//       BgEnd: "#081D01",
//       Quantity: 0,
//       BgImg: Ticket3,
//     },
//     {
//       id: 4,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [
//         { text: "Access to ConneXions & Investor Lounge", v: true },
//         { text: "Network Events", v: true },
//         { text: "All Conference Tracks", v: true },
//         { text: "All Masterclasses", v: true },
//         { text: "3 Days Access to the Show", v: true },
//         { text: "Access to Dubai Internet City Lounge", v: true },
//       ],
//       offer: "BEST SELLER",
//       price: 0,
//       offPrice: 0,
//       VAT_Percentage: 19,
//       BgStart: "#B5040A",
//       BgEnd: "#631308",
//       Quantity: 0,
//       BgImg: Ticket4,
//     },
//     {
//       id: 5,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [
//         { text: "Access to ConneXions & Investor Lounge", v: true },
//         { text: "Network Events", v: true },
//         { text: "All Conference Tracks", v: true },
//         { text: "All Masterclasses", v: true },
//         { text: "3 Days Access to the Show", v: true },
//         { text: "Access to Dubai Internet City Lounge", v: true },
//       ],
//       offer: "",
//       price: 0,
//       offPrice: 0,
//       VAT_Percentage: 19,
//       BgStart: "#53BE2C",
//       BgEnd: "#27870C",
//       Quantity: 0,
//       BgImg: Ticket5,
//     },
//     {
//       id: 6,
//       title: "Visitor 3 Day Access Ticket",
//       description:
//         "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
//       features: [
//         { text: "Access to ConneXions & Investor Lounge", v: true },
//         { text: "Network Events", v: true },
//         { text: "All Conference Tracks", v: true },
//         { text: "All Masterclasses", v: true },
//         { text: "3 Days Access to the Show", v: false },
//         { text: "Access to Dubai Internet City Lounge", v: false },
//       ],
//       offer: "",
//       price: 0,
//       offPrice: 0,
//       VAT_Percentage: 19,
//       BgStart: "#004D98",
//       BgEnd: "#01277C",
//       Quantity: 0,
//       BgImg: Ticket6,
//     },
//   ]);

//   const [selectTicket, setSelectTicket] = useState({});

//   const handleQty = (id, action) => {
//     const updateQty = tickets.map((x) => {
//       if (x.id === id) {
//         let updatedQty = x.Quantity;

//         if (action === "inc") {
//           updatedQty = x.Quantity + 1;
//         } else if (action === "dec" && x.Quantity > 0) {
//           updatedQty = x.Quantity - 1;
//         }

//         setSelectTicket((prev) => ({
//           ...prev,
//           [id]: { ...x, Quantity: updatedQty },
//         }));

//         return { ...x, Quantity: updatedQty };
//       }

//       return x;
//     });

//     setTickets(updateQty);
//   };

//   useEffect(() => {
//     console.log("user chose ticket", selectTicket);
//   }, [selectTicket]);

//   return (
//     <>
//       <Banner />

//       <div className="flex flex-col min-h-screen justify-center items-center py-10 px-10 ">
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
//           {tickets.map((ticket) => (
//             <div key={ticket.id} className="relative">
//               {ticket.offer !== "" && (
//                 <div className="absolute -left-1 -top-1 z-40">
//                   <svg
//                     width="130"
//                     height="150"
//                     viewBox="0 0 130 150"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="relative rounded-tl-2xl"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="offerGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#16F25C" />
//                         <stop offset="50%" stopColor="#04270F" />
//                       </linearGradient>
//                     </defs>

//                     <polygon
//                       points="0,0 130,0 0,150"
//                       fill="url(#offerGradient)"
//                     />

//                     <text
//                       x="42"
//                       y="42"
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       transform="rotate(-50, 45, 40)"
//                       fill="white"
//                       fontSize="20"
//                       fontWeight="bold"
//                     >
//                       {ticket.offer.split(" ")[0]}
//                     </text>
//                     <text
//                       x="42"
//                       y="60"
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       transform="rotate(-50, 45, 40)"
//                       fill="white"
//                       fontSize="19"
//                       fontWeight="light"
//                     >
//                       {ticket.offer.split(" ")[1]}
//                     </text>
//                   </svg>
//                 </div>
//               )}

//               <div className="h-[500px] rounded-[26px] overflow-hidden bg-white relative">
//                 <div className="absolute left-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-40"></div>

//                 <div className="absolute right-[-22px] top-[50%] w-11 h-11 bg-white rounded-[140px] z-40"></div>

//                 <div
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${ticket.BgStart}, ${ticket.BgEnd})`,
//                   }}
//                   className="w-full h-[20%] relative "
//                 >
//                   <img
//                     src={Checks}
//                     alt="Checks animation"
//                     className="w-full h-full object-cover absolute inset-0 z-0"
//                   />

//                   <div
//                     className={`absolute inset-0 z-10 p-4 text-white ${
//                       ticket.offer == "" ? "pl-5" : " pl-24"
//                     } `}
//                   >
//                     <h1 className="text-base font-bold text-[20px]">
//                       {ticket.title.toUpperCase()}
//                     </h1>
//                     <h1 className="text-sm text-[17px] text-[#E6FF00]">
//                       EVENT DETAILS →
//                     </h1>
//                   </div>
//                 </div>

//                 <div className="relative w-full h-[80%]">
//                   <img
//                     src={ticket.BgImg}
//                     alt="Bg image"
//                     className="w-full h-full object-cover blur-sm"
//                   />
//                   <div className="absolute inset-0 bg-black/80 p-10">
//                     <h1 className="text-white text-sm leading-relaxed relative ">
//                       Visitor Passes provide
//                       <span className="text-green-400 font-semibold">
//                         3 Days Access
//                       </span>
//                       to GITEX NIGERIA exhibition and all free conference.
//                     </h1>

//                     {ticket.features.length > 0 ? (
//                       ticket.features.map((text, index) => (
//                         <div className="pt-3 text-left inline-grid" key={index}>
//                           <span
//                             style={{
//                               backgroundColor: text.v ? "" : "Black",
//                               opacity: text.v ? 1 : 0.4,
//                             }}
//                             className="backdrop-blur-md bg-black/20 border border-white/20 text-white rounded-3xl px-1.5 py-1 text-sm inline-flex items-center gap-2"
//                           >
//                             <span
//                               className={`${
//                                 text.v ? "bg-green-600" : "bg-green-600/40"
//                               } text-white px-2 rounded-full py-1`}
//                             >
//                               ✓
//                             </span>
//                             {text.text}
//                           </span>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="flex justify-start items-start pt-12">
//                         <img
//                           src={featureLogo}
//                           alt="Feature logo"
//                           className="w-44 sm:w-52 h-auto object-contain"
//                         />
//                       </div>
//                     )}

//                     {ticket.features.length > 0 ? (
//                       <>
//                         <div className="w-full h-px mt-6 bg-gradient-to-r from-white to-white/5"></div>
//                         <div className="w-full text-left mt-5 flex items-start justify-between">
//                           <div>
//                             <h1 className="text-white text-lg font-semibold mt-1">
//                               {ticket.price > 1 ? `₹${ticket.price}` : "FREE"}
//                               {ticket.offPrice > 1
//                                 ? `₹${ticket.offPrice}`
//                                 : "FREE"}
//                             </h1>
//                             <span className="text-xs text-[#8F8F8F] block leading-tight ">
//                               INCL. {ticket.VAT_Percentage}% VAT
//                             </span>
//                           </div>
//                           <span className="bg-white border rounded-sm border-white ">
//                             <button
//                               className="py-1 px-2 bg-black text-white  rounded-tl-sm rounded-bl-sm cursor-pointer"
//                               onClick={() => handleQty(ticket.id, "dec")}
//                             >
//                               -
//                             </button>
//                             <span className="py-1 px-3 bg-white text-black ">
//                               {ticket.Quantity}
//                             </span>
//                             <button
//                               className="py-1 px-2 bg-black text-white rounded-tr-sm rounded-br-sm cursor-pointer"
//                               onClick={() => handleQty(ticket.id, "inc")}
//                             >
//                               +
//                             </button>
//                           </span>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="w-full h-px mt-24 bg-gradient-to-r from-white to-white/5"></div>
//                         <div className="w-full py-2 w1/2 text-left text-white text-sm mt-5 flex justify-between">
//                           <img
//                             src={Vector}
//                             alt=""
//                             className="absolute  left-20 bottom-10"
//                           />
//                           <span className="  font-bold text-xl">
//                             USD{" "}
//                             <>
//                               {"  "}
//                               <span className="text-gray-600">
//                                 {ticket.price}
//                               </span>
//                               {"  "}
//                               <span className="bg-black border border-[#BDBDBD] px-3 py-1 rounded-[4.91px]">
//                                 {ticket.offPrice}
//                               </span>
//                               {"  "}
//                               <span className="text-xs font-light">
//                                 Incl. {ticket.VAT_Percentage}% VAT
//                               </span>
//                             </>
//                           </span>

//                           <span className="bg-white border rounded-sm border-white ">
//                             <button
//                               className="py-1 px-2 bg-black text-white  rounded-tl-sm rounded-bl-sm cursor-pointer"
//                               onClick={() => handleQty(ticket.id, "dec")}
//                             >
//                               -
//                             </button>
//                             <span className="py-1 px-3 bg-white text-black ">
//                               {ticket.Quantity}
//                             </span>
//                             <button
//                               className="py-1 px-2 bg-black text-white rounded-tr-sm rounded-br-sm cursor-pointer"
//                               onClick={() => handleQty(ticket.id, "inc")}
//                             >
//                               +
//                             </button>
//                           </span>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Banner />
//       <Footer selectTicket={selectTicket} />
//     </>
//   );
// }

// export default Ticket;



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

function Ticket() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Visitor 3 Day Access Ticket",
      description:
        "Visitor Passes provide 3 days access to GITEX NIGERIA exhibition and all free conference",
      features: [], // No features for this ticket
      offer: "",
      price: 43,
      offPrice: 32.5,
      VAT_Percentage: 20,
      BgStart: "#5B2A7C",
      BgEnd: "#451D5D",
      Quantity: 0,
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
      offPrice: 0,
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
      offPrice: 0,
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
      offPrice: 0,
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
      offPrice: 0,
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
      offPrice: 0,
      VAT_Percentage: 19,
      BgStart: "#004D98",
      BgEnd: "#01277C",
      Quantity: 0,
      BgImg: Ticket6,
    },
  ]);

  const [selectTicket, setSelectTicket] = useState({});

  const handleQty = (id, action) => {
    const updatedTickets = tickets.map((x) => {
      if (x.id === id) {
        let updatedQty = x.Quantity;

        if (action === "inc") {
          updatedQty = x.Quantity + 1;
        } else if (action === "dec" && x.Quantity > 0) {
          updatedQty = x.Quantity - 1;
        }

        // Update the individual selected ticket's quantity
        setSelectTicket((prev) => ({
          ...prev,
          [id]: { ...x, Quantity: updatedQty },
        }));

        return { ...x, Quantity: updatedQty };
      }
      return x;
    });

    setTickets(updatedTickets);
  };

  useEffect(() => {
    console.log("User chose ticket", selectTicket);
  }, [selectTicket]);

  return (
    <>
      <Banner />

      <div className="flex flex-col min-h-screen justify-center items-center py-10 px-4 sm:px-6 lg:px-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

              <div className="h-[500px] rounded-[26px] overflow-hidden bg-white relative shadow-lg">
                <div className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full z-40"></div>
                <div className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full z-40"></div>

                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, ${ticket.BgStart}, ${ticket.BgEnd})`,
                  }}
                  className="w-full h-[20%] relative"
                >
                  <img
                    src={Checks}
                    alt="Checks animation"
                    className="w-full h-full object-cover absolute inset-0 z-0 opacity-20" // Reduced opacity for better text visibility
                  />

                  <div
                    className={`absolute inset-0 z-10 p-4 text-white flex flex-col justify-center ${
                      ticket.offer === "" ? "pl-5" : "pl-24"
                    } `}
                  >
                    <h1 className="text-base font-bold text-[20px] leading-tight">
                      {ticket.title.toUpperCase()}
                    </h1>
                    <h1 className="text-sm text-[17px] text-[#E6FF00] mt-1">
                      EVENT DETAILS →
                    </h1>
                  </div>
                </div>

                <div className="relative w-full h-[80%]">
                  <img
                    src={ticket.BgImg}
                    alt="Background"
                    className="w-full h-full object-cover blur-sm absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-between">
                    <div>
                      <h1 className="text-white text-sm leading-relaxed mb-4">
                        Visitor Passes provide{" "}
                        <span className="text-green-400 font-semibold">
                          3 Days Access
                        </span>{" "}
                        to GITEX NIGERIA exhibition and all free conference.
                      </h1>

                      {ticket.features.length > 0 ? (
                        <div className="space-y-1.5">
  {ticket.features.map((feature, index) => (
    <span
      key={index}
      style={{
        backgroundColor: feature.v ? "" : "rgba(0,0,0,0.4)", // lighter transparent bg
        opacity: feature.v ? 1 : 0.5, // more faded if not available
      }}
      className="backdrop-blur-md bg-black/20 border border-white/10 text-white rounded-2xl px-2.5 py-1 text-xs inline-flex items-center gap-1.5 mr-1.5 mb-1.5"
    >
      <span
        className={`${
          feature.v ? "bg-green-600" : "bg-green-600/30"
        } text-white px-1.5 rounded-full py-0.5 text-[10px]`}
      >
        ✓
      </span>
      {feature.text}
    </span>
  ))}
</div>

                      ) : (
                        <div className="flex justify-center items-center pt-8 md:pt-12">
                          <img
                            src={featureLogo}
                            alt="Feature logo"
                            className="w-36 sm:w-44 h-auto object-contain" // Adjusted size for better responsiveness
                          />
                        </div>
                      )}
                    </div>

                    {/* Price and Quantity Controls */}
                    <div className="w-full text-left mt-auto pt-6">
                      <div className="w-full h-px mb-4 bg-gradient-to-r from-white/50 to-white/5"></div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          {ticket.features.length > 0 ? (
                            <>
                              <h1 className="text-white text-lg font-semibold">
                                {ticket.price > 1 ? `₹${ticket.price}` : "FREE"}
                              </h1>
                              {ticket.offPrice > 1 && (
                                <span className="text-xs text-[#8F8F8F] block leading-tight">
                                  Original Price: ₹{ticket.offPrice}
                                </span>
                              )}
                              <span className="text-xs text-[#8F8F8F] block leading-tight mt-1">
                                INCL. {ticket.VAT_Percentage}% VAT
                              </span>
                            </>
                          ) : (
                            <>
                              <div className="flex items-baseline gap-2">
                                <span className="font-bold text-xl text-white">USD</span>
                                <span className="text-gray-400 line-through text-lg">
                                  {ticket.price}
                                </span>
                                <span className="bg-black border border-[#BDBDBD] px-3 py-1 rounded-[4.91px] text-white text-lg">
                                  {ticket.offPrice}
                                </span>
                              </div>
                              <span className="text-xs font-light text-gray-400 mt-1 block">
                                Incl. {ticket.VAT_Percentage}% VAT
                              </span>
                            </>
                          )}
                        </div>

                        <span className="bg-white border rounded-sm border-white flex items-center">
                          <button
                            className="py-1 px-3 bg-black text-white rounded-tl-sm rounded-bl-sm cursor-pointer hover:bg-gray-800 transition-colors"
                            onClick={() => handleQty(ticket.id, "dec")}
                          >
                            -
                          </button>
                          <span className="py-1 px-4 bg-white text-black font-semibold">
                            {ticket.Quantity}
                          </span>
                          <button
                            className="py-1 px-3 bg-black text-white rounded-tr-sm rounded-br-sm cursor-pointer hover:bg-gray-800 transition-colors"
                            onClick={() => handleQty(ticket.id, "inc")}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner />
      <Footer selectTicket={selectTicket} />
    </>
  );
}

export default Ticket;