//import logo from './logo.svg';
import React from "react";
import './App.css';
import Signup from './Signup/Signup';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <h1>Sign Up</h1>
                <Routes>
                    <Route path="/checkout" element={[<Header />, <h1>I am a checkout page</h1>]}/>
                    <Route path="/" element={[<Header />, <Home />]}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;