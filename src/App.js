import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import CreateAd from "./CreateAd/CreateAd";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedEmail, setLoggedEmail] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedEmail(null);
  };

  const handleForceLogin = (email) => {
    setIsLoggedIn(true);
    setLoggedEmail(email);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" activeClassName="website-name">
            <div className="website-name">WEBSITE</div>
          </NavLink>
          <ul className="sign">
            <li>
              <NavLink to="/checkout" activeClassName="active">
                CHECK-OUT
              </NavLink>
            </li>
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                <li>
                  <NavLink to="/createAd" activeClassName="active">
                    CreateAd
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <button onClick={() => handleForceLogin("test@example.com")}>
                Force Login
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} setLoggedEmail={setLoggedEmail}/>}
          />
          <Route
            path="/signin"
            element={<Signin setIsLoggedIn={setIsLoggedIn} setLoggedEmail={setLoggedEmail}/>}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/createAd" element={<CreateAd loggedEmail={loggedEmail}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
