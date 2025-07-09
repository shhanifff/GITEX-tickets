import React from "react";
import Banner from "../Component/Banner";
import Progress from "../Component/Progress";

function PromoCode() {
  return (
    <>
      <Banner  />
      <div className="">
        <Progress page={5} />
        Promode
      </div>
      <Banner />
    </>
  );
}

export default PromoCode;
