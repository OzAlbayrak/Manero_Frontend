import React, { useState, useEffect } from "react";
import Promocodes from "../../assets/images/Promocodes.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { usePromoCodeContext } from "../../contexts/PromoCodeContext";

const PromoCode = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [validationResult, setValidationResult] = useState(null);
  const { promoCode, addPromoCode, removePromoCode } = usePromoCodeContext();

  const handleInputChange = (event) => {
    setVoucherCode(event.target.value);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://sijb-cms22-backend.azurewebsites.net/api/promoCode"
      );
      const data = await response.json();
      console.log("API-svar:", data);

      // Kontrollera om värdekoden finns i listan
      const voucherExists = data.some((item) => item.name === voucherCode);

      if (voucherExists) {
        setValidationResult({ valid: true });
        addPromoCode(voucherCode);
        window.location.href = 'https://victorious-sea-00fa7bc03.3.azurestaticapps.net/Cart';
      } else {
        setValidationResult({ valid: false });
      }
      setVoucherCode("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timer;
    if (validationResult) {
      timer = setTimeout(() => {
        setValidationResult(null);
      }, 1200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [validationResult]);

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
        <div className="container d-flex flex-column">
          {validationResult && (
            <div className="promo-validation">
              {validationResult.valid ? (
                <p className="promo-valid">Valid</p>
              ) : (
                <p className="promo-expired">Invalid</p>
              )}
            </div>
          )}
        </div>
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
        </form>
      </div>
    </div>
  );
};

export default PromoCode;
