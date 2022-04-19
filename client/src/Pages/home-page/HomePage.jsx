import React from "react";
import ReviewElement from "../../components/review-element/ReviewElement";
import Header from "../../components/Header/Header";
import { useState } from "react";
import AddReviewPopup from "../../components/add-review-popup/AddReviewPopup";
import "../home-page/HomePage.css";
function HomePage() {
  const [addReviewPopup, setAddReviewPopup] = useState(false);

  const handleAddButtonClick = () => {
    setAddReviewPopup(!addReviewPopup);
  };

  return (
    <div>
      <AddReviewPopup
        addReviewPopup={addReviewPopup}
        setAddReviewPopup={setAddReviewPopup}
      />
      <div className="home-background">
        <Header />
        {!addReviewPopup && (
          <div className="input-and-button">
            <div className="input-container">
              <label className="input-label">Search a review</label>
              <input className="search-bar"></input>
            </div>
            <div className="button-container">
              <button onClick={handleAddButtonClick} className="orange-button">
                add
              </button>
            </div>
          </div>
        )}
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
