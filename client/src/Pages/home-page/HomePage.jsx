import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllReviews } from "../../redux/slices/reviewsSlice";
import ReviewElement from "../../components/review-element/ReviewElement";
import Header from "../../components/Header/Header";
import AddReviewPopup from "../../components/add-review-popup/AddReviewPopup";
import "../home-page/HomePage.css";

function HomePage() {
  const [addReviewPopup, setAddReviewPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { allReviews } = useSelector((state) => state.reviews);
  const handleAddButtonClick = () => {
    setAddReviewPopup(!addReviewPopup);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/restaurants`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setAllReviews(data));
        setLoading(false);
      })
      .catch((err) => {
        if (err.statusText !== "OK") {
          console.log(err);
        }
      });
  }, []);

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
        {loading ? (
          <span>Loading...</span>
        ) : (
          allReviews?.map((review) => {
            return <ReviewElement key={review.id} review={review} />;
          })
        )}
      </div>
    </div>
  );
}

export default HomePage;
