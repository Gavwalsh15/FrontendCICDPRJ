import React from "react";
import "./Product.css";

function Product({
  sellerEmail,
  title,
  adImageLink,
  price,
  description,
  createDate,
  addToCart,
}) {
  // Format the price to always have two decimal places
  const formattedPrice = Number(price).toFixed(2);

  if (adImageLink === null || adImageLink === "") {
    adImageLink =
      "https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg";
  }

  const handleBuyNowClick = async () => {
    console.log(localStorage.getItem("loggedEmail"));
    try {
      const response = await fetch("http://localhost:8081/api/ad/buyproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellerEmail: sellerEmail,
          buyerEmail: localStorage.getItem("loggedEmail"),
          productTitle: title,
          amount: price,
          createDate: createDate,
          time: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log("Product purchased successfully");
      } else {
        console.error("Failed to purchase product");
      }
    } catch (error) {
      console.error("Error during product purchase:", error);
    }
  };

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
      <div id="poduct_Buttons">
        <button onClick={handleBuyNowClick}>Buy Now</button>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
