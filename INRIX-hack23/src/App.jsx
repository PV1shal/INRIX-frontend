import { useState } from 'react'
import React from 'react'
import './App.css'
import aptBackground from './commonStyle/pics/apartment_photo1.jpg'
import homeLogo from './commonStyle/pics/home_with_heart.png'
import { Link } from 'react-router-dom';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={aptBackground} className="logo" id='background-image' alt="Cozy Apartment" />
      <div className="contentContainer" > 
        <img src={homeLogo} className="logo react" alt="React logo" />
        <h1>Find the optimal location for you</h1>
        <p></p>
        <p></p>
        <p></p>
        <Link to="/MainPage">
          <button class='button logo' type='button'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  
  )
}

export default App
