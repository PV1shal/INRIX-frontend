// CommuteForm.jsx
import React, { useState } from 'react';

const CommuteForm = ({
  commuteSelection,
  setCommuteSelection,
  preferredTime,
  setPreferredTime,
  destination,
  setDestination,
}) => {
  const [formVisible, setFormVisible] = useState(false);

  const handleSelection = (value) => {
    setCommuteSelection(value);

    // Reset input fields when the user selects 'No'
    if (value === 'No') {
      setPreferredTime('');
      setDestination('');
    }
  };

  return (
    <div>
      {/* Button or dropdown to trigger the form */}
      <button onClick={() => setFormVisible(!formVisible)}>Commute</button>

      {/* Display form when triggered */}
      {formVisible && (
        <div>
          {/* Dropdown with Yes/No options as buttons */}
          <div>
            <button
              onClick={() => handleSelection('Yes')}
              className={commuteSelection === 'Yes' ? 'selected' : ''}
            >
              Yes
            </button>
            <button
              onClick={() => handleSelection('No')}
              className={commuteSelection === 'No' ? 'selected' : ''}
            >
              No
            </button>
          </div>

          {/* Display input fields based on selection */}
          {commuteSelection === 'Yes' && (
            <div>
              <label htmlFor="preferredTime">Preferred Commute Time:</label>
              <input
                type="text"
                id="preferredTime"
                placeholder="e.g., 30"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                style={{ width: '80px' }}
              />

              <label htmlFor="destination">Destination:</label>
              <input
                type="text"
                id="destination"
                placeholder="e.g., 123"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                style={{ width: '80px' }}
              />
            </div>
          )}
        </div>
      )}

      {/* Add CSS styles to your stylesheet */}
      <style>
        {`
          .selected {
            background-color: green;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default CommuteForm;
