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
      <div>
        <img src={aptBackground} className="logo" id="background-image" alt="Cozy Apartment" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Find the optimal location for you</h1>
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
          Let's Go!
          </button>
      </div>
      <Link to="/testOther">
        <button>
          Go to other page
        </button>
      </Link>
    </div>
  )
}

export default App
