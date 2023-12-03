import React, { useState } from 'react';
import './Buttons.css'

const priceButton = ({minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="price-dropdown">
      <button className= "button" onClick={toggleDropdown}>Price</button>
      {showDropdown && (
        <div className="dropdown-content">
          <form>
            <label htmlFor="minPrice">Minimum:</label>
            <input type="text" id="minPrice" name="minPrice" value={minPrice}  onChange= {(e)=> setMinPrice(e.target.value)}/>

            <label htmlFor="maxPrice">Maximum:</label>
            <input type="text" id="maxPrice" name="maxPrice" value={maxPrice} onChange= {(e)=> setMaxPrice(e.target.value)}/>
          </form>
          <button class="save-button" type="button" onClick={toggleDropdown}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default priceButton;