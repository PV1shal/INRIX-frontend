import React, { useState } from 'react';

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

const DropdownForm = ({preferences, setPreferences}) => {
  // const [preferences, setPreferences] = useState({
  //   noise: 1,
  //   parking: 1,
  //   transit: 1,
  // });
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
    <div>
      <button type="button" onClick={handleDropdownToggle}>
        Preferences
      </button>

      {dropdownVisible && (
        <div>
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
          <div>
            <span>Transit: </span>
            <PreferenceButtons
              category="transit"
              selectedValue={preferences.transit}
              onSelect={handlePreferenceChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
        Save Changes
      </button>
        </div>
      )}

      <br />

      
    </div>
  );
};

export default DropdownForm;
