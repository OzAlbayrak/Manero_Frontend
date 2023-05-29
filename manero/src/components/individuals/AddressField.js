import React from "react";
import { NavLink } from "react-router-dom";

const AddressField = ({
  icon,
  title,
  streetName,
  postalCode,
  city,
  submitbutton,
  linkTo,
}) => {
  return (
    <div className="field">
      <div className="fieldicon">
        {icon}
        <div className="field-content">
          <p className="head-text">{title}</p>
          <p className="sub-text">
            {streetName}, {postalCode} {city}
          </p>
        </div>
      </div>
      <NavLink to={linkTo}>{submitbutton}</NavLink>
    </div>
  );
};

export default AddressField;
