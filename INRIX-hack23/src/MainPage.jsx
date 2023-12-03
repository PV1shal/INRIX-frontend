import React from 'react';
import BasicNav from './BasicNav/BasicNav';
import "./BasicNav/BasicNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filters from './Filters/Filters';
import Map from './Map/Map';

//main page
export default function MainPage() {

    return(
        <div className="app-container">
        <BasicNav />
        <Filters></Filters>
        <Map></Map>
        <div className="content">
            Hey!
        </div>
        </div>
    )
}