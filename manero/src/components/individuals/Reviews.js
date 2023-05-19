import React, { useState} from "react";

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
    <div className="star-rating">
        {[...Array(5)].map((star, index) => {
        index += 1;
    return (
        <span
        type="button"
        key={index}
        className={index <= (hover || rating) ? "on" : "off"}
        onClick={() => setRating(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(rating)}>
        <span className="star">&#9733;</span>
        </span>
    );
    })}
      </div>
        <div className="review-buttons">
          <input 
              as="textarea"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              >
            </input>
          <button variant="success" onClick={e => submitReview(e)}>submit</button>
        </div>
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
