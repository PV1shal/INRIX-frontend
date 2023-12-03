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

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Button or dropdown to trigger the form */}
      <button onClick={toggleForm}>Commute</button>

      {/* Display form when triggered */}
      {formVisible && (
        <div
          style={{
            position: 'absolute',
            top: '100%', // Position it below the button
            left: 0,
            zIndex: 1, // Ensure it's above other elements
          }}
        >
          <div
            style={{
              background: '#f0f0f0', // Background color for the container
              padding: '10px', // Padding for the container
              borderRadius: '4px', // Rounded corners for the container
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow for the container
            }}
          >
            {/* Dropdown with Yes/No options as buttons */}
            <div style={{ display: 'flex' }}>
              <button
                onClick={() => handleSelection('Yes')}
                className={commuteSelection === 'Yes' ? 'selected' : ''}
                style={{ marginRight: '10px' }} // Add margin between buttons
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
                  style={{ width: '80px', marginRight: '10px' }}
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

