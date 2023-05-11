import React from "react";
import Header from "../components/sections/Header";
import ConfirmCode from "../components/sections/ConfirmCode";

const ConfirmCodeView = () => {
  return (
    <div className="container confirm-code">
      <Header title={"Verify your phone number"} hasSideIcon={true} />
      <ConfirmCode />
    </div>
  );
};

export default ConfirmCodeView;
