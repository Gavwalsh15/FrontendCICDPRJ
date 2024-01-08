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

  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedEmail(null);
  };

  const handleForceLogin = (email) => {
    setIsLoggedIn(true);
    setLoggedEmail(email);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (productId) => {
    setCart(cart.reduce((result, item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          result.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        result.push(item);
      }
      return result;
    }, []));
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
          <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/createAd" element={<CreateAd loggedEmail={loggedEmail}/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
