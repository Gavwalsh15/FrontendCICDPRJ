import React from "react";
import "./Checkout.css";
import handleBuyNow from "../Checkout/PurchaseService";

function Checkout({ cart, removeFromCart }) {
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onBuyNowClick = () => {
    handleBuyNow(cart, calculateTotal);
  };

  return (
    <div className="checkout">
      <div className="checkout_viewbasket">
        <h2 className="checkout_title">Your Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout_item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <div className="checkout_subtotal">
          <h2>The Subtotal</h2>
          <h2>Total: ${calculateTotal(cart).toFixed(2)}</h2>
          <button onClick={onBuyNowClick}>Buy Now</button>
          <h3 id="error"></h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
