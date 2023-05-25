import React, { useState } from "react";
import Promocodes from "../../assets/images/Promocodes.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import Header from "./Header";

const PromoCode = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [validationResult, setValidationResult] = useState(null);

  const handleInputChange = (event) => {
    setVoucherCode(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://sijb-cms22-backend.azurewebsites.net/api/promoCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ voucherCode }),
        }
      );
      const data = await response.json();
      setValidationResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container d-flex flex-column">
      <Header
        title={"My promocodes"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      />
      <div className="promocodes-img">
        <img src={Promocodes} alt="Promocodes" />
      </div>
      <div className="promo-rectangle-img">
        <img src={Rectangle} alt="Rectangle" />
      </div>
      <div className="promo-text-h2">
        <h2 className="promo-h2">You don't have</h2>
        <h2 className="promo-h2">promocodes</h2>
        <h2 className="promo-h2">yet!</h2>
      </div>
      <div className="promo-input">
        <form onSubmit={handleFormSubmit}>
          <div className="inputcontainer">
            <InputField
              nameid={"voucher-code-input"}
              type={"text"}
              name={"voucher"}
              value={voucherCode}
              onChange={handleInputChange}
              placeholder={""}
              labelName={"ENTER THE VOUCHER"}
            />
          </div>
          <div className="promo-btn">
            <Button btnType="submit" btnText={"SUBMIT"} />
          </div>
          {validationResult && (
            <div className="promo-validation">
              {validationResult.valid ? (
                <p className="promo-valid">Valid</p>
              ) : validationResult.expired ? (
                <p className="promo-expired">Expired</p>
              ) : validationResult.used ? (
                <p className="promo-used">Used</p>
              ) : null}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PromoCode;
