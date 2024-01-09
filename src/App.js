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

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [loggedEmail, setLoggedEmail] = useState(
    localStorage.getItem('loggedEmail')
  );
  

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedEmail');
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
          <NavLink to="/">
            <div className="website-name">WEBSITE</div>
          </NavLink>
          <ul className="sign">
            <li>
              <NavLink to="/checkout">
                CHECK-OUT
              </NavLink>
            </li>
            {!isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/signin">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup">
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
                  <NavLink to="/createAd">
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
