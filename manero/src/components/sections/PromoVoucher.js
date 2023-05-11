import React from "react";
import SideIcon from "../individuals/SideIcon";
import Promocodes from "../../assets/images/Promocodes.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";

const PromoVoucher = () => {
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
        <h2 className="promo-h2">You don't have</h2>
        <h2 className="promo-h2">promocodes</h2>
        <h2 className="promo-h2">yet!</h2>
      </div>
      <div className="promo-input">
        <div className="inputcontainer">
            <InputField 
            name={"ENTER THE VOUCHER"}
            setValue={""}
            />
        </div>
        <div className="promo-btn">
            <Button btnText={"SUBMIT"} />
        </div>
      </div>
    </div>
  );
};

export default PromoVoucher;
