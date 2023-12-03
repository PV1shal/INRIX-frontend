import React, { useState } from 'react';
import LocationForm from './locationForm'
import BedBathForm from './bedBathForm'
import DropdownForm from './preferenceForms'
import PriceButton from './priceButton'
import CommuteForm from './commuteForm'
import './formContainer.css'


const formContainer = () => {
  // You can add state or logic that involves multiple components here
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [bathPref, setBathPref] = useState();
  const [bedPref, setBedPref] = useState();
  const [preferences, setPreferences] = useState({
    noise: 1,
    parking: 1,
    transit: 1,
  });

  const [commuteSelection, setCommuteSelection] = useState(false);
  const [preferredTime, setPreferredTime] = useState('');
  const [destination, setDestination] = useState('');

  const priceProps = {minPrice, setMinPrice, maxPrice, setMaxPrice}
  const bedBathProps = {bedPref, setBedPref, bathPref, setBathPref}
  const locationProps = {location, setLocation}
  const preferencesProps = {preferences, setPreferences}
  const commuteProps = {commuteSelection, setCommuteSelection, preferredTime, setPreferredTime, destination, setDestination}

  const handleSubmit = () => {
    console.log("Submitting to backend")
    console.log("location:" + location)
    console.log("minPrice:" + minPrice)
    console.log("maxPrice:" +maxPrice)
    console.log("bathPref: "+bathPref)
    console.log("bedPref: " + bedPref)
    console.log("noise preference: "+ preferences.noise)
    console.log("parking preference: "+ preferences.parking)
    console.log("transit preference: "+ preferences.transit)
    console.log("commute preference: "+ commuteSelection)
    console.log("commuteTime: "+ preferredTime)
    console.log("destination: "+ destination)
  }

  return (
    <div className="formContainer">
        <div className="button-header"> 
            <LocationForm {...locationProps}/>
            <PriceButton  {...priceProps}/>
            <BedBathForm  {...bedBathProps}/>
            <CommuteForm {...commuteProps}/>
            <DropdownForm {...preferencesProps}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
};

export default formContainer;