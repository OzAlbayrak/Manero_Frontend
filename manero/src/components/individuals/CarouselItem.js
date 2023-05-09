import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const CarouselItem = ({ headline1, headline2, content, content2 }) => {
  return (
    <div>
      <div>
        <div className="title-1 text-center">
          {headline1} <br /> {headline2}{" "}
        </div>
        <div className="content text-center">
          {content}
          <br />
          {content2}
        </div>
        <div className="d-flex justify-content-center">
          <NavLink className="button-container" to="/signin">
            <Button btnText={"GET STARTED"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
