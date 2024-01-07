import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout"


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink exact to="/" activeClassName="website-name">
            <div className="website-name">WEBSITE</div>
          </NavLink>
          <ul class="sign">
            <li>
            <NavLink to="/checkout" activeClassName="active">
                CHECK-OUT 
              </NavLink>
              </li> 
            <li>
              <NavLink to="/signin" activeClassName="active">
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
