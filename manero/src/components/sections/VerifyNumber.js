import React from "react";
import { useState } from "react";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import Sweden from "../../assets/images/sweden.svg";
import Usa from "../../assets/images/usa.svg";
import Japan from "../../assets/images/japan.svg";
import England from "../../assets/images/england.svg";
import Norway from "../../assets/images/norway.svg";
import Finland from "../../assets/images/finland.svg";
import Denmark from "../../assets/images/denmark.svg";

const VerifyNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryFlag, setCountryFlag] = useState(Sweden);

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);

    updateCountryFlag(value);
  };

  const handleSubmit = () => {
    console.log("hej");
  };

  const updateCountryFlag = (phoneNumber) => {
    let flag = "";

    if (phoneNumber.startsWith("+46")) {
      flag = Sweden;
    } else if (phoneNumber.startsWith("+1")) {
      flag = Usa;
    } else if (phoneNumber.startsWith("+81")) {
      flag = Japan;
    } else if (phoneNumber.startsWith("+358")) {
      flag = Finland;
    } else if (phoneNumber.startsWith("+45")) {
      flag = Denmark;
    } else if (phoneNumber.startsWith("+47")) {
      flag = Norway;
    } else if (phoneNumber.startsWith("+44")) {
      flag = England;
    }

    setCountryFlag(flag);
  };

  return (
    <div className="verify-number">
      <div className="media-border">
        <div className="message">
          We have sent you an SMS with a code to number {phoneNumber}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputcontainer">
            <div className="text-center phone-number-input">
              <InputField
                type="text"
                value={phoneNumber}
                name={"PHONE NUMBER"}
                placeholder={"+46 070 123 45 67"}
                onChange={handlePhoneNumberChange}
              />
              {countryFlag && (
                <div
                  className="country-flag"
                  style={{ backgroundImage: `url(${countryFlag})` }}
                />
              )}
              <Button btnType="submit" btnText={"CONFIRM"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyNumber;
