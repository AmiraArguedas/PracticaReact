import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';

export const Routing = () => {
  return (
    <Router>
        <Routes>  
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
   </Router>
  );
};

export default Routing
