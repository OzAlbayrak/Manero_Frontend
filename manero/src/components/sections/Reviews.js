import React, { useState } from "react";
import Header from "../sections/Header";
import Image from "../../assets/images/LeaveReview.svg";
import StarRating from "../individuals/RatingStars";
import Button from "../individuals/Button";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const rating = event.target.rating.value;

    if (rating > 0) {
      const newReview = {
        comment,
        rating,
      };

      setReviews([...reviews, newReview]);
      setComment("");
    }
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
        <img src={Image} alt="LeaveReview"></img>
      </div>
      <div className="vr mx-auto"></div>
      <div className="revText">
        <p>Please Rate the Quality of our service for the order!</p>
      </div>
      <div className="star-rating">
        <StarRating name="rating" />
      </div>
      <p className="revText-small">
        Your comments and suggestions help us improve the service quality
        better!
      </p>
      <form onSubmit={handleReviewSubmit}>
        <div className="text-center-review-input">
          <label className="baselabel-review-input" />
          <input className="review-input-base" />
        </div>
        <div className="review-btn d-flex aligns-items-center justify-content-center">
            <div className="submit-button-wrapper mt-4">
              <Button
                btnText={"SUBMIT"}
                type={"submit"}
                onClick={handleReviewSubmit}
              />
          </div>
        </div>
      </form>
      <div className="review-list">
        <h3>Reviews:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
