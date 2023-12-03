import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './commonStyle/common.css'
import Filters from './Filters/Filters';
import Map from './Map/Map';
import FormContainer from './filterButtons/formContainer';
//main page
export default function MainPage() {

    const locations = [
        { lat: 37.774929, lng: -122.419416 }, // Union Square
        { lat: 37.8049, lng: -122.4034 },     // Chinatown
        { lat: 37.7691, lng: -122.4837 },     // Golden Gate Park
        { lat: 37.7749, lng: -122.4194 },     // San Francisco City Hall
        { lat: 37.7955, lng: -122.3933 },     // Transamerica Pyramid
        { lat: 37.7749, lng: -122.4313 },     // Civic Center
        { lat: 37.7879, lng: -122.4075 },     // North Beach
        { lat: 37.7890, lng: -122.3896 },     // Fisherman's Wharf
        { lat: 37.7644, lng: -122.4581 },     // Ocean Beach
        { lat: 37.7749, lng: -122.4194 }      // Market Street
      ];

      
    return(
        <div className="app-container">
            <div className="button-header"> 
                <FormContainer />
            </div>
            <Map locations={locations} />
        </div>
    )
}