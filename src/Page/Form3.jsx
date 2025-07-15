/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Banner from "../Component/Banner";
import Background from "../assets/images/Background.png";
import Progress from "../Component/Progress";
import BannerImg from "../assets/images/Banner.png";
import Logos from "../assets/images/FormLogo.png";
import SolutionAndProducts from "../Component/SolutionAndProducts";
import { useNavigate } from "react-router-dom";

function Form3() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      secondName: "",
      countryOfResidence: "",
      region: "",
      email: "",
      confirmEmail: "",
      nationality: "",
      mobileNumber: "",
      countryCode: "+91",
      companyName: "",
      jobTitle: "",
      companyType: "",
      industry: "",
      workshops: Array(12).fill(false), // Initialize workshops array with false values
    },
  });

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

  const onSubmit = (data) => {
    console.log(data);
    navigate("/PromoCode");
  };

  return (
    <>
      <Banner login="Login" />

      {showModal && (
        <SolutionAndProducts
          show={true}
          bgColor={"bg-black/40"}
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

        <form onSubmit={handleSubmit(onSubmit)}>
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
                    {
                      label: "First name",
                      name: "firstName",
                      required: true,
                    },
                    {
                      label: "Second name",
                      name: "secondName",
                      required: true,
                    },
                    {
                      label: "Country of residence",
                      name: "countryOfResidence",
                      type: "select",
                      required: true,
                      options: ["India", "UAE", "Germany"],
                    },
                    {
                      label: "Region",
                      name: "region",
                      type: "select",
                      options: ["Asia", "Europe", "Middle East"],
                    },
                    {
                      label: "Email address",
                      name: "email",
                      required: true,
                      type: "email",
                    },
                    {
                      label: "Confirm Email address",
                      name: "confirmEmail",
                      required: true,
                      validate: (value) =>
                        value === watch("email") || "Emails do not match",
                    },
                    {
                      label: "Nationality",
                      name: "nationality",
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
                          {...register(field.name, {
                            required: field.required
                              ? `${field.label} is required`
                              : false,
                          })}
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
                          type={field.type || "text"}
                          {...register(field.name, {
                            required: field.required
                              ? `${field.label} is required`
                              : false,
                            validate: field.validate,
                          })}
                          className="w-full h-10 border rounded-[6px] border-[#D3D3D3] px-3"
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-[#DF1E3B] text-xs mt-1">
                          {errors[field.name].message}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label>
                      Mobile Number <span className="text-[#DF1E3B]">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        {...register("countryCode", {
                          required: "Country code is required",
                        })}
                        className="w-28 h-10 border rounded-[6px] border-[#D3D3D3] px-2 text-gray-700"
                        defaultValue="+91"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+49">🇩🇪 +49</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Enter mobile number"
                        {...register("mobileNumber", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^\d+$/,
                            message: "Please enter a valid mobile number",
                          },
                        })}
                        className="flex-1 h-10 border rounded-[6px] border-[#D3D3D3] px-3"
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[#DF1E3B] text-xs mt-1">
                        {errors.mobileNumber.message}
                      </p>
                    )}
                  </div>

                  {[
                    {
                      label: "Company name",
                      name: "companyName",
                      required: true,
                    },
                    { label: "Job title", name: "jobTitle", required: true },
                    {
                      label: "Company type",
                      name: "companyType",
                      type: "select",
                      required: true,
                      options: ["Startup", "Enterprise", "Government"],
                    },
                    {
                      label: "Industry",
                      name: "industry",
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
                          {...register(field.name, {
                            required: field.required
                              ? `${field.label} is required`
                              : false,
                          })}
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
                          {...register(field.name, {
                            required: field.required
                              ? `${field.label} is required`
                              : false,
                          })}
                          className="w-full h-10 border rounded-[6px] border-[#D3D3D3] px-3"
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-[#DF1E3B] text-xs mt-1">
                          {errors[field.name].message}
                        </p>
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
                    type="button"
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
                    <span className="text-[#6F6969]">
                      (Maximum 6 can Select, at least 1 required)
                    </span>
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
                          {...register(`workshops.${index}`, {
                            validate: (value) => {
                              const selectedWorkshops = watch("workshops") || [];
                              const selectedCount = selectedWorkshops.filter(
                                (item) => item
                              ).length;
                              if (selectedCount === 0) {
                                return "At least one workshop must be selected";
                              }
                              if (selectedCount > 6) {
                                return "You can select a maximum of 6 workshops";
                              }
                              return true;
                            },
                          })}
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
                  {errors.workshops && (
                    <p className="text-[#DF1E3B] text-xs mt-1">
                      {errors.workshops.message ||
                        "You must select at least one workshop and no more than 6"}
                    </p>
                  )}
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
                      {watch("firstName") || "FULL NAME"}
                    </h1>
                    <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                      {watch("jobTitle") || "JOB TITLE"}
                    </h1>
                    <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                      {watch("companyName") || "COMPANY NAME"}
                    </h1>
                    <h1 className="text-sm sm:text-base text-[#D4D4D4]">
                      {watch("countryOfResidence") || "COUNTRY OF RESIDENCE"}
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

          <div className="w-full flex justify-center mt-6 gap-5">
            <button
              type="button"
              className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] px-6 py-2 text-white rounded-md text-sm sm:text-base font-semibold"
              onClick={() => navigate(-1)}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#27963D] to-[#134323] px-6 py-2 text-white rounded-md text-sm sm:text-base font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <Banner />
    </>
  );
}

export default Form3;