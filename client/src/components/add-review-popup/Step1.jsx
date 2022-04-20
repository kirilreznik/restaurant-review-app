import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step1 = ({ setAddReviewPopup, setStep }) => {
  const [name, setName] = useState("");
  const [priceRange, setPriceRange] = useState("Select Price Range");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    const data = { name: name, price_range: priceRange, location: location };
    fetch(`http://localhost:5001/restaurants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        setAddReviewPopup(false);
        navigate("/");
      }
    });
  };

  return (
    <div className="popup-inner">
      <div className="inputs">
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Type name"
        ></input>
        <input
          value={location}
          onChange={handleLocationChange}
          placeholder="Type location"
        ></input>
        <select
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="price-dropdown"
        >
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
        <button className="orange-button" onClick={handleSubmit}>
          add
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
