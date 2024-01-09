import React, { useState } from "react";
//Reuse the CSS sheet
import "../Signup/signup.css";

const Signin = ({ setIsLoggedIn, setLoggedEmail }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User signed in successfully");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedEmail", formData.email);
        setIsLoggedIn(true);
        setLoggedEmail(formData.email);
        window.location.href = "/";
      } else {
        console.error("Error signing in");
        document.getElementById("error").innerHTML = await response.text();
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("error").innerHTML = error.message;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign In</button>
      <h3 id="error"></h3>
    </form>
  );
};

export default Signin;
