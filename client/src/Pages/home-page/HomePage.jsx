import React from "react";
import ReviewElement from "../../components/review-element/ReviewElement";
function HomePage() {
  return (
    <div>
      <div className="home-background">
        <div className="input-container">
          <label className="input-label">Search a review</label>
          <input className="search-bar"></input>
        </div>
      </div>
      <div className="explore-text">
        <p>Explore reviews</p>
      </div>
      <div className="review-container">
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
        <ReviewElement />
      </div>
    </div>
  );
}

export default HomePage;
