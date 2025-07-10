import React from "react";
import BannerImg from "../assets/images/Banner.png";
import { useNavigate } from "react-router-dom";

function FirstTime() {
  const navigate = useNavigate();

  const service = [
    { text: "Global Leaders Forum !NEW", day: "(3 Days)", value: true },
    { text: "GITEX Main Stage", day: "", value: "" },
    { text: "Artificial Intelligence & Robotics", day: "(15)", value: false },
    { text: "AI Everything", day: "(4 Days)", value: true },
    { text: "Cybersecurity", day: "(4 Days)", value: true },
    { text: "Future Health !NEW", day: "(2 Days)", value: true },
    { text: "Digital Cities", day: "(1 Days)", value: true },
    { text: "Edtech", day: "(1 Days)", value: true },
    { text: "Energy Transition", day: "(1 Days)", value: true },
    { text: "Inteligent Connectivity", day: "(1 Days)", value: true },
    { text: "Digital Finance", day: "(1 Days)", value: true },
    { text: "Future Mobility", day: "(1 Days)", value: true },
  ];

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh] bg-white rounded-2xl flex flex-col overflow-hidden">
        <div
          className="w-full rounded-t-2xl shadow-lg p-4 sm:p-6 relative flex items-center justify-between text-white"
          style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-sm sm:text-base font-bold">
            SELECT SOLUTIONS/PRODUCTS
          </h1>
          <button className="text-white border border-white p-2 rounded-full hover:bg-white hover:text-black transition flex justify-center items-center">
            <i className="bx bx-x text-lg" />
          </button>
        </div>

        <div className="w-full px-4 sm:px-6 py-4 overflow-y-auto">
          <div className="w-full h-12 sm:h-14 border rounded-lg border-[#9D9C9C] flex items-center px-3">
            <h1 className="font-medium text-[#444444] text-sm sm:text-base">
              Try Product/service
            </h1>
          </div>

          <h1 className="py-3 text-sm sm:text-base">
            I am interested in sourcing the following solutions/products? <br />
            (Select Top 5) * Please ensure you have chosen at least one category
            in each section
          </h1>

          <div className="w-full py-2 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {service.map((item, i) => (
              <label key={i} className="flex items-center text-sm sm:text-base">
                <input type="checkbox" />
                <span className="ml-3">
                  {item.text}{" "}
                  <span
                    className={`${item.value ? "text-black" : "text-gray-400"}`}
                  >
                    {item.day}
                  </span>
                </span>
              </label>
            ))}
          </div>

          <div className="w-full flex items-center justify-end border-t border-t-[#E3E3E3] mt-4 pt-4">
            <div className="flex gap-3 flex-wrap">
              <button className="border-2 text-black px-4 py-2 rounded text-sm sm:text-base">
                CANCEL
              </button>
              <button
                className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-3 py-1 rounded text-sm sm:text-base"
                onClick={() => navigate("/Form1")}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstTime;

