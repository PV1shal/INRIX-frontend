import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from './filterButtons/formContainer';
import './commonStyle/common.css'



//main page
export default function MainPage() {
    return(
        <div className="app-container">
            <div className="button-header"> 
                <FormContainer />
            </div>
        </div>
    )
}