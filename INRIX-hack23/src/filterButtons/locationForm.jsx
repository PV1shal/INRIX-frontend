import React, { useState } from 'react';

const locationForm = ({location, setLocation}) => {

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Location: " + location);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <label htmlFor="location">Location:</label>
      <input id="location" name="location" value={location} onChange={handleLocationChange} onKeyDown={handleKeyPress} placeholder='ZIP, Address, Neighborhood, or City'>
      </input>
    </div>
  );
};

export default locationForm;