import React, { useState } from 'react';
import "./Buttons.css"

const PreferenceButtons = ({ category, selectedValue, onSelect }) => {
  const buttons = Array.from({ length: 5 }, (_, index) => (
    <button
      key={index}
      onClick={() => onSelect(category, index + 1)}
      style={{
        marginRight: '5px',
        padding: '5px',
        border: '1px solid #ccc',
        backgroundColor: index + 1 === selectedValue ? '#4caf50' : 'transparent',
        color: index + 1 === selectedValue ? 'white' : 'black',
      }}
    >
      {index + 1}
    </button>
  ));

  return <div>{buttons}</div>;
};

const DropdownForm = ({ preferences, setPreferences }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handlePreferenceChange = (category, value) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [category]: value,
    }));
  };

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSubmit = () => {
    // Do something with the values, e.g., store them or use them in further processing
    // console.log("Saving results...");
    console.log("Preferences: ", preferences);

    // Toggle dropdown visibility
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button className="button" type="button" onClick={handleDropdownToggle}>
        Preferences
      </button>

      {dropdownVisible && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1,
            background: '#f0f0f0',
            padding: '10px',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '200px', // Adjust the width as needed
          }}
        >
          <div>
            1 - Not Important
          </div>
          <div>
            5 - Very Important
          </div>
          <div>
            <span>Noise: </span>
            <PreferenceButtons
              category="noise"
              selectedValue={preferences.noise}
              onSelect={handlePreferenceChange}
            />
          </div>
          <div>
            <span>Parking: </span>
            <PreferenceButtons
              category="parking"
              selectedValue={preferences.parking}
              onSelect={handlePreferenceChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownForm;
