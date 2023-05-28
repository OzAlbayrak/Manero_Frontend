import React from 'react';
import Image from "../../assets/images/red-bull.png";

const Showcase = () => {
  return (
    <section className="showcase">

    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      
      {/* Buttons showing the active picture */}
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    
    {/* Displayed */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
            <div className="content">
            <div className="titles">
                    <p className="title-1">Welcome To Manero! <br/> 50% off</p>
                </div> 
                <div className="col-6">
                </div>
            </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="container">
            <div className="content">
            <div className="titles">
                    <p className="title-1">Welcome To Manero! <br/> 50% extra</p>
                </div> 
                <div className="col-6">

                </div>
            </div>
        </div>
      </div>

      <div className="carousel-item">
      <div className="container">
            <div className="content">
            <div className="titles">
                    <p className="title-1"> Exclusive offer!
                    </p>
                    <img  src={Image} className="redbullpicture"></img> 
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
      </div>
    </div>
    
    {/* Buttons for changing picture */}
    <button
      className="carousel-control-prev carouselbtn"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next carouselbtn"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>
);
      }

export default Showcase
