import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerCreditCard } from "../../utilities/api";
import Header from "./Header";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import image from "../../assets/images/card 2.png";

const NewCreditCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = (res) => {
    if (res !== null) {
      return true;
    } else {
      setError("All fields are required");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData);
    const token = sessionStorage.getItem("apiAccessToken");

    if (validateForm(res)) {
      const result = await registerCreditCard(res, token);

      switch (result.status) {
        case 200:
          navigate("/profile");
          break;

        case 400:
          setError("All fields har required.");
          break;

        default:
          setError("An unknown error occurred.");
      }
    }
  };
  return (
    <div className="container add-new-card p-0">
      <Header
        title={"Add a new card"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      ></Header>
      <div className="vr d-flex mx-auto mb-3 mt-3"></div>
      <div className="slide-container">
        <div className="item-container">
          <img className="card-image" src={image} alt="card" />
          <p className="card-name">FULL NAME</p>
          <p className="card-number">1234 5678 8765 4321</p>
          <p className="card-month">MM</p>
          <p className="card-slash">/</p>
          <p className="card-year">YY</p>
          <p className="card-title">VISA</p>
        </div>
      </div>
      <form className="inputcontainer" onSubmit={handleSubmit} noValidate>
        <p className="text-danger text-center mx-auto">{error}</p>
        <InputField
          type={"text"}
          name={"cardName"}
          nameid={"cardName"}
          labelName={"name"}
        ></InputField>
        <InputField
          type={"text"}
          name={"cardNumber"}
          nameid={"cardNumber"}
          labelName={"card number"}
        ></InputField>
        <div className="expire-cvv">
          <label className="expire-label-month" htmlFor="expireMonth">
            mm
          </label>
          <input
            className="expire-input-month"
            type={"text"}
            name={"expireMonth"}
            id={"expireMonth"}
            maxLength={2}
          />
          <label className="expire-label-year" htmlFor="expireYear">
            yy
          </label>
          <input
            className="expire-input-year"
            type={"text"}
            name={"expireYear"}
            id={"expireYear"}
            maxLength={2}
          />
          <label className="cvv-label" htmlFor="cvv">
            CVV
          </label>
          <input
            className="cvv-input"
            type="password"
            name="cvvCode"
            id="cvvCode"
            maxLength={3}
          />
        </div>
        <div className="text-center mx-auto px-3">
          <Button btnText={"SAVE CARD"} btnType="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewCreditCard;
