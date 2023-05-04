import React from 'react'
import Image from '../../assets/images/img-showcase.png'

const Showcase2 = () => {
  return (
    <section className="showcase">
        
        <div className="container2">
            <div className="content">
                <div className="titles">
                <p className="title-2">Take 50% off now!</p>
                    <button className="btn btn-theme mt-4">SHOP NOW</button>
                </div>            
            </div>
            <img src={Image} alt="" />
        </div>
    </section>
  )
}

export default Showcase2