import React from "react";
import "./Product.css";

function Product({ sellerEmail, title, adImageLink, price, description, createDate }) {
  // Format the price to always have two decimal places
  const formattedPrice = Number(price).toFixed(2);

  if (adImageLink === null || adImageLink === "") {
    adImageLink = "https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"
  }

  return (
    <div className="product">
      <div className="product_details">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{formattedPrice}</strong>
        </p>
      </div>
      <img src={adImageLink} alt={title} />
      <button>Buy Now</button>
    </div>
  );
}

export default Product;
