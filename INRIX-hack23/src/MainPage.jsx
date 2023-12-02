import React from 'react';
import BasicNav from './BasicNav/BasicNav';
import "./BasicNav/BasicNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from './Collapse/ Collapsible';


//main page
export default function MainPage() {

    return(
        <div className="app-container">
        <BasicNav />
        <Collapsible></Collapsible>
        
        <div className="content">
            Hey!
        </div>
        </div>
    )
}