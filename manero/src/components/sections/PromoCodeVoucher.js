import React, { useState, useEffect } from "react";
import Header from './Header';
import EmptyImg from "../../assets/images/empty-img.svg";
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();
  
  
  const copyToClipboard = async (promoId) => {
    try {
      const promo = promocodes.find((promo) => promo.id === promoId);
      if (promo) {
        await navigator.clipboard.writeText(promo.name);
        setCopiedText((prevState) => ({
          ...prevState,
          [promoId]: true,
        }));
        setTimeout(() => {
          setCopiedText((prevState) => ({
            ...prevState,
            [promoId]: false,
          }));
          window.location.href = 'https://victorious-sea-00fa7bc03.3.azurestaticapps.net/Promocode';
        }, 1200);
      }
    } catch (error) {
      console.error("Error copying promo code", error);
    }
  };
  

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://sijb-cms22-backend.azurewebsites.net/api/promoCode")
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setPromocodes(data); // Uppdatera promokoderna med API-data
        setLoading(false);
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

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
{loading ? (
  <p>Loading...</p>
) : error ? (
  <p>Error: {error}</p>
) : (
  promocodes.map((promo) => (
    <div key={promo.id} className="containerpro">
      <img src={EmptyImg} alt="empty" />
      <div className="promo-company-info">
        <p className="promo-company-name">{promo.name}</p>
        <h3 className="promored" style={promoCodeColor(promo.discount * 100)}>
          {promo.discount * 100}% off
        </h3>
        <p className="promo-validation">Valid to {new Date(promo.expiryDate).toISOString().split('T')[0]}</p>
        {copiedText[promo.id] && <span className="copied-message">Copied</span>}
      </div>
      <i className="fa-light fa-copy promo-copy-btn" onClick={() => copyToClipboard(promo.id)}></i>
      <hr />
    </div>
  ))
)}

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