import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./commonStyle/common.css";
import Map from "./Map/Map";
import FormContainer from "./filterButtons/formContainer";
import homeLogo from "./commonStyle/pics/home_with_heart.png";
import { Link } from "react-router-dom";

//main page
export default function MainPage() {
  const [listings, setListings] = useState();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      if (listings) {
        const newLocations = await Promise.all(
          listings.map(async (listing) => {
            const text = `${listing.streetAddress}, ${listing.city}, ${listing.state}, ${listing.zipCode}`;
            const requestOptions = {
              method: "GET",
            };
            const response = await fetch(
              `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
                text
              )}&apiKey=7e554f7a2a9c4a3f82b6579ffd92c0cf`,
              requestOptions
            );
            const result = await response.json();
            const location = result.features[0]?.geometry?.coordinates;
            return location
              ? {
                  location: { lat: location[1], lng: location[0] },
                  listingData: listing,
                }
              : null;
          })
        );
        setLocations(newLocations.filter(Boolean));
      }
    };

    fetchLocationData();
  }, [listings]);

  return (
    <div className="app-container">
      <div>
        <Link to="/">
          <img src={homeLogo} className="logo react main" alt="React logo" />
        </Link>
        <FormContainer setListings={setListings} />
      </div>
      <div className="map-container">
        <Map locations={locations} />
      </div>
    </div>
  );
}
