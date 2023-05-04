import React from 'react'
import Image from '../../assets/images/img-showcase.png'

const Showcase = () => {
  return (
    <section className="showcase">
        
        <div className="container">
            <div className="content">
            <div className="titles">
                    <p className="title-1">Welcome To Manero! 50% off</p>
                </div> 
            </div>
            <img src={Image} alt="" />
        </div>
    </section>
  )
}

export default Showcase