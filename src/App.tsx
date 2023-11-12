import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/sign-up" element={<SignUp />}/>
       <Route path="/login" element={<Login />}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
