import React from "react";
import VerifyNumber from "../components/sections/VerifyNumber";
import Header from "../components/sections/Header";

const VerifyNumberView = () => {
  return (
    <div className="container verify-number">
      <Header title={"Verify your phone number"} hasSideIcon={true} />
      <VerifyNumber />
    </div>
  );
};

export default VerifyNumberView;
