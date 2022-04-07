import Details from 'pages/Details';
import Homepage from 'pages/HomePage';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import "./assets/css/app.css";



export default function App() {
  return(
   <div className="App">
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/details" element={<Details />} />
      </Routes>
   </div>
  )
};
