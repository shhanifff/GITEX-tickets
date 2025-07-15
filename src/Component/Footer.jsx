import React from "react";

function Footer() {
  return (
    <div className="w-full h-[133px] bg-gradient-to-r from-[#299D3F] to-[#123F22] flex flex-row justify-end gap-4 sm:gap-10 lg:gap-20 pr-4 sm:pr-10 lg:pr-20 items-center sticky bottom-0 z-50">
      <div className="text-white bg-transparent">
        <h1 className="text-lg sm:text-xl lg:text-2xl">
          Total: <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">EUR 0</span> Incl. 19% VAT
          <br />
          <span className="text-base sm:text-lg lg:text-xl">View Ticket summary</span>
        </h1>
      </div>
      <div className="text-[#125113] bg-white px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 text-lg sm:text-xl lg:text-2xl rounded-[7px] font-semibold">
        Buy Now
      </div>
    </div>
  );
}

export default Footer;