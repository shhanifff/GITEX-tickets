import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Footer({ selectTicket = null }) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    console.log("user select ticket", selectTicket);
    if (selectTicket && Object.keys(selectTicket).length > 0) {
      const totalPrice = Object.values(selectTicket).reduce(
        (acc, x) => acc + x.offPrice * x.Quantity,
        0
      );
      const totalQty = Object.values(selectTicket).reduce(
        (acc, x) => acc + x.Quantity,
        0
      );
      setPrice(totalPrice);
      setQty(totalQty);
    }
  }, [selectTicket]);

  return (
    <div className="w-full h-[133px] bg-gradient-to-r from-[#299D3F] to-[#123F22] flex flex-row justify-end gap-4 sm:gap-10 lg:gap-20 pr-4 sm:pr-10 lg:pr-20 items-center sticky bottom-0 z-50">
      <div className="text-white bg-transparent">
        <h1 className="text-lg sm:text-xl lg:text-2xl">
          Total:{" "}
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            EUR {price}
          </span>{" "}
          Incl. 19% VAT
          <br />
          <span className="text-base sm:text-lg lg:text-xl hover:underline">
            View Ticket summary
          </span>
        </h1>
      </div>
      <div
        className={`text-[#125113] bg-white px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 text-lg sm:text-xl lg:text-2xl rounded-[7px] font-semibold ${
          qty >= 1 ? "cursor-pointer" : "cursor-not-allowed"
        } `}
        onClick={() => (qty >= 1 ? navigate("/Form1") :toast.error("Please select at least one Ticket"))}
      >
        Buy Now {qty ? `(${qty})` : ""}
      </div>
    </div>
  );
}

export default Footer;
