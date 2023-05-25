import React, { useState } from "react";
import SideIcon from "../individuals/SideIcon";
import Promocodes from "../../assets/images/Promocodes.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import Header from './Header';

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
    const response = await fetch("https://sijb-cms22-backend.azurewebsites.net/api/promoCode");
    const data = await response.json();;
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
    <div className='container d-flex flex-column'>
      <Header
				title={'My promocodes'}
				hasSideIcon={true}
				isMenu={false}
				hasCart={false}
			></Header>
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
              labelName={'ENTER THE VOUCHER'}
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