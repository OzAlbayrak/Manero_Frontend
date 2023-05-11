import React, { useState } from "react";
import SideIcon from "../individuals/SideIcon";
import Promocodes from "../../assets/images/Promocodes.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";

const PromoVoucher = () => {

const [voucherCode, setVoucherCode] = useState('');
const [voucherData, setVoucherData] = useState(null);

const handleInputChange = (event) => {
  setVoucherCode(event.target.value);
};

const mockData = {
  valid: true,
  expired: false,
  used: false
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    // const response = await fetch(`https://example.com/api/voucher/${voucherCode}`);
    // const data = await response.json();
    const data = mockData; // testar att köra utan API... Ta bort när vi har API
    setVoucherData(data);
    const isVoucherValid = verifyVoucher(data);
    if (isVoucherValid) {
      console.log('Voucher is Valid');
    } else {
      console.log('Voucher is invalid');
    }
  } catch (error) {
    console.error(error);
  }
};


const verifyVoucher = (data) => {
  if (data.valid && !data.expired && !data.used) {
    return true;
  } else {
    return false;
  }
};

  return (
    <div>
      <div className="top-back-and-text">
        <SideIcon />
        <h1 className="promo-head">My promocodes</h1>
      </div>
      <div className="promocodes-img">
        <img src={Promocodes} alt="Promocodes" />
      </div>
      <div className="promo-rectangle-img">
        <img src={Rectangle} alt="Rectangle" />
      </div>

        <div className="promo-text-h2">
          <h2 className="promo-h2">Your promocode is:</h2>
          <h2 className="promo-h2">promocode</h2>
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
              name={"ENTER THE VOUCHER"}
              value={voucherCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="promo-btn">
            <Button btnType="submit" btnText={"SUBMIT"} />

          </div>
          {voucherData && (
              <div className="promo-validation">
                {voucherData.valid ? (
                  <p className="promo-valid">Valid</p>
                ) : voucherData.expired ? (
                  <p className="promo-expired">Expired</p>
                ) : voucherData.used ? (
                  <p className="promo-used">Used</p>
                ) : null}
              </div>
            )}
        </form>
      </div>
    </div>
  );
};

export default PromoVoucher;