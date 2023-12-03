import React, { useState } from 'react';
import './priceButton.css'

const priceButton = ({minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSubmit = () => {
    console.log("minPrice: "+minPrice)
    console.log("maxPrice: "+maxPrice)
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="price-dropdown">
      <button onClick={toggleDropdown}>Price</button>
      {showDropdown && (
        <div className="dropdown-content">
          <form>
            <label htmlFor="minPrice">Minimum:</label>
            <span className="currency">$</span>
            <input type="text" id="minPrice" name="minPrice" value = {minPrice} onChange={(e) => setMinPrice(e.target.value)} />

            <label htmlFor="maxPrice">Maximum:</label>
            <span className="currency">$</span>
            <input type="text" id="maxPrice" name="maxPrice" value = {maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

            <button type="button" onClick={handleSubmit}>Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default priceButton;