import React, { useState } from 'react';
import './Buttons.css'

const priceButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="price-dropdown">
      <button onClick={toggleDropdown}>Price</button>
      {showDropdown && (
        <div className="dropdown-content">
          <form>
            <label htmlFor="minPrice">Minimum:</label>
            <input type="text" id="minPrice" name="minPrice" />

            <label htmlFor="maxPrice">Maximum:</label>
            <input type="text" id="maxPrice" name="maxPrice" />
          </form>
        </div>
      )}
    </div>
  );
};

export default priceButton;