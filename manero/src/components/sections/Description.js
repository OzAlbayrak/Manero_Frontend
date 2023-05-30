import React, { useEffect, useState } from "react";
import SizeColor from "../individuals/SizeColor.js";
import Button from "../individuals/Button";
import Rating from "../individuals/Rating";
import RatingStars from "../individuals/RatingStars";
import { NavLink, useParams } from "react-router-dom";
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'


export const Description = ({ match }) => {

  const [product, setProduct] = useState({})
  const {addItem} = useShoppingCartContext()
  const { productId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://sijb-cms22-backend.azurewebsites.net/api/Products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } 
      catch (error) {
      }
    };
    fetchProduct();
  }, [productId]);


  return (
    <div className="container">

        <div className="card-body">
        {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
          ) : (
            <p>Loading...</p>
          )}
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
        <Button btnType="submit" btnText={"+ ADD TO CART"} onClick={() => addItem(product)}></Button> 
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