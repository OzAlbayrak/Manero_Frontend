import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerCreditCard } from "../../utilities/api";
import Header from "./Header";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";

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

    console.log("token", token);
    console.log("res", res);

    if (validateForm(res)) {
      const result = await registerCreditCard(res, token);

      console.log("result:", result);

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
    <div>
      {" "}
      <Header
        title={"Add a new card"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      ></Header>
      <form className="inputcontainer" onSubmit={handleSubmit} noValidate>
        <p className="text-danger text-center mx-auto">{error}</p>
        <InputField
          type={"text"}
          name={"cardName"}
          nameid={"cardName"}
          placeholder={"Enter name on card"}
          labelName={"name"}
        ></InputField>
        <InputField
          type={"text"}
          name={"cardNumber"}
          nameid={"cardNumber"}
          placeholder={"Enter card number"}
          labelName={"card number"}
        ></InputField>
        <InputField
          type={"text"}
          name={"expireMonth"}
          nameid={"expireMonth"}
          placeholder={"Enter expire month"}
          labelName={"mm"}
        ></InputField>
        <InputField
          type={"text"}
          name={"expireYear"}
          nameid={"expireYear"}
          placeholder={"Enter expire year"}
          labelName={"yy"}
        ></InputField>
        <InputField
          type={"text"}
          name={"cvvCode"}
          nameid={"cvvCode"}
          placeholder={"Enter CVV"}
          labelName={"CVV"}
        ></InputField>
        <div className="text-center mx-auto px-3">
          <Button btnText={"SAVE CARD"} btnType="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewCreditCard;
