import React from "react";
import SizeColor from "../individuals/SizeColor.js";
import Button from "../individuals/Button";
import Rating from "../individuals/Rating";
import StarRating from "../individuals/RatingStars";
import { NavLink } from "react-router-dom";

export const Description = () => {
  return (
    <div className="description-container">
        <p>Knitted summer top</p>
        <i class="fa-thin fa-heart"></i>      
      <div>
        <StarRating /> <span>(23)</span>
        <p>$37.88</p>
      </div>
      <div>
        <SizeColor />
      </div>
      <div>
        Description
        <p>
          Här ska det stå en massa text om produkten. Vi har skor, väskor och en
          massa kläder samt andra grejer man behöver. Köp denna vara den är
          Fantastisk!!!!!
        </p>
      </div>
        <Button btnType="submit" btnText={"+ ADD TO CART"} />
        <div style={{justifyContent: "end"}}>
                <p>Reviews (23)</p>
                <NavLink to="/AllReviewsView"> <p>View All <i className="fa-solid fa-chevron-right"></i></p></NavLink>
        </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Anette Black</p>
          </div>
          <div className="col">
            <p>Fantastisk produkt. Jag älskar den. Rekomenderar starkt.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Jenny Wilson</p>
          </div>
          <div className="col">
            <p>Gör det den ska. Helt okej produkt. Jag kan rekomendera den.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
