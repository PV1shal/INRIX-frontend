import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCards/CustomCards';

const Window = ({ marker, handleMarkerClick, handleMarkerMouseOver,isInfoWindowOpen}) => {
    return (
        <>
            <InfoWindow 
            position={{ lat: marker.lat, lng: marker.lng }}
            >
              <CustomCard
                score={100}
                name={"APT1"}
                imageUrl={"https://source.unsplash.com/1600x900?landscap"}
                onClick={() => handleMarkerClick(marker)}
              />
             </InfoWindow>
        </>
        );
};

  Window.propTypes = {
    marker: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    handleMarkerClick: PropTypes.func.isRequired,
    handleMarkerMouseOver: PropTypes.func.isRequired,
    isInfoWindowOpen: PropTypes.bool.isRequired,
   
  };

  export default Window;
  