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

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`https://example.com/api/voucher/${voucherCode}`);
    const data = await response.json();
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
            {voucherData && (
              <div>
                <p>Valid: {voucherData.valid ? 'Yes' : 'No'}</p>
                <p>Expired: {voucherData.expired ? 'Yes' : 'No'}</p>
                <p>Used: {voucherData.used ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoVoucher;