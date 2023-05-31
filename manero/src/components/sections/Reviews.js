import React, { useState } from "react";
import Header from "../sections/Header";
import Image from "../../assets/images/LeaveReview.svg";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = () => {
    console.log("Review Text:", reviewText);
      
    setRating(0);
    setReviewText("");

  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const ReviewInput = ({ value, onChange, placeholder, name }) => {
    return (
      <textarea className="review-baseinput"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      ></textarea>
    );
  };

  const ReviewButton = ({ btnText, handleClick }) => {
    return <button onClick={handleClick}>{btnText}</button>;
  };

  return (
    <div className="container d-flex flex-column">
      <Header
        title={"Leave a review"}
        hasSideIcon={true}
        isMenu={false}
        hasCart={false}
      />
      <div className="revpicture">
        <img src={Image} alt="LeaveReview" />
      </div>
      <div className="vr mx-auto"></div>
      <div className="revText">
        <p>Please Rate the Quality of our service for the order!</p>
      </div>
      <div className="star-rating-review">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </span>
          );
        })}
      </div>
      <p className="revText-small">
        Your comments and suggestions help us improve the service quality better!
      </p>
      <div className="review-input-container">
      <div className="review-text-center-label">
    <label className="review-label">Review</label>
        <ReviewInput
          value={reviewText}
          onChange={handleReviewTextChange}
          placeholder="Enter your review"
          name="review"
        />
      </div>
      </div>
      <div className="review-btn d-flex aligns-items-center justify-content-center">
        <div className="submit-button-wrapper mt-4">
          <ReviewButton btnText="Submit" handleClick={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
