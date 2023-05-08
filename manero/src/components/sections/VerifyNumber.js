import React from "react";
import { useState } from "react";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";

const VerifyNumber = () => {
  const [number, setNumber] = useState("");
  const handleSubmit = () => {
    console.log("hej");
  };

  return (
    <div className="verify-number">
      <div className="media-border">
        <div className="message">
          We have sent you an SMS with a code to number {number}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputcontainer">
            <div className="text-center">
              <InputField
                type="phone"
                name="PHONE NUMBER"
                value={number}
                setValue={setNumber}
              />
              <Button btnType="submit" btnText={"CONFIRM"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyNumber;
