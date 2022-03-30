/* import React from "react";
import "./ReviewElement.css";
import { useNavigate } from "react-router";
function ReviewElement() {
  const navigate = useNavigate();
  return (
    <div
      className="review-element"
      onClick={() => {
        console.log("ok");
      }}
    >
      <p>Name</p>
      <p>Location</p>
      <p>Price range</p>
      <p>reviews</p>
      <button
        className="review-button-update"
        onClick={() => {
          navigate("/update/2");
        }}
      >
        update
      </button>
      <button className="review-button-delete">delete</button>
    </div>
  );
}

export default ReviewElement;
 */
import React from "react";
import "./ReviewElement.css";
const ReviewElement = () => {
  return (
    <div className="review-card">
      <div className="card-top">
        <p className="card-name">Name</p>
        <div className="price-range">$$$$$</div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div>Location</div>
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
