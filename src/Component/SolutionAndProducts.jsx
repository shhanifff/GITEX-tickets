import React, { useState, useEffect } from "react";
import BannerImg from "../assets/images/Banner.png";
import { toast } from "react-toastify";

function SolutionAndProducts({ show, onClose }) {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(show);
  const isFirstTime = localStorage.getItem("firstTime");

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    setPage(1);
    setShowModal(show);
    setSelectedProducts([]);
    setSelectedServices([]);
  }, [show]);

  if (!showModal) return null;

  const handleApply = () => {
    if (selectedProducts.length === 0 || selectedServices.length === 0) {
      toast.error("Please select at least one Service.");
      return;
    }
    
    // Prepare the selected data to return
    const selectedData = {
      products: selectedProducts.map(index => product[index]),
      services: selectedServices.map(index => service[index]),
    };
    
    setShowModal(false);
    // Pass the selected data back to parent component
    onClose(selectedData);
  };

  const handleCheckboxChange = (type, index) => {
    if (type === "product") {
      const alreadySelected = selectedProducts.includes(index);
      setSelectedProducts((prev) =>
        alreadySelected ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else if (type === "service") {
      const alreadySelected = selectedServices.includes(index);
      setSelectedServices((prev) =>
        alreadySelected ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  const product = [
    { text: "Global Leaders Forum !NEW", day: "(3 Days)", value: true },
    { text: "GITEX Main Stage", day: "", value: "" },
    { text: "Artificial Intelligence & Robotics", day: "(15)", value: false },
    { text: "Future Health !NEW", day: "(2 Days)", value: true },
    { text: "Cybersecurity", day: "(4 Days)", value: true },
    { text: "Future Health !NEW", day: "(2 Days)", value: true },
    { text: "AI Everything", day: "(4 Days)", value: true },
    { text: "Future Health !NEW", day: "(2 Days)", value: true },
  ];

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

  const currentList = page === 1 ? product : service;
  const selectedList = page === 1 ? selectedProducts : selectedServices;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
    >
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[90vh] bg-white rounded-2xl flex flex-col overflow-y-auto">
        {/* Banner Header */}
        <div
          className="w-full rounded-t-2xl shadow-lg p-4 sm:p-6 relative flex items-center justify-between text-white"
          style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-sm sm:text-base font-bold">
            SELECT SOLUTIONS/PRODUCTS
          </h1>
          <button
            onClick={() => {
              if (isFirstTime == "false") {
                onClose(null); 
              }
            }}
            className="text-white border border-white p-2 rounded-full hover:bg-white hover:text-black transition flex justify-center items-center"
          >
            <i className="bx bx-x text-lg" />
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col px-4 sm:px-6 py-4">
          <div className="w-full h-14 sm:h-16 border rounded-lg border-[#9D9C9C] flex items-center px-3">
            <h1 className="font-medium text-[#444444] text-sm sm:text-base">
              Try Product/service
            </h1>
          </div>

          <h1 className="py-3 text-sm sm:text-base">
            I am interested in sourcing the following solutions/products? <br />
            (Select Top 5) * Please ensure you have chosen at least one category
            in each section
          </h1>

          <div
            className={`w-full px-1 py-2 gap-2 ${
              page === 2 ? "grid grid-cols-1 sm:grid-cols-2" : "flex flex-col"
            }`}
          >
            {currentList.map((item, i) => {
              const checkboxId = `${page === 1 ? "product" : "service"}-${i}`;
              const isChecked = selectedList.includes(i);

              return (
                <label
                  key={i}
                  htmlFor={checkboxId}
                  className="flex items-center text-sm sm:text-base"
                >
                  <input
                    id={checkboxId}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleCheckboxChange(
                        page === 1 ? "product" : "service",
                        i
                      )
                    }
                  />
                  <span className="ml-3">
                    {item.text}{" "}
                    <span
                      className={`${
                        item.value ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {item.day}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>

          {/* Footer Buttons */}
          <div className="w-full flex items-center justify-end border-t border-t-[#E3E3E3] mt-4 pt-4">

            <div className="flex gap-3 flex-wrap">
              {page !== 1 && (
                <button
                  className="border-2 text-black px-3 py-1 rounded text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setPage(page - 1)}
                  disabled={isFirstTime === "true"}
                >
                  CANCEL
                </button>
              )}
              <button
                className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-3 py-1 rounded text-sm sm:text-base"
                onClick={() => {
                  if (page === 1 && selectedProducts.length === 0) {
                    toast.error("Please select at least one Product.");
                    return;
                  }
                  page === 1 ? setPage(page + 1) : handleApply();
                }}
              >
                {page === 1 ? "NEXT" : "APPLY"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionAndProducts;