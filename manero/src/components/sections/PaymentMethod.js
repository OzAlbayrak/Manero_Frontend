import React, { useEffect } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/images/card 1.png";
import image2 from "../../assets/images/card 2.png";
import PaymentMethodField from "../individuals/PaymentMethodField";
import { useCreditCardContext } from "../../contexts/CreditCardContext";

const PaymentMethod = () => {
  const { creditCards, getUserCreditCards } = useCreditCardContext();
  useEffect(() => {
    getUserCreditCards();
  }, []);

  const images = [image1, image2];

  return (
    <div className="container payment-method p-0">
      <Header
        title={"Payment method"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      ></Header>
      <div className="d-flex flex-direction-column justify-content-between ms-3">
        <p>Cards</p>
        <div className="d-flex flex-direction-column">
          <p className="me-4 fs-7">Add a new card</p>
          <NavLink to="/newcard">
            <i
              className="fa-sharp fa-light fa-plus me-4"
              style={{ color: "black" }}
            ></i>
          </NavLink>
        </div>
      </div>
      <div className="slide-container">
        <div className="card-container ms-3 mb-3 me-1">
          {Array.isArray(creditCards) && creditCards.length > 0 ? (
            creditCards.map((creditcard, index) => (
              <div className="item-container " key={creditcard.creditCardId}>
                <img
                  className="card-image"
                  src={images[index % 2]}
                  alt="card"
                />
                <p className="card-name">{creditcard.cardName}</p>
                <p className="card-number">{creditcard.cardNumber}</p>
                <p className="card-month">{creditcard.expireMonth}</p>
                <p className="card-slash">/</p>
                <p className="card-year">{creditcard.expireYear}</p>
                <p className="card-title">VISA</p>
              </div>
            ))
          ) : (
            <div>No creditcards registered</div>
          )}
        </div>
      </div>
      <PaymentMethodField
        title={"Apple Pay"}
        icon={"fa-regular fa-check ms-2"}
        submitbutton={
          <i
            className="fa-light fa-pen-line fa-xs"
            style={{ color: "black" }}
          ></i>
        }
      />
      <PaymentMethodField
        title={"Pay Pal"}
        icon={"fa-regular fa-check ms-2"}
        submitbutton={
          <i
            className="fa-light fa-pen-line fa-xs"
            style={{ color: "black" }}
          ></i>
        }
      />
      <PaymentMethodField
        title={"Payoneer"}
        submitbutton={
          <i
            className="fa-sharp fa-light fa-plus"
            style={{ color: "black" }}
          ></i>
        }
      />
    </div>
  );
};

export default PaymentMethod;
