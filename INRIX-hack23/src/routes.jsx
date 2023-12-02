import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestOther from './testOther.jsx';
import App from './App.jsx';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testOther" element={<TestOther/>} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;