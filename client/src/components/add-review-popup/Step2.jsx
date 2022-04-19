const Step2 = ({ setAddReviewPopup, setStep }) => {
  const handleClickBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    setAddReviewPopup(false);
    setStep(1);
  };

  return (
    <div className="popup-inner">
      <textarea
        className="details-input"
        type="text"
        rows="3"
        placeholder="Write your personal experiense"
      ></textarea>
      <div>
        <button className="orange-button" onClick={handleSubmit}>
          submit
        </button>
        <button className="red-button" onClick={handleClickBack}>
          back
        </button>
      </div>
    </div>
  );
};

export default Step2;
