import React from "react";
import "./ReviewElement.css";
import { useNavigate } from "react-router";
function ReviewElement() {
  const navigate = useNavigate();
  return (
    <div className="review-element">
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
