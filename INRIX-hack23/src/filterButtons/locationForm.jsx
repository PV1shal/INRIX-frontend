import React, { useState } from 'react';

const locationForm = ({location, setLocation}) => {
//   const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    // Do something with the values, e.g., store them or use them in further processing
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
      <input id="location" name="location" value={location} onChange={handleLocationChange} onKeyDown={handleKeyPress}>
      </input>
      {/* <button type="button" onClick={handleSubmit}>
        Submit
      </button> */}
    </div>
  );
};

export default locationForm;