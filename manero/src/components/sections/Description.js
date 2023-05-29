import React, { useEffect, useState } from "react";
import SizeColor from "../individuals/SizeColor.js";
import Button from "../individuals/Button";
import Rating from "../individuals/Rating";
import RatingStars from "../individuals/RatingStars";
import { NavLink, useParams } from "react-router-dom";
export const Description = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://sijb-cms22-backend.azurewebsites.net/api/Products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
  }, [])

  
  return (
    <div className="description-container">

      {id}

        <div className="card-body">
          <RatingStars />
            <h5 className="card-title">{product.name}</h5>
            <p className="card-price">{product.price}$</p>
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
                <NavLink to="/reviews"> <p>View All <i className="fa-solid fa-chevron-right"></i></p></NavLink>
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
      <hr />
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

/*
const imgURL = 
fetch(imgURL)
  .then(response => response.blob())
  .then(blob => {
    document.getElementById('my-img').src = URL.createObjectURL(blob)
  })
<img id="my-img" />
*/