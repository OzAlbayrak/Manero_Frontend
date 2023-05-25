import React, { useState, useEffect } from "react";
import Header from './Header';
import EmptyImg from "../../assets/images/empty-img.svg";

const PromoCodesVoucher = () => {
  const [currentLink, setCurrentLink] = useState("");
  const [usedLink, setUsedLink] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [promocodes, setPromocodes] = useState([]);

  const handleCurrentClick = () => {
    setCurrentLink(true);
    setUsedLink(false);
  };

  const handleUsedClick = () => {
    setCurrentLink(false);
    setUsedLink(true);
  };

  const copyToClipboard = async (promoCopy, promoId) => {
    try {
      await navigator.clipboard.writeText(promoCopy);
      setCopiedText((prevState) => ({
        ...prevState,
        [promoId]: true,
      }));
      setTimeout(() => {
        setCopiedText((prevState) => ({
          ...prevState,
          [promoId]: false,
        }));
      }, 1200);
    } catch (error) {
      console.error("Error copying promo code", error);
    }
  };

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const fetchPromoCodes = async () => {
    try {
      const response = await fetch("https://sijb-cms22-backend.azurewebsites.net/api/promoCode");
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Felsökning: Skriv ut datan i konsolen
        const promoCodeNames = data.value.map((code) => code.name);
        setPromocodes(promoCodeNames);
      } else {
        console.log("Failed to fetch");
      }
    } catch (error) {
      console.log("Error promocodes", error);
    }
  };

  return (
    <div className='container d-flex flex-column'>
      <Header
				title={'My promocodes'}
				hasSideIcon={true}
				isMenu={false}
				hasCart={false}
			></Header>
      <div className="voucher-link">
        <a className={ currentLink ? "promo-current-link active" : "promo-current-link" } href="" onClick={handleCurrentClick}>Current</a>
        <a className={usedLink ? "promo-used-link active" : "promo-used-link"} href="/" onClick={handleUsedClick}>Used</a>
      </div>
      <hr />
      <div className="containerpro">
        <img src={EmptyImg} alt="EmptyImg" />
        <div className="promo-company-info">
          <p className="promo-company-name">Acme Co.</p>
          <h3 className="promored" style={promoCodeColor(50)}>50% off</h3>
          <p className="promo-validation">Valid until June 30, 2024</p>
        </div>
        <i className="fa-light fa-copy promo-copy-btn" onClick={() => copyToClipboard(promocodes[0], "promo1")}></i>
      </div>
      {copiedText["promo1"] && <span className="copied-message">Copied</span>}
      <hr />
      <div className="containerpro">
        <img src={EmptyImg} alt="empty" />
        <div className="promo-company-info">
          <p className="promo-company-name">Abstergo Ltd.</p>
          <h3 className="promoyellow" style={promoCodeColor(30)}>30% off</h3>
          <p className="promo-validation">Valid until August 30, 2023</p>
        </div>
        <i className="fa-light fa-copy promo-copy-btn" onClick={() => copyToClipboard(promocodes[1], "promo2")}></i>
      </div>
      {copiedText["promo2"] && <span className="copied-message">Copied</span>}
      <hr />
      <div className="containerpro">
        <img src={EmptyImg} alt="empty" />
        <div className="promo-company-info">
          <p className="promo-company-name">Barone LLC.</p>
          <h3 className="promoyellow" style={promoCodeColor(15)}>15% off</h3>
          <p className="promo-validation">Valid until December 31, 2023</p>
        </div>
        <i className="fa-light fa-copy promo-copy-btn" onClick={() => copyToClipboard(promocodes[2], "promo3")}></i>
      </div>
      {copiedText["promo3"] && <span className="copied-message">Copied</span>}
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

export default PromoCodesVoucher;
