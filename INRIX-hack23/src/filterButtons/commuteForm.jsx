import React, { useState } from "react";

const CommuteForm = ({
  commuteSelection,
  setCommuteSelection,
  preferredTime,
  setPreferredTime,
  destination,
  setDestination,
  locationLat,
  setLocationLat,
  locationLng,
  setLocationLng,
}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState("");

  const handleSelection = (value) => {
    setCommuteSelection(value);

    // Reset input fields when the user selects 'No'
    if (value === "No") {
      setPreferredTime("");
      setDestination("");
    }
  };

  const handleKeyUp = async () => {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=7e554f7a2a9c4a3f82b6579ffd92c0cf`
    );
    const data = await response.json();
    setSuggestions(data.features.map((feature) => feature.properties));
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.formatted);
    setSuggestions([]);
    setLocationLat(suggestion.lat);
    setLocationLng(suggestion.lon);
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div style={{ position: "relative" }}>
      <button className="button" onClick={toggleForm}>Commute</button>

      {formVisible && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "4px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex" }}>
              <button
                onClick={() => handleSelection("Yes")}
                className={commuteSelection === "Yes" ? "selected" : ""}
                style={{ marginRight: "10px" }}
              >
                Yes
              </button>
              <button
                onClick={() => handleSelection("No")}
                className={commuteSelection === "No" ? "selected" : ""}
              >
                No
              </button>
            </div>

            {commuteSelection === "Yes" && (
              <div>
                <label htmlFor="preferredTime">Preferred Commute Time:</label>
                <input
                  type="text"
                  id="preferredTime"
                  placeholder="ex. 30"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  style={{ width: "100px" }}
                />

                <label htmlFor="destination">Destination:</label>
                <input
                  type="text"
                  id="destination"
                  placeholder="ex. Amazon"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyUp={handleKeyUp}
                  style={{ width: "100px" }}
                />

                {suggestions.length > 0 && (
                  <ul>
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion.formatted}
                      </li>
                    ))}
                  </ul>
                )}

                <button type="button" onClick={toggleForm}>
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          .selected {
            background-color: green;
            color: white;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            border: 1px solid #ccc;
            max-height: 100px;
            overflow-y: auto;
          }

          li {
            padding: 5px;
            cursor: pointer;
            &:hover {
              background-color: #f0f0f0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CommuteForm;
