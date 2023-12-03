import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'
import aptBackground from './commonStyle/pics/apartment_photo1.jpg'
import { Link } from 'react-router-dom';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={aptBackground} className="logo" id='background-image' alt="Cozy Apartment" />
      <div className="contentContainer">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Find the optimal location for you</h1>
        <Link to="/MainPage">
          <button type='button'>
            Go to other page
          </button>
        </Link>
      </div>
    </div>
  
  )
}

export default App
