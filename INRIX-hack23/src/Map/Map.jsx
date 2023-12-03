//AIzaSyCf6SNMBR_-7n_NaMajaJOGW9sJOShskTU
import {React, useState} from 'react';
import { GoogleMap, useLoadScript, Marker,  InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';


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
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        onClick={handleMapClick}
      >
        
        {/* <Marker position={{ lat: defaultCenter.lat, lng: defaultCenter.lng }} /> */}
  
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => handleMarkerClick({lat: location.lat, lng: location.lng}, index)}
            options={{
              icon: {
                path: 'M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z',
                scale: 2,
                fillColor: selectedMarker === index ? 'Green' : 'Red',
                fillOpacity: 1,
                strokeWeight: 0,
              },
            }}
            onMouseOver = {handleMarkerMouseOver}
            onMouseOut = {handleMarkerMouseOut}
          >
            {/* {isInfoWindowOpen && (
              <InfoWindow
                position={{ lat: location.lat, lng: location.lng }}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div>
                
                  <img src="https://source.unsplash.com/1600x900?lanscape" alt="Image Preview" style={{ width: '100px', height: 'auto' }} />
                </div>
              </InfoWindow>
            )} */}
          </Marker>

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
