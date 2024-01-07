// Signup.js

import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    birthday: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Error registering user');
        document.getElementById('error').innerHTML = await response.text();
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('error').innerHTML = error.message;
    }
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
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
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign Up</button>
      <h3 id='error'></h3>
    </form>
  );
};

export default Signup;
