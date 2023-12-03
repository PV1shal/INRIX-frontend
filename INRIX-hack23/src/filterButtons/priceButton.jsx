import React, { useState } from 'react';
import './priceButton.css'

const priceButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

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
            <input type="text" id="minPrice" name="minPrice" onChange={(e) => setMinPrice(e.target.value)} />

            <label htmlFor="maxPrice">Maximum:</label>
            <input type="text" id="maxPrice" name="maxPrice" onChange={(e) => setMaxPrice(e.target.value)} />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default priceButton;