// CustomMarker.jsx
import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import Window from '../Window/Window'

const CustomMarker = ({ index, marker, handleMarkerClick, selectedMarker, handleMarkerMouseOver, handleMarkerMouseOut}) => {

  const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);

  const handleMarkerMouseOverInternal = () => {
    // setInfoWindowOpen(true);
  };

  const handleMarkerClickInteral = () =>{
    setInfoWindowOpen(true);
    
  }

  const handleMarkerMouseOutInternal = () => {
    // setInfoWindowOpen(false);
   
  };

  return (
    <Marker
      key={index}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={() => {
        handleMarkerClick({ lat: marker.lat, lng: marker.lng }, index);
      
        // Call another function here
        handleMarkerClickInteral();


      }}
      options={{
        icon: {
          path: 'M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z',
          scale: 1.5,
          fillColor: selectedMarker === index ? 'Green' : 'Red',
          fillOpacity: 1,
          strokeWeight: 0,
        },
        
      }}
      onMouseOver={handleMarkerMouseOverInternal}
      onMouseOut={handleMarkerMouseOutInternal}
    >   
    {isInfoWindowOpen  && (
         <Window 
            marker={marker}
            handleMarkerClick = {handleMarkerClick}
            handleMarkerMouseOver = {handleMarkerMouseOver}
            isInfoWindowOpen = {isInfoWindowOpen}
         />
      )}
    </Marker>
  );
};

CustomMarker.propTypes = {
  index: PropTypes.number.isRequired,
  marker: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
  selectedMarker: PropTypes.number.isRequired,
  handleMarkerMouseOver: PropTypes.func.isRequired,
  handleMarkerMouseOut: PropTypes.func.isRequired,
  
};

export default CustomMarker;
