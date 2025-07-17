import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Banner from "../Component/Banner";
import Progress from "../Component/Progress";
import BackgroundImg from "../assets/images/Background.png";
import { useNavigate } from "react-router-dom";

function PromoCode() {
  const navigate = useNavigate();
  const [apply, setApply] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      promoCode: "",
      termsAccepted: false,
      dataConsent: false,
    },
  });

  const promoCode = watch("promoCode");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/Success");
  };

  const handleApplyPromo = () => {
    if (promoCode) {
      setApply(true);
      console.log("code", promoCode);
    }
  };

  return (
    <>
      <Banner />
      <div
        className="w-full min-h-screen bg-cover bg-center px-4 sm:px-0 pb-20"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        <Progress page={5} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl py-5 px-4 sm:px-6">
              <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white text-lg sm:text-xl font-bold px-4 sm:px-5 py-4 sm:py-5 rounded-md mb-6">
                Registration Summary
              </div>

              {apply === false ? (
                <>
                  <div className="text-sm text-black mb-4 border-b border-b-gray-100 flex flex-row justify-between font-medium pb-1">
                    <p>PREMUIM TICKET x 2</p>
                    <p>EUR 40.19</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm text-black mb-4 border-l-2 border-l-[#28A745] bg-green-100 flex flex-col sm:flex-row justify-between font-medium px-3 py-2 gap-2 sm:gap-0">
                    <p>PREMUIM TICKET x 2</p>
                    <div className="flex flex-col text-sm text-left">
                      <del className="text-[#898787]">FREE 0.16</del>
                      <h1>
                        FREE 0.16{" "}
                        <span className="bg-[#299D3F] text-xs font-bold px-2 py-0.5 rounded-[7px]">
                          -15%
                        </span>
                        <span className="uppercase text-[#898787] ml-2">
                          Incl. 19% VAT
                        </span>
                      </h1>
                    </div>
                  </div>
                </>
              )}

              {apply === false ? (
                <div className="text-sm text-black mb-4 border-b border-b-gray-100 flex flex-row justify-between font-medium pb-1">
                  <p>Student Ticket Access On Day 3 Only</p>
                  <p>EUR 50 40 SUBJECT TO APPROVAL Incl. 19% </p>
                </div>
              ) : (
                ""
              )}

              <div className="border border-[#26903B] rounded-md p-3 mb-6 bg-green-50 border-dotted">
                <div>
                  <h1
                    className={`${
                      apply ? "text-black" : "text-[#26903B]"
                    } font-medium`}
                  >
                    Have a promo code?
                  </h1>
                </div>

                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-stretch mt-2 gap-2">
                    <div className="w-full sm:w-[90%]">
                      <input
                        className={`w-full ${
                          apply ? `bg-[#E5E5E5]` : `bg-white`
                        } px-3 py-2 rounded-[4px] placeholder:text-xs border border-gray-300 focus:outline-none focus:border-[#26903B]`}
                        placeholder="Enter Code"
                        {...register("promoCode", {
                          validate: (value) => {
                            if (!value) return true;
                            const onlyLetters = /^[A-Za-z]+$/.test(value);
                            return (
                              onlyLetters || "Only letters (A-Z or a-z) allowed"
                            );
                          },
                        })}
                      />
                      {errors.promoCode && (
                        <p className="text-[#DF1E3B] text-xs mt-1">
                          {errors.promoCode.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="w-full sm:w-[9%] bg-gradient-to-r from-[#9F1413] to-[#000000] text-white rounded-[4px] flex justify-center items-center font-medium py-2"
                      onClick={handleApplyPromo}
                    >
                      APPLY
                    </button>
                  </div>

                  {apply === true ? (
                    <>
                      <div className="w-full flex flex-col gap-3 mt-3">
                        <h1 className="text-[#26903B] font-medium">
                          Promo code "{promoCode}" applied successfully! Applied
                          to 2 lowest-priced tickets!
                        </h1>
                        <div className="w-full bg-white flex flex-col sm:flex-row justify-between px-3 py-2 rounded-md gap-4 sm:gap-0">
                          <div className="flex flex-col">
                            <h1>
                              Promo code applied:{" "}
                              <span className="text-[#26903B] uppercase">
                                {promoCode}
                              </span>
                            </h1>
                            <h1>
                              Promo code applied:{" "}
                              <span className="text-[#26903B] uppercase">
                                15% (EUR 0.06 incl. VAT)
                              </span>
                            </h1>
                            <h1>
                              Applied to:{" "}
                              <span className="text-[#26903B] uppercase">
                                2 lowest priced tickets
                              </span>
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <button
                              type="button"
                              className="border-2 border-[#C7000C] text-[#C7000C] px-3 py-1 font-semibold rounded-[7px] hover:bg-[#C7000C] hover:text-white"
                              onClick={() => {
                                setApply(false);
                                setValue("promoCode", "");
                              }}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {apply === true ? (
                <div className="text-sm text-black mb-4 border-b border-b-gray-100 flex flex-row justify-between font-medium pb-1">
                  <p>Student Ticket Access On Day 3 Only</p>
                  <p>EUR 50 40 SUBJECT TO APPROVAL Incl. 19% </p>
                </div>
              ) : (
                ""
              )}

              {apply === true ? (
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-xl">EUR 300</span>
                    <span className="text-xs text-[#808080]">
                      Incl. 19% VAT
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="px-3 py-1 bg-white border-2 border-black text-black rounded-[7px] font-medium"
                      onClick={() => navigate(-1)}
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-4 py-1.5 rounded-[7px] font-medium"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end mt-4">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-xl">EUR 300</span>
                    <span className="text-xs text-[#808080]">
                      Incl. 19% VAT
                    </span>
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-700 space-y-4 mb-6 mt-6">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    {...register("termsAccepted", {
                      required: "You must accept the terms and conditions",
                    })}
                  />
                  <p>
                    I have read and accept the terms and conditions, Privacy
                    Policy, and consent that attendees under the age of 21 will
                    not be admitted, and admission to the exhibition is
                    restricted to trade and business professionals only, and
                    students above 16 and below 18 can attend only if
                    accompanied by school or faculty member{" "}
                    <span className="text-[#DF1E3B]">*</span>
                  </p>
                </div>
                {errors.termsAccepted && (
                  <p className="text-[#DF1E3B] text-xs mt-1">
                    {errors.termsAccepted.message}
                  </p>
                )}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    {...register("dataConsent", {
                      required: "You must consent to the use of your data",
                    })}
                  />
                  <p>
                    I hereby consent the use of my data by the organiser,
                    exhibitors and sponsors of DWTC & KAOUN International to
                    delivering services and for marketing purposes. I am aware
                    that I can object to the sending of newsletters at any time
                    <span className="text-[#DF1E3B]">*</span>
                  </p>
                </div>
                {errors.dataConsent && (
                  <p className="text-[#DF1E3B] text-xs mt-1">
                    {errors.dataConsent.message}
                  </p>
                )}
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

export default PromoCode;
