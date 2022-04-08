import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import Details from 'pages/Details';
import Homepage from 'pages/HomePage';
import Notfound from 'pages/NotFound';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import "./assets/css/app.css";



export default function App() {
  return(
   <div className="App">
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/details" element={<Details />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/congratulation" element={<Congratulation />} />
     <Route path="/error404" element={<Notfound />} />
      </Routes>
   </div>
  )
};
