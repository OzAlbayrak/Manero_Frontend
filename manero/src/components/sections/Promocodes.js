import React, { useState } from "react";
import SideIcon from "../individuals/SideIcon";

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
        <a
          className={
            currentLink ? "promo-current-link active" : "promo-current-link"
          }
          href="/"
          onClick={handleCurrentClick}
        >
          Current
        </a>
        <a
          className={usedLink ? "promo-used-link active" : "promo-used-link"}
          href="/"
          onClick={handleUsedClick}
        >
          Used
        </a>
      </div>
      <div>
        <p style={promoCodeColor(20)}>
          20%
          <i
            className="fa-regular fa-copy fa-bounce"
            onClick={copyToClipboard}
          ></i>
        </p>
        <p style={promoCodeColor(25)}>30%</p>
        <p style={promoCodeColor(50)}>49%</p>
      </div>
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
