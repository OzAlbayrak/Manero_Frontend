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
      <div className="descriptionpage">

        <div className="card-body">
        {product ? (
        <div>
          <img src={product.imageName}  alt='...'/>
          <p className="productname">{product.name}</p>
          <p>${product.price}</p>
        </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>


      <div>
        <SizeColor />
      </div>
      <br></br>
      <div>
      <h5>Description</h5>
            
      <p>{product.description}</p>
      </div>
      
        <Button btnType="submit" btnText={"+ ADD TO CART"} onClick={() => addItem(product)}></Button> 
        <br/>
        <div className="reviews-viewall">
           <p className="productname">Reviews (23)</p>
        <NavLink to="/reviews" className="viewAllLink">   <p>View all <i className="fa-solid fa-chevron-right"></i></p></NavLink>
        </div>
      </div>
      <div className="d-grid justify-content-center align-items-center">
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
      <hr />
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