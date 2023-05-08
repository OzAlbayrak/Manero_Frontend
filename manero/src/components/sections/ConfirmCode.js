import React from "react";
import Button from "../individuals/Button";
import { Link } from "react-router-dom";

const ConfirmCode = () => {
  const handleSubmit = () => {
    console.log("hej");
  };

  return (
    <div className="media-border container">
      <div className="text-center">
        <p>Enter your OTP code here.</p>
      </div>
      <div className="d-flex justify-content-center align-items-center digit-group">
        <form onSubmit={handleSubmit} className="position-relative">
          <div className="text-center">
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2"
            >
              <input
                className="m-1 text-center form-control"
                type="text"
                id="first"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="second"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="third"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="fourth"
                maxLength="1"
                minLength="1"
                required
              />
              <input
                className="m-1 text-center form-control"
                type="text"
                id="fifth"
                maxLength="1"
                minLength="1"
                required
              />
            </div>
          </div>
          <div className="text-center mt-3">
            Didn't receive the OPT? <Link className="resend-link">Resend.</Link>
          </div>
          <Button btnType="submit" btnText={"Verify"} />
        </form>
      </div>
    </div>
  );
};

export default ConfirmCode;
