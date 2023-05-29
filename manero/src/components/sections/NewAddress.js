import React, { useState } from "react";
import Header from "./Header";
import InputField from "../individuals/InputField";
import Button from "../individuals/Button";
import { useNavigate } from "react-router-dom";
import { registerAddress } from "../../utilities/api";

const NewAddress = () => {
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
      const result = await registerAddress(res, token);

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
    <div className="newAddress container p-0">
      <Header
        title={"Add a new address"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      ></Header>
      <div className="map-container d-flex justify-content-center mb-3">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41032.943179546244!2d17.97275725980134!3d59.32474523395833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1676985055819!5m2!1sen!2sse"
          width="380"
          height="260"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="inputcontainer" onSubmit={handleSubmit} noValidate>
        <p className="text-danger text-center mx-auto">{error}</p>
        <InputField
          type={"text"}
          name={"title"}
          nameid={"title"}
          placeholder={"Enter title"}
          labelName={"title"}
        ></InputField>
        <InputField
          type={"text"}
          name={"streetName"}
          nameid={"streetName"}
          placeholder={"Enter streetname"}
          labelName={"streetname"}
        ></InputField>
        <InputField
          type={"text"}
          name={"postalCode"}
          nameid={"postalCode"}
          placeholder={"Enter postal code"}
          labelName={"postal code"}
        ></InputField>
        <InputField
          type={"text"}
          name={"city"}
          nameid={"city"}
          placeholder={"Enter city"}
          labelName={"city"}
        ></InputField>
        <div className="text-center mx-auto px-3">
          <Button btnText={"SAVE ADDRESS"} btnType="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
