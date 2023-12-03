import React, { useState } from 'react';

const bedBathForm = ({bedPref, setBedPref, bathPref, setBathPref}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    // const [bathPref, setBathPref] = useState('1');
    // const [bedPref, setBedPref] = useState('1');
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

  const handleBedChange = (e) => {
    setBedPref(e.target.value);
  };
  const handleBathChange = (e) => {
    setBathPref(e.target.value);
  };

  const handleSubmit = () => {
    console.log("BedPref: " + bedPref);
    console.log("BathPref: " + bathPref);

    setShowDropdown(!showDropdown);

  };

  
    return (
      <div className="price-dropdown">
        <button className="button" onClick={toggleDropdown}>Bed/Bath</button>
        {showDropdown && (
          <div className="dropdown-content">
            <form>
            <label htmlFor="bedBath">Bed:</label>
            <select id="bedBath" name="Bed: " value={bedPref} onChange={handleBedChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p></p>
            <label htmlFor="bedBath">Bath:</label>
            <select id="bedBath" name="Bath:&nbsp" value={bathPref} onChange={handleBathChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p></p>
              <button className='save-button' type="button" onClick={handleSubmit}>Save</button>
            </form>
          </div>
        )}
      </div>
    );
}

export default bedBathForm;