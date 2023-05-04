import React, { useState } from 'react';
import TempImage from '../../assets/images/blue-product.png'
import Rating from './Rating'
import UseFetch from './UseFetch';

const ProductCard = ({ product }) => {
  const { data: products } = UseFetch("https://sijb-cms22-backend.azurewebsites.net/api/products/BestSellers/3");
  return ( 
    <div className="col">
      {products?.map((products) => {
        return (
        <div className="card">
        <div className="card-img-container">
          <img src={TempImage} className="card-img-top" alt="..." />
          <div className="card-menu d-xl-none">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-light fa-bag-shopping"></i></button>
          </div>
        </div>
        <div className="card-body">
          <Rating />
            <h5 className="card-title">{products.name}</h5>
            <p className="card-price">{products.price}$</p>
        </div>
    </div>)
      })}
    </div>
  )
}

export default ProductCard