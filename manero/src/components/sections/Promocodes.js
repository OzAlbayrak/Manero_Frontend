import React, { useState } from "react";
import SideIcon from "../individuals/SideIcon";
import EmptyImg from "../../assets/images/empty-img.svg";

const PromoCodes = () => {
  const [currentLink, setCurrentLink] = useState(true);
  const [usedLink, setUsedLink] = useState(false);

  const handleCurrentClick = () => {
    setCurrentLink(true);
    setUsedLink(false);
  };

  const handleUsedClick = () => {
    setCurrentLink(false);
    setUsedLink(true);
  };

  const copyToClipboard = () => {
    const promoCode = "promokoder här";
    console.log("OK!");
    navigator.clipboard.writeText(promoCode);
  };

  return (
    <div>
      <div className="top-back-and-text">
        <SideIcon />
        <h1 className="promo-head">My promocodes</h1>
      </div>
      <div className="voucher-link">
        <a className={currentLink ? "promo-current-link active" : "promo-current-link"} href="/" onClick={handleCurrentClick}>Current</a>
        <a className={usedLink ? "promo-used-link active" : "promo-used-link"} href="/"onClick={handleUsedClick}>Used</a>
      </div>
      <hr />
            <div className='containerpro'>
                <div  >
                </div>
                <img src={EmptyImg} alt='EmptyImg' />

                <div className='promo-company-info'>
                    <p className='promo-company-name'>Acme Co.</p>
                    <h3 className='promored' style={promoCodeColor(50)}>50% off</h3>
                    <p className='promo-validation'>Valid until June 30, 2024</p>
                </div>
                <i class="fa-light fa-copy" onClick={copyToClipboard}></i>
            </div>
            <hr />
            <div className='containerpro'>
                <div  >
                </div>
                <img src={EmptyImg} alt='empty' />
                <div className='promo-company-info'>
                    <p className='promo-company-name'>Abstergo Ltd.</p>
                    <h3 className='promoyellow' style={promoCodeColor(30)}>30% off</h3>
                    <p className='promo-validation'>Valid until August 30, 2023</p>
                </div>
                <i class="fa-light fa-copy" onClick={copyToClipboard}></i>
            </div>
            <hr />
            <div className='containerpro'>
                <div  >
                </div>
                <img src={EmptyImg} alt='empty' />
                <div className='promo-company-info'>
                    <p className='promo-company-name'>Barone LLC.</p>
                    <h3 className='promoyellow' style={promoCodeColor(15)}>15% off</h3>
                    <p className='promo-validation'>Valid until December 31, 2023</p>
                </div>
                <i class="fa-light fa-copy" onClick={copyToClipboard}></i>
            </div>
            <hr />
    </div>
  );
};

function promoCodeColor(percent) {
  if (percent <= 15) {
    return { color: "green" };
  } else if (percent >= 50) {
    return { color: "red" };
  } else {
    return { color: "orange" };
  }
}

export default PromoCodes;
