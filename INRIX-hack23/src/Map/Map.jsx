//AIzaSyCf6SNMBR_-7n_NaMajaJOGW9sJOShskTU
import {React, useState} from 'react';
import { GoogleMap, useLoadScript, Marker,  InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';

import CustomMarker from '../CustomMarker/CustomMarker';
import './map.css'


const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const defaultCenter = {
  lat: 37.77397, // default latitude
  lng: -122.431297, // default longitude
};


const Map = ({ locations }) => {
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(13);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCf6SNMBR_-7n_NaMajaJOGW9sJOShskTU',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleMarkerClick = (position, index) => {
 
    // Zoom in and set the center to the clicked marker's position
    setZoom(zoom + 2); 
    setCenter(position);
    setSelectedMarker(index);
  };

  const handleMapClick = (event) => {
    // Reset zoom and center if clicking on the map outside of a marker
    setZoom(13);
    setCenter({
     
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setSelectedMarker(null);
  };

  const handleMarkerMouseOver = () => {
   
    setInfoWindowOpen(true);
  };

  const handleMarkerMouseOut = () => {
    
    setInfoWindowOpen(false);
  };


  return (
    <div className='map-container'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        onClick={handleMapClick}
      >
        
        {/* <Marker position={{ lat: defaultCenter.lat, lng: defaultCenter.lng }} />
   */}
        {locations.map((location, index) => (
           <CustomMarker
              key={index}
              index={index}
              marker={location}
              handleMarkerClick={handleMarkerClick}
              selectedMarker={selectedMarker}
              handleMarkerMouseOver={handleMarkerMouseOver}
              handleMarkerMouseOut={handleMarkerMouseOut}
              isInfoWindowOpen={isInfoWindowOpen}
            />
        ))}       

      </GoogleMap>
    </div>
  );
};

Map.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Map;
