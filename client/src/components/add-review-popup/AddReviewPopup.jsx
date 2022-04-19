import React from "react";
import { useEffect, useState } from "react";
import "./AddReviewPopup.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
const AddReviewPopup = ({ addReviewPopup, setAddReviewPopup }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (addReviewPopup) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
      document.body.style.marginRight = "19px";
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.position = "absolute";
    }
  }, [addReviewPopup]);

  return (
    addReviewPopup && (
      <>
        <div className="popup">
          {step === 1 && (
            <Step1 setStep={setStep} setAddReviewPopup={setAddReviewPopup} />
          )}
          {step === 2 && (
            <Step2 setStep={setStep} setAddReviewPopup={setAddReviewPopup} />
          )}
        </div>
      </>
    )
  );
};

export default AddReviewPopup;
