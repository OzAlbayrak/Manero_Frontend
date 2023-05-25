import React, { useState} from "react";
import Image from "../../assets/images/LeaveReview.svg";

const Reviews = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(false);
  const [hover, setHover] = useState(0);

    const onClick = (rating) => {
      setRating(true);
      setHover(rating);
    };
  
    const submitReview = (e) => {
      e.preventDefault();
      const newrating = {
        rating: hover,
        description: review,
      };
      setReviews([...reviews, newrating]);
    };

    
const deleteReview = (e, index) => {
  e.preventDefault();
  const clone = [...reviews];
  const newState = clone.filter((x, i) => i !== index);
  setReviews(newState);
};
  
  return (
    
<section className="Review-Container">
<div className="revpicture">
<img  src={Image} alt="LeaveReview"></img>
</div>
<div className='vr mx-auto'></div>
<div className="revText"><p>Please Rate the Queality of our service for the order!</p></div>
  <div className="star-rating">
      {[...Array(5)].map((star, index) => {
      index += 1;
  return (
      <span type="button" key={index} className={index <= (hover || rating) ? "on" : "off"}
      onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
      <span className="star">&#9733;</span>
      </span>);})}
  </div>
  <p className="revText-small">Your comments and suggestions help us improve the service quality better!</p>

    <div className="review-inputBox">
      <input 
        placeholder="Enter your comment"
        type="text" 
        required="required"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      >
      </input>
    </div>
    <div className="review-btn"><button className="review-btn-submit" variant="success" onClick={e => submitReview(e)}>submit</button></div>

    <div> 
      {reviews.map((r, rIndex) => {
      return (
    <div className="mt-3 mb-3 text-dark">
    <div>
      {[...Array(r.rating)].map((s, sIndex) => {
      return <i className="fas fa-star text-warning" />;
      })}
      <p>{r.description}</p>
    </div>
    <div>
      <button
      variant="danger"
      onClick={(e) => deleteReview(e, rIndex)}>
      Delete
      </button>
    </div>
    </div>
      );
      })}
    </div>
    
</section>

  );
};
export default Reviews;

/*





*/
