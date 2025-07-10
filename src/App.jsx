import React from "react";
import { Route, Routes } from "react-router-dom";
import Ticket from "./Page/Ticket";
import Form1 from "./Page/Form1";
import Form2 from "./Page/Form2";
import Form3 from "./Page/Form3";
import Success from "./Page/Success";
import PromoCode from "./Page/PromoCode";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ticket />} />
        <Route path="/Form1" element={<Form1 />} />
        <Route path="/Form2" element={<Form2 />} />
        <Route path="/Form3" element={<Form3 />} />
        <Route path="/PromoCode" element={<PromoCode />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
