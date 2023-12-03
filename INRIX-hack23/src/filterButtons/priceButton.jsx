import React, { useState } from 'react';
import './priceButton.css'

const priceButton = ({minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSubmit = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="price-dropdown">
      <button onClick={toggleDropdown}>Price</button>
      {showDropdown && (
        <div className="dropdown-content">
          <form>
            <label htmlFor="minPrice">Minimum:</label>
            <input type="text" id="minPrice" name="minPrice" value = {minPrice} onChange={(e) => setMinPrice(e.target.value)} />

            <label htmlFor="maxPrice">Maximum:</label>
            <input type="text" id="maxPrice" name="maxPrice" value = {maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

            <button type="button" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default priceButton;