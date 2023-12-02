import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import App from './App.jsx';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage/>} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;