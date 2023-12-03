import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const CustomMarker = ({ index, marker, handleMarkerClick, selectedMarker }) => {
  return (
    <>
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => handleMarkerClick({ lat: marker.lat, lng: marker.lng }, index)}
       
        options={{
          icon: {
            path: 'M265.36,530.719c0,0,197.627-223.944,197.627-333.09C462.987,88.482,374.507,0,265.36,0 C156.213,0,67.731,88.482,67.731,197.628C67.731,306.774,265.36,530.719,265.36,530.719z M265.36,61.171 c75.352,0,136.448,61.085,136.448,136.448S340.712,334.066,265.36,334.066c-75.353,0-136.447-61.085-136.447-136.447 S190.007,61.171,265.36,61.171z',
            scale: 1.5, // Adjust the scale as needed
            fillColor: selectedMarker === index ? 'red' : 'blue',
            fillOpacity: 1,
            strokeWeight: 0,
          },
        }}
      />
    </>
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
};

export default CustomMarker;
