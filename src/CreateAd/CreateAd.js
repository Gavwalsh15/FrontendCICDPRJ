import React, { useState } from "react";
import "./CreateAd.css";

const CreateaAd = ({ loggedEmail }) => {
  const [formData, setFormData] = useState({
    title: "",
    sellerEmail: loggedEmail,
    adImageLink: "",
    price: "",
    description: "",
    createDate: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/ad/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Ad created successfully");
      } else {
        console.error("Error Creating Ad");
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
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Image Link:
        <input
          type="text"
          name="adImageLink"
          value={formData.adImageLink}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
      </label>
      <label>
        Description:
        <br></br>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Ad</button>
      <h3 id="error"></h3>
    </form>
  );
};

export default CreateaAd;
