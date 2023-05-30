import React from "react";
import { NavLink } from "react-router-dom";

const PaymentMethodField = ({ title, icon, submitbutton, linkTo }) => {
  return (
    <div className="field">
      <div className="fieldicon">
        <div className="field-content">
          <p className="head-text ms-3">{title}</p>
        </div>
        <i className={icon} style={{ color: "#0f8955" }}></i>
      </div>
      <NavLink className="me-4" to={linkTo}>
        {submitbutton}
      </NavLink>
    </div>
  );
};

export default PaymentMethodField;
