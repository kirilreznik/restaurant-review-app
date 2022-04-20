import React from "react";
import "./ReviewElement.css";

const ReviewElement = ({ review }) => {
  return (
    <div className="review-card">
      <div className="card-top">
        <p className="card-name">{review.name}</p>
        <div className="price-range">{"$".repeat(review.price_range)}</div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div>{review.location}</div>
          <div>Reviews</div>
        </div>
        <div className="card-buttons">
          <button className="card-button">update</button>
          <button className="card-button-red">delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewElement;
