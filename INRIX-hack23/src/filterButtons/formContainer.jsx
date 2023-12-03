import React, { useState } from "react";
import LocationForm from "./locationForm";
import BedBathForm from "./bedBathForm";
import DropdownForm from "./preferenceForms";
import PriceButton from "./priceButton";
import CommuteForm from "./commuteForm";
import "./Buttons.css";
import axios from "axios";

const formContainer = ({ setListings }) => {
  // You can add state or logic that involves multiple components here
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [bathPref, setBathPref] = useState(1);
  const [bedPref, setBedPref] = useState(1);
  const [preferences, setPreferences] = useState({
    noise: 1,
    parking: 1,
  });

  const [commuteSelection, setCommuteSelection] = useState(false);
  const [preferredTime, setPreferredTime] = useState("");
  const [destination, setDestination] = useState("");
  const [locationLat, setLocationLat] = useState("");
  const [locationLng, setLocationLng] = useState("");

  const priceProps = { minPrice, setMinPrice, maxPrice, setMaxPrice };
  const bedBathProps = { bedPref, setBedPref, bathPref, setBathPref };
  const locationProps = { location, setLocation };
  const preferencesProps = { preferences, setPreferences };
  const commuteProps = {
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
  };

  const handleSubmit = async () => {
    const customerParams = {
      location: location,
      minPrice: minPrice,
      maxPrice: maxPrice,
      bathPref: bathPref,
      bedPref: bedPref,
      preferences: preferences,
      commuteSelection: commuteSelection,
      preferredTime: preferredTime,
      // destination: destination,
      lat: locationLat,
      long: locationLng,
    };
    console.log(customerParams);
    console.log(typeof customerParams);

    const listings = await axios.post(
      "http://localhost:3000/api/getListings",
      customerParams
    );
    console.log(listings);
    setListings(listings.data.filteredData);
  };

  return (
    <div className="formContainer">
      <div className="button-header">
        <LocationForm {...locationProps} />
        <PriceButton {...priceProps} />
        <BedBathForm {...bedBathProps} />
        <CommuteForm {...commuteProps} />
        <DropdownForm {...preferencesProps} />
        <button className="button" id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default formContainer;
