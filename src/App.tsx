import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/Landing_Page/LandingPage'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
