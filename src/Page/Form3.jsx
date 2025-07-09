import React, { useState } from "react";
import Banner from "../Component/Banner";
import Background from "../assets/images/Background.png";
import Progress from "../Component/Progress";
import BannerImg from "../assets/images/Banner.png";
import Logos from "../assets/images/FormLogo.png";
import SolutionAndProducts from "../Component/SolutionAndProducts";
import { useNavigate } from "react-router-dom";

function Form3() {
  const navigate = useNavigate();

  const items = [
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

  const [showModal, setShowModal] = useState(false);
  const [mainAndSub, setMainAndSub] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Banner login="Login" />

      {showModal && (
        <SolutionAndProducts
          show={true}
          onClose={() => {
            setShowModal(false);
            setMainAndSub(true);
          }}
        />
      )}

      <div
        className="bg-[#FAFAFA] w-full min-h-screen bg-cover bg-center pb-20 px-4 sm:px-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Progress page={3} />

        <div className="max-w-7xl mx-auto mt-8 bg-white rounded-lg shadow p-4 md:p-6 lg:p-10 border border-[#579B29]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-start">
            <div className="w-full lg:w-[65%] shadow rounded-lg">
              <div className="w-full h-20 sm:h-24 rounded-t-lg bg-gradient-to-r from-[#299D3F] to-[#123F22] px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
                  Registration Information 3
                </h1>
                <div className="bg-white/5 text-white px-3 py-1 font-light border border-white rounded-md text-xs sm:text-sm text-center">
                  PREMIUM TICKET - FREE Incl. 19% VAT
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 px-6 py-5">
                {[
                  { label: "First name", required: true },
                  { label: "Second name", required: true },
                  {
                    label: "Country of residence",
                    type: "select",
                    required: true,
                    options: ["India", "UAE", "Germany"],
                  },
                  {
                    label: "Region",
                    type: "select",
                    options: ["Asia", "Europe", "Middle East"],
                  },
                  { label: "Email address", required: true },
                  { label: "Confirm Email address" },
                  {
                    label: "Nationality",
                    type: "select",
                    options: ["Indian", "Emirati", "German"],
                  },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <label>
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-[#DF1E3B]">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        className="w-full h-10 border rounded-[6px] border-[#D3D3D3] text-gray-500 px-5"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        {field.options.map((opt, idx) => (
                          <option key={idx} value={opt.toLowerCase()}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        className="w-full h-10 border rounded-[6px] border-[#D3D3D3]"
                      />
                    )}
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label>
                    Mobile Number <span className="text-[#DF1E3B]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      className="w-28 h-10 border rounded-[6px] border-[#D3D3D3] px-2 text-gray-700"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        🇮🇳 +91
                      </option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      className="flex-1 h-10 border rounded-[6px] border-[#D3D3D3] px-3"
                    />
                  </div>
                </div>

                {[
                  { label: "Company name", required: true },
                  { label: "Job title", required: true },
                  {
                    label: "Company type",
                    type: "select",
                    required: true,
                    options: ["Startup", "Enterprise", "Government"],
                  },
                  {
                    label: "Industry",
                    type: "select",
                    required: true,
                    options: ["Technology", "Healthcare", "Finance"],
                  },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <label>
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-[#DF1E3B]">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        className="w-full h-10 border rounded-[6px] border-[#D3D3D3] text-gray-500 px-3"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        {field.options.map((opt, idx) => (
                          <option key={idx} value={opt.toLowerCase()}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        className="w-full h-10 border rounded-[6px] border-[#D3D3D3]"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4">
                <p className="text-sm sm:text-base">
                  What products & services are you interested in?{" "}
                  <span className="text-[#DF1E3B]">*</span>
                </p>
                <button
                  className="bg-gradient-to-r from-[#AB0202] to-[#240102] text-white uppercase text-xs rounded-[7px] py-1 px-3"
                  onClick={handleModal}
                >
                  select <span className="font-bold">Solutions/Products</span>
                </button>
              </div>

              {mainAndSub && (
                <div className="w-full px-4 sm:px-6 mt-3">
                  <div className="mb-4">
                    <h1 className="font-semibold text-sm sm:text-base">
                      Main Categories
                    </h1>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                      <p className="bg-[#5E3169] text-white px-3 py-1 rounded-2xl font-semibold text-xs sm:text-sm">
                        Artificial Intelligence & Robotics
                      </p>
                      <p className="bg-[#5E3169] text-white px-3 py-1 rounded-2xl font-semibold text-xs sm:text-sm">
                        Artificial Intelligence & Robotics
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-sm sm:text-base">
                      Sub Categories
                    </h1>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                      <p className="bg-[#F5F5F5] border font-semibold border-[#D0D0D0] text-[#616161] px-3 py-1 rounded-2xl text-xs sm:text-sm">
                        Edge Computing
                      </p>
                      <p className="bg-[#F5F5F5] border font-semibold border-[#D0D0D0] text-[#616161] px-3 py-1 rounded-2xl text-xs sm:text-sm">
                        AI & Robotics
                      </p>
                      <p className="bg-[#F5F5F5] border font-semibold border-[#D0D0D0] text-[#616161] px-3 py-1 rounded-2xl text-xs sm:text-sm">
                        Edge Computing
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 px-6 py-5">
                <h1 className="font-medium text-sm sm:text-base">
                  Select Workshop{" "}
                  <span className="text-[#6F6969]">(Maximum 6 can Select)</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  {items.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-green-600"
                      />
                      <h2>
                        {item.text}{" "}
                        <span
                          className={
                            item.value ? "text-black" : "text-gray-400"
                          }
                        >
                          {item.day}
                        </span>
                      </h2>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col bg-white shadow rounded-xl lg:self-start">
              <div
                className="w-full h-20 sm:h-24 rounded-tr-[6px] rounded-tl-[6px] bg-gradient-to-r from-[#5B2A7C] to-[#451D5D] px-3 sm:px-5 flex items-center"
                style={{ backgroundImage: `url(${BannerImg})` }}
              >
                <img
                  src={Logos}
                  alt="Logos"
                  className="w-36 sm:w-48 lg:w-56 object-cover max-w-full h-auto"
                />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="h-10 sm:h-12 bg-gradient-to-r from-[#299D3F] to-[#123F22] rounded-bl-xl rounded-br-xl text-white flex items-center justify-center text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 w-[80%]">
                  Registration Information 3
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 text-center flex-1">
                  <h1 className="text-lg sm:text-xl font-semibold text-[#D4D4D4]">
                    FULL NAME
                  </h1>
                  <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                    JOB TITLE
                  </h1>
                  <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                    COMPANY NAME
                  </h1>
                  <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                    COUNTRY OF RESIDENCE
                  </h1>
                </div>
                <div className="w-full h-20 sm:h-28 bg-white shadow-2xl flex justify-center items-center flex-col rounded-lg mt-4 sm:mt-6">
                  <h1 className="text-sm sm:text-base text-[#D4D4D4] mb-2">
                    BADGE CATEGORY
                  </h1>
                  <h1 className="text-lg sm:text-xl font-bold tracking-widest">
                    V I S I T O R
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 gap-6">
          <button
            className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] px-6 py-2 text-white rounded-md text-sm sm:text-base font-semibold"
            onClick={() => navigate(-1)}
          >
            Previous
          </button>
          <button
            className="bg-gradient-to-r from-[#27963D] to-[#134323] px-6 py-2 text-white rounded-md text-sm sm:text-base font-semibold"
            onClick={() => navigate("/PromoCode")}
          >
            Next
          </button>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Form3;
