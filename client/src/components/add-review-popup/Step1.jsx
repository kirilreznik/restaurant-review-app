import React from "react";

const Step1 = ({ setAddReviewPopup, setStep }) => {
  return (
    <div className="popup-inner">
      <div className="inputs">
        <input placeholder="Type name"></input>
        <input placeholder="Type location"></input>
        <select className="price-dropdown">
          <option value={0} defaultValue>
            Select price range
          </option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
          <option value={5}>$$$$$</option>
        </select>
      </div>
      <div className="buttons">
        <button
          className="orange-button"
          onClick={() => {
            setStep(2);
          }}
        >
          next
        </button>
        <button
          className="red-button"
          onClick={() => {
            setAddReviewPopup(false);
          }}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Step1;
