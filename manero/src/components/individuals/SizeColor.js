import React from 'react'
import { useState } from 'react';

 const SizeColor = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
  
  
    return (
      <section >
        <p>Size</p>
        <div>
          <button
            value="xs"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ marginRight:"10px" ,borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            XS
          </button>
          <button            
            value="s"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ marginRight:"10px" ,borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            S
          </button>
          <button           
            value="m"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ marginRight:"10px" ,borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            M
          </button>
          <button
            value="l"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ marginRight:"10px" ,borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            L
          </button>
          <button
            value="xl"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ marginRight:"10px" ,borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            XL
          </button>
          <button
            value="xxl"
            onClick={(e) => setSelectedSize(e.target.value)}
            style={{ borderRadius: "25px", height: "3rem", width: "3rem"}}
          >
            XXL
          </button>
        </div>
        <div>
          <p >Color</p>
          <div>
            <button           
              value="red"
              style={{ marginRight:"1rem" ,borderRadius: "15px", height: "2rem", width: "2rem", backgroundColor: "red"}}
              onClick={(e) => setSelectedColor(e.target.value)}
            >
              
           
   </button>
            <button     
              value="blue"
              style={{marginRight:"1rem" ,borderRadius: "15px", height: "2rem", width: "2rem", backgroundColor: "blue"}}
              onClick={(e) => setSelectedColor(e.target.value)}
  
            >
              
            </button>
            <button
              value="beige"
              style={{ marginRight:"1rem" ,borderRadius: "15px", height: "2rem", width: "2rem", backgroundColor: "beige"}}
              onClick={(e) => setSelectedColor(e.target.value)}
            >
              
            </button>
            <button
              value="dark"
              style={{ marginRight:"1rem" ,borderRadius: "15px", height: "2rem", width: "2rem", backgroundColor: "#383838"}}
              onClick={(e) => setSelectedColor(e.target.value)}
            >
              
            </button>
            <button
              value="black"
              style={{ borderRadius: "15px", height: "2rem", width: "2rem", backgroundColor: "black"}}
              onClick={(e) => setSelectedColor(e.target.value)}
            >
              
            </button>
          </div>
        </div>
      </section>
    );
  };

export default SizeColor